import { normalize, schema } from 'normalizr';
import * as notificationData from '../../notifications.json';

// Define schemas for normalization
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the data
const normalizedData = normalize(notificationData.default, [notification]);

// Modified getAllNotificationsByUser function
export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  
  // Return the list of notifications for the specified userId
  return Object.values(notifications).filter(notification => notification.author === userId);
}

