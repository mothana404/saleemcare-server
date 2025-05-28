const socketIo = require("socket.io");
const aiService = require("./services/ai.service");
const { socketAuth } = require("./middlewares/auth");
const prisma = require("./config/prisma");

function setupSocket(server) {
  const io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use(socketAuth);

  io.on("connection", async (socket) => {
    console.log(`User connected: ${socket.user.id}`);

    try {
      // Get or create user's current active session
      let currentSession = await prisma.chatSession.findFirst({
        where: {
          userId: socket.user.id,
          isActive: true,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

      if (!currentSession) {
        // Create a new session for the user
        currentSession = await prisma.chatSession.create({
          data: {
            userId: socket.user.id,
            title: `${socket.user.type} Chat`,
          },
        });
      }

      // Send current session info to client
      socket.emit("chat:session:current", {
        id: currentSession.id,
        title: currentSession.title,
        createdAt: currentSession.createdAt,
        updatedAt: currentSession.updatedAt,
      });

      // send recent messages from the current session
      const recentMessages = await prisma.chatMessage.findMany({
        where: {
          sessionId: currentSession.id,
        },
        orderBy: {
          createdAt: "asc",
        },
        take: 50,
        select: {
          id: true,
          type: true,
          content: true,
          createdAt: true,
        },
      });

      if (recentMessages.length > 0) {
        socket.emit("chat:messages:history", {
          sessionId: currentSession.id,
          messages: recentMessages,
        });
      }
    } catch (error) {
      console.error("Connection setup error:", error);
      socket.emit("chat:error", {
        message: "Failed to initialize chat session",
        type: "connection_error",
      });
    }

    // Handle real-time AI chat
    socket.on("chat:message", async (data) => {
      try {
        const { message, sessionId } = data;

        if (!message) {
          throw new Error("Message is required");
        }

        const isValid = await aiService.validateMessage(message);

        if (!isValid) {
          throw new Error("Message content is not appropriate");
        }

        let chatSession;

        if (sessionId) {
          chatSession = await prisma.chatSession.findFirst({
            where: {
              id: sessionId,
              userId: socket.user.id,
              isActive: true,
            },
          });

          if (!chatSession) {
            throw new Error(
              "Invalid session ID or session doesn't belong to user"
            );
          }
        } else {
          chatSession = await prisma.chatSession.findFirst({
            where: {
              userId: socket.user.id,
              isActive: true,
            },
            orderBy: {
              updatedAt: "desc",
            },
          });

          if (!chatSession) {
            chatSession = await prisma.chatSession.create({
              data: {
                userId: socket.user.id,
                title: `Chat ${new Date().toLocaleString()}`,
              },
            });
          }
        }

        const userMessage = await prisma.chatMessage.create({
          data: {
            sessionId: chatSession.id,
            userId: socket.user.id,
            type: socket.user.type,
            content: message,
            isDelivered: true,
          },
        });

        await prisma.chatSession.update({
          where: { id: chatSession.id },
          data: { updatedAt: new Date() },
        });

        socket.emit("chat:message:sent", {
          id: userMessage.id,
          sessionId: chatSession.id,
          type: socket.user.type,
          content: message,
          createdAt: userMessage.createdAt,
        });

        socket.emit("chat:ai:typing", {
          sessionId: chatSession.id,
          isTyping: true,
        });

        const previousMessages = await prisma.chatMessage.findMany({
          where: {
            sessionId: chatSession.id,
          },
          orderBy: {
            createdAt: "asc",
          },
          take: 20, 
          select: {
            type: true,
            content: true,
          },
        });

        const conversationContext = previousMessages.map((msg) => ({
          role: msg.type === "USER" ? "user" : "assistant",
          content: msg.content,
        }));

        const aiResponse = await aiService.generateResponseWithContext(
          message,
          conversationContext
        );

        const aiMessage = await prisma.chatMessage.create({
          data: {
            sessionId: chatSession.id,
            userId: socket.user.id,
            type: "AI",
            content: aiResponse,
            isDelivered: true,
            metadata: {
              model: "gpt-3.5-turbo", 
              tokensUsed: aiResponse.length, 
            },
          },
        });

        socket.emit("chat:ai:typing", {
          sessionId: chatSession.id,
          isTyping: false,
        });

        socket.emit("chat:ai:response", {
          id: aiMessage.id,
          sessionId: chatSession.id,
          type: "AI",
          content: aiResponse,
          createdAt: aiMessage.createdAt,
        });
      } catch (error) {
        console.error("Chat error:", error);

        socket.emit("chat:ai:typing", {
          sessionId: data.sessionId,
          isTyping: false,
        });

        socket.emit("chat:error", {
          sessionId: data.sessionId,
          message: error.message || "Failed to process message",
          type: "error",
        });
      }
    });

    socket.on("chat:user:typing:start", (data) => {
      socket.emit("chat:user:typing", {
        sessionId: data.sessionId,
        isTyping: true,
      });
    });

    socket.on("chat:user:typing:stop", (data) => {
      socket.emit("chat:user:typing", {
        sessionId: data.sessionId,
        isTyping: false,
      });
    });

    socket.on("chat:session:create", async (data) => {
      try {
        const newSession = await prisma.chatSession.create({
          data: {
            userId: socket.user.id,
            title: data.title || `New Chat ${new Date().toLocaleString()}`,
          },
        });

        socket.emit("chat:session:created", {
          id: newSession.id,
          title: newSession.title,
          createdAt: newSession.createdAt,
        });
      } catch (error) {
        console.error("Session creation error:", error);
        socket.emit("chat:error", {
          message: "Failed to create chat session",
          type: "session_error",
        });
      }
    });

    socket.on("chat:messages:mark_read", async (data) => {
      try {
        await prisma.chatMessage.updateMany({
          where: {
            sessionId: data.sessionId,
            userId: socket.user.id,
            isRead: false,
          },
          data: {
            isRead: true,
          },
        });

        socket.emit("chat:messages:marked_read", {
          sessionId: data.sessionId,
        });
      } catch (error) {
        console.error("Mark read error:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.user.id}`);
    });
  });

  return io;
}

module.exports = setupSocket;
