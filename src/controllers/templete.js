// src/services/dataProcessingService.js
import { PrismaClient } from '@prisma/client';
import aiService from './aiService.js';
import notificationService from './notificationService.js';

class DataProcessingService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Process data through AI and handle storage and notifications
   * @param {string} senderId - ID of the user sending the data
   * @param {string} dataOne - First data point
   * @param {string} dataTwo - Second data point
   * @param {string} dataThree - Third data point
   * @param {string} [receiverId] - Optional ID of user to receive results
   * @returns {Promise<Object>} - Processed request data
   */
  async processRequest(senderId, dataOne, dataTwo, dataThree, receiverId = null) {
    try {
      // Validate sender exists
      const sender = await this.prisma.user.findUnique({
        where: { id: senderId },
        select: { id: true, userName: true, email: true }
      });

      if (!sender) {
        throw new Error('Sender not found');
      }

      // Validate receiver exists if provided
      let receiver = null;
      if (receiverId) {
        receiver = await this.prisma.user.findUnique({
          where: { id: receiverId },
          select: { id: true }
        });

        if (!receiver) {
          throw new Error('Receiver not found');
        }
      }

      // Process data with AI
      const promptText = this._generatePrompt(dataOne, dataTwo, dataThree);
      const aiResponse = await aiService.processData(dataOne, dataTwo, dataThree);

      // Store request in database
      const aiRequest = await this.prisma.aIRequest.create({
        data: {
          senderId,
          receiverId,
          dataOne,
          dataTwo,
          dataThree,
          promptText,
          aiResponse,
          isProcessed: true,
          isDelivered: receiverId ? false : true,
        },
      });

      // Send notification to sender
      await notificationService.createNotification(
        senderId,
        'AI Analysis Complete',
        'Your request has been processed by our AI system.',
        { requestId: aiRequest.id }
      );

      // Send data to receiver if specified
      if (receiverId) {
        // Send notification to receiver
        await notificationService.createNotification(
          receiverId,
          'New AI Analysis Available',
          `User ${sender.userName || 'Anonymous'} has shared an AI analysis with you.`,
          { 
            requestId: aiRequest.id,
            senderId,
            senderName: sender.userName || 'Anonymous'
          }
        );

        // Send real-time event with data
        notificationService.sendEvent(receiverId, 'newAIDataReceived', {
          requestId: aiRequest.id,
          senderId,
          senderName: sender.userName || 'Anonymous',
          dataOne,
          dataTwo,
          dataThree,
          aiResponse,
        });

        // Mark as delivered
        await this.prisma.aIRequest.update({
          where: { id: aiRequest.id },
          data: { isDelivered: true },
        });
      }

      return aiRequest;
    } catch (error) {
      console.error('Error processing AI request:', error);
      throw error;
    }
  }

  /**
   * Generate AI prompt from data points
   * @private
   */
  _generatePrompt(dataOne, dataTwo, dataThree) {
    return `I have the following data: 
Data 1: ${dataOne}
Data 2: ${dataTwo}
Data 3: ${dataThree}

Please analyze this information and provide insights.`;
  }

  /**
   * Get AI request history for a user
   * @param {string} userId - User ID to get history for
   * @param {Object} [options] - Query options (limit, offset)
   * @returns {Promise<Array<Object>>} - Request history
   */
  async getUserRequestHistory(userId, options = {}) {
    const { limit = 20, offset = 0 } = options;

    try {
      const requests = await this.prisma.aIRequest.findMany({
        where: {
          OR: [
            { senderId: userId },
            { receiverId: userId },
          ],
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: limit,
        skip: offset,
      });

      return requests;
    } catch (error) {
      console.error('Error fetching user request history:', error);
      throw new Error(`History fetch error: ${error.message}`);
    }
  }

  /**
   * Get a specific AI request by ID
   * @param {string} requestId - Request ID
   * @param {string} userId - User ID (for authorization)
   * @returns {Promise<Object>} - Request data
   */
  async getRequestById(requestId, userId) {
    try {
      const request = await this.prisma.aIRequest.findUnique({
        where: { id: requestId },
      });

      if (!request) {
        throw new Error('Request not found');
      }

      // Check if user has access to this request
      if (request.senderId !== userId && request.receiverId !== userId) {
        throw new Error('Not authorized to access this request');
      }

      return request;
    } catch (error) {
      console.error('Error fetching AI request:', error);
      throw error;
    }
  }
}

// Export as singleton
const dataProcessingService = new DataProcessingService();
export default dataProcessingService;