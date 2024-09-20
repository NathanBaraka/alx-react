// schema/notifications.js
import * as notificationsData from '../../notifications.json';

/**
 * Get all notifications by a specific user ID
 * @param {string} userId - The user ID to filter notifications by
 * @returns {Array} - List of notification objects for the given user ID
 */
export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author === userId);
}

