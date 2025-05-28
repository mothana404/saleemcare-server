const { GoogleGenerativeAI } = require('@google/generative-ai');

/**
 * AI Service for handling chat interactions using Google's Gemini API
 */
class AIService {
  constructor() {
    // Ensure API key is provided
    const apiKey = "AIzaSyDkhCC-HMGcxXZ-Gd6Wi_V_rM8nHH-bfzM";
    
    // if (!apiKey || apiKey === "YOUR_API_KEY") {
    //   throw new Error('Google AI API key is required. Please set GOOGLE_AI_API_KEY or GEMINI_API_KEY in your environment variables.');
    // }

    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  /**
   * Generates an AI response for a given user message
   * @param {string} message - The user's input message
   * @returns {Promise<string>} The AI generated response
   */
  async generateResponse(message) {
    try {
      const systemPrompt = 'You are a helpful and knowledgeable assistant, providing clear and accurate responses.';
      
      const prompt = `${systemPrompt}\n\nUser: ${message}`;
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      
      return response.text();
    } catch (error) {
      console.error('Error generating AI response:', error);
      throw new Error('Failed to generate AI response');
    }
  }

  /**
   * Validates if the message is appropriate and safe
   * @param {string} message - Message to validate
   * @returns {Promise<boolean>} Whether the message is valid
   */
  async validateMessage(message) {
    try {
      const moderationPrompt = 'You are a content moderator. Respond with ONLY "true" if the content is appropriate and safe, or "false" if it contains inappropriate, harmful, or unsafe content. Do not add any other text to your response.';
      
      const prompt = `${moderationPrompt}\n\nContent to evaluate: ${message}`;
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const resultText = text.toLowerCase().trim();
      return resultText === 'true';
    } catch (error) {
      console.error('Error validating message:', error);
      // Return true by default if validation fails to avoid blocking legitimate messages
      return true;
    }
  }

  /**
   * Generates a chat response with conversation history
   * @param {Array} messages - Array of message objects with role and content
   * @returns {Promise<string>} The AI generated response
   */
  async generateChatResponse(messages) {
    try {
      // Build conversation history
      let conversation = 'You are a helpful and knowledgeable assistant, providing clear and accurate responses.\n\n';
      
      messages.forEach(msg => {
        const role = msg.role === 'assistant' ? 'Assistant' : 'User';
        conversation += `${role}: ${msg.content}\n`;
      });
      
      conversation += 'Assistant:';

      const result = await this.model.generateContent(conversation);
      const response = await result.response;
      
      return response.text();
    } catch (error) {
      console.error('Error generating chat response:', error);
      throw new Error('Failed to generate chat response');
    }
  }

  /**
   * Streams AI response for real-time chat experience
   * @param {string} message - The user's input message
   * @param {Function} onChunk - Callback function for each response chunk
   * @returns {Promise<string>} The complete AI response
   */
  async generateStreamingResponse(message, onChunk) {
    try {
      const systemPrompt = 'You are a helpful and knowledgeable assistant, providing clear and accurate responses.';
      const prompt = `${systemPrompt}\n\nUser: ${message}`;
      
      const result = await this.model.generateContentStream(prompt);
      
      let fullResponse = '';
      
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        if (chunkText) {
          fullResponse += chunkText;
          onChunk(chunkText);
        }
      }

      return fullResponse;
    } catch (error) {
      console.error('Error generating streaming response:', error);
      throw new Error('Failed to generate streaming response');
    }
  }

  /**
   * Analyzes sentiment of a message
   * @param {string} message - Message to analyze
   * @returns {Promise<Object>} Sentiment analysis result
   */
  async analyzeSentiment(message) {
    try {
      const prompt = `Analyze the sentiment of this message and respond with a JSON object containing "sentiment" (positive/negative/neutral) and "confidence" (0-1 scale):\n\n"${message}"`;
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      try {
        return JSON.parse(text);
      } catch (parseError) {
        return { sentiment: 'neutral', confidence: 0.5 };
      }
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      return { sentiment: 'neutral', confidence: 0.5 };
    }
  }

  /**
   * Generates a summary of a conversation
   * @param {Array} messages - Array of messages to summarize
   * @returns {Promise<string>} Summary of the conversation
   */
  async summarizeConversation(messages) {
    try {
      const conversation = messages.map(msg => 
        `${msg.isFromAI ? 'AI' : 'User'}: ${msg.content}`
      ).join('\n');

      const prompt = `Please provide a concise summary of this conversation:\n\n${conversation}`;
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      
      return response.text();
    } catch (error) {
      console.error('Error summarizing conversation:', error);
      throw new Error('Failed to summarize conversation');
    }
  }
}

// Export a singleton instance
module.exports = new AIService();