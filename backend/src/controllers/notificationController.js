// Notification Controller

// Import the Prisma client to interact with the database.
const prisma = require('../prismaClient');

// Allowed notification types from the Prisma schema.
const notificationTypes = [
  'ANNOUNCEMENT',
  'COMPANY',
  'DRIVE',
  'REMINDER',
];

/**
 * Get all notifications belonging to the logged-in user.
 */
const getNotifications = async (req, res) => {
  try {
    // Get the logged-in user's ID from the JWT.
    const userId = req.user.id;

    // Find notifications belonging only to this user.
    const notifications = await prisma.notification.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Return the user's notifications.
    return res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    // Return an error if fetching notifications fails.
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch notifications',
    });
  }
};

/**
 * Create a notification for a specific user.
 * Access is restricted to ADMIN and TPO through the route middleware.
 */
const createNotification = async (req, res) => {
  try {
    // Get notification details from the request body.
    const { userId, title, message, type } = req.body;

    // Check whether all required fields are provided.
    if (!userId || !title || !message || !type) {
      return res.status(400).json({
        success: false,
        message: 'userId, title, message and type are required',
      });
    }

    // Convert userId into a number.
    const numericUserId = Number(userId);

    // Check whether userId is a valid number.
    if (Number.isNaN(numericUserId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid userId',
      });
    }

    // Check whether the notification type is valid.
    if (!notificationTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid notification type',
      });
    }

    // Check whether the target user exists.
    const user = await prisma.user.findUnique({
      where: {
        id: numericUserId,
      },
    });

    // Return an error if the target user does not exist.
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Create the notification in the database.
    const notification = await prisma.notification.create({
      data: {
        userId: numericUserId,
        title: title,
        message: message,
        type: type,
      },
    });

    // Return the newly created notification.
    return res.status(201).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    // Return an error if notification creation fails.
    return res.status(500).json({
      success: false,
      message: 'Failed to create notification',
    });
  }
};

/**
 * Mark one of the logged-in user's notifications as read.
 */
const markNotificationAsRead = async (req, res) => {
  try {
    // Convert the notification ID from the URL into a number.
    const notificationId = Number(req.params.id);

    // Get the logged-in user's ID from the JWT.
    const userId = req.user.id;

    // Check whether the notification ID is valid.
    if (Number.isNaN(notificationId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid notification ID',
      });
    }

    // Find the notification and verify that it belongs to the logged-in user.
    const notification = await prisma.notification.findFirst({
      where: {
        id: notificationId,
        userId: userId,
      },
    });

    // Return an error if the notification does not belong to the user.
    if (!notification) {
      return res.status(404).json({
        success: false,
        message: 'Notification not found',
      });
    }

    // Mark the notification as read.
    const updatedNotification = await prisma.notification.update({
      where: {
        id: notificationId,
      },
      data: {
        isRead: true,
      },
    });

    // Return the updated notification.
    return res.status(200).json({
      success: true,
      data: updatedNotification,
    });
  } catch (error) {
    // Return an error if updating the notification fails.
    return res.status(500).json({
      success: false,
      message: 'Failed to mark notification as read',
    });
  }
};

// Export all notification controller functions.
module.exports = {
  getNotifications,
  createNotification,
  markNotificationAsRead,
};
