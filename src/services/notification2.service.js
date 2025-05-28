// src/services/notificationService.js
import { PrismaClient } from '@prisma/client';
import { Server } from 'socket.io';

class NotificationService {
  constructor() {
    this.prisma = new PrismaClient();
    this.io = null;
  }

  /**
   * Initialize the notification service with Socket.io
   * @param {Server} io - Socket.io server instance
   */
  initialize(io) {
    this.io = io;
    console.log('Notification service initialized with Socket.io');
  }

  /**
   * Create a notification in the database
   * @param {string} userId - User ID to send notification to
   * @param {string} title - Notification title
   * @param {string} message - Notification message
   * @param {Object} [metadata] - Optional metadata to store with notification
   * @returns {Promise<Object>} - Created notification
   */
  async createNotification(userId, title, message, metadata = {}) {
    try {
      // Create notification in database
      const notification = await this.prisma.notification.create({
        data: {
          userId,
          title,
          message,
          // Add any additional fields if your schema supports metadata
        },
      });

      // Send real-time notification if Socket.io is initialized
      if (this.io) {
        this.io.to(`user:${userId}`).emit('notification', {
          id: notification.id,
          title,
          message,
          createdAt: notification.createdAt,
          metadata
        });
      }

      return notification;
    } catch (error) {
      console.error('Error creating notification:', error);
      throw new Error(`Notification creation error: ${error.message}`);
    }
  }

  /**
   * Create notifications for multiple users at once
   * @param {Array<string>} userIds - Array of user IDs 
   * @param {string} title - Notification title
   * @param {string} message - Notification message
   * @param {Object} [metadata] - Optional metadata to store with notification
   * @returns {Promise<Array<Object>>} - Created notifications
   */
  async createBulkNotifications(userIds, title, message, metadata = {}) {
    try {
      // Filter out any duplicate user IDs
      const uniqueUserIds = [...new Set(userIds)];

      // Create notifications in database using a transaction
      const notifications = await this.prisma.$transaction(
        uniqueUserIds.map(userId => 
          this.prisma.notification.create({
            data: {
              userId,
              title,
              message,
            },
          })
        )
      );

      // Send real-time notifications if Socket.io is initialized
      if (this.io) {
        uniqueUserIds.forEach(userId => {
          this.io.to(`user:${userId}`).emit('notification', {
            title,
            message,
            createdAt: new Date(),
            metadata
          });
        });
      }

      return notifications;
    } catch (error) {
      console.error('Error creating bulk notifications:', error);
      throw new Error(`Bulk notification creation error: ${error.message}`);
    }
  }

  /**
   * Mark a notification as read
   * @param {string} notificationId - ID of notification to mark as read
   * @returns {Promise<Object>} - Updated notification
   */
  async markAsRead(notificationId) {
    try {
      const notification = await this.prisma.notification.update({
        where: {
          id: notificationId,
        },
        data: {
          isRead: true,
        },
      });

      return notification;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw new Error(`Notification update error: ${error.message}`);
    }
  }

  /**
   * Mark all notifications as read for a user
   * @param {string} userId - User ID to mark notifications as read
   * @returns {Promise<Object>} - Count of updated notifications
   */
  async markAllAsRead(userId) {
    try {
      const result = await this.prisma.notification.updateMany({
        where: {
          userId,
          isRead: false,
        },
        data: {
          isRead: true,
        },
      });

      // Notify client of mass update if Socket.io is initialized
      if (this.io) {
        this.io.to(`user:${userId}`).emit('notificationsReadAll');
      }

      return result;
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
      throw new Error(`Notification mass update error: ${error.message}`);
    }
  }

  /**
   * Get all notifications for a user
   * @param {string} userId - User ID to get notifications for
   * @param {Object} [options] - Query options (limit, offset, includeRead)
   * @returns {Promise<Array<Object>>} - Notifications
   */
  async getUserNotifications(userId, options = {}) {
    const { limit = 20, offset = 0, includeRead = true } = options;

    try {
      const where = { userId };
      
      // Filter out read notifications if not including read
      if (!includeRead) {
        where.isRead = false;
      }

      const notifications = await this.prisma.notification.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        take: limit,
        skip: offset,
      });

      return notifications;
    } catch (error) {
      console.error('Error fetching user notifications:', error);
      throw new Error(`Notification fetch error: ${error.message}`);
    }
  }

  /**
   * Delete a notification
   * @param {string} notificationId - ID of notification to delete
   * @returns {Promise<Object>} - Deleted notification
   */
  async deleteNotification(notificationId) {
    try {
      const notification = await this.prisma.notification.delete({
        where: {
          id: notificationId,
        },
      });

      return notification;
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw new Error(`Notification deletion error: ${error.message}`);
    }
  }

  /**
   * Send a real-time event (without creating a database notification)
   * @param {string} userId - User ID to send event to
   * @param {string} eventName - Name of the event
   * @param {Object} data - Event data
   */
  sendEvent(userId, eventName, data) {
    if (!this.io) {
      console.warn('Socket.io not initialized, cannot send event');
      return;
    }

    this.io.to(`user:${userId}`).emit(eventName, data);
  }
}

// Export as singleton
const notificationService = new NotificationService();
export default notificationService;