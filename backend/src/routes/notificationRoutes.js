// Notification Routes

const express = require('express');

// Import authentication middleware.
const authMiddleware = require('../middleware/authMiddleware');

// Import notification controller functions.
const {
  getNotifications,
  createNotification,
  markNotificationAsRead,
} = require('../controllers/notificationController');

// Create an Express router.
const router = express.Router();

/**
 * Allows only ADMIN and TPO users to create notifications.
 *
 * The authentication middleware runs before this function,
 * so req.user contains the logged-in user's JWT information.
 */
const authorizeNotificationCreation = (req, res, next) => {
  // Check whether the logged-in user is ADMIN or TPO.
  if (req.user.role !== 'ADMIN' && req.user.role !== 'TPO') {
    return res.status(403).json({
      success: false,
      message: 'Only ADMIN and TPO can create notifications',
    });
  }

  // Continue to the notification controller.
  next();
};

/**
 * Get all notifications for the logged-in user.
 */
router.get('/', authMiddleware, getNotifications);

/**
 * Create a notification.
 *
 * Only authenticated ADMIN and TPO users are allowed.
 */
router.post(
  '/',
  authMiddleware,
  authorizeNotificationCreation,
  createNotification
);

/**
 * Mark a notification as read.
 *
 * Any authenticated user can mark their own notification as read.
 */
router.patch(
  '/:id/read',
  authMiddleware,
  markNotificationAsRead
);

// Export the notification router.
module.exports = router;
