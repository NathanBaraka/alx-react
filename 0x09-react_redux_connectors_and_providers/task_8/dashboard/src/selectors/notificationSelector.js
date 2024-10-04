import { createSelector } from 'reselect';

// Selectors to get notifications and filter
const getNotifications = (state) => state.notifications;
const getFilter = (state) => state.notificationFilter; // Assuming you have a filter in your state

// Memoized selector to get unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    return notifications.filter((notification) => {
      const isUnread = !notification.isRead; // Assuming notifications have an isRead property
      const isUrgent = notification.type === 'urgent'; // Assuming notifications have a type property
      if (filter === 'URGENT') {
        return isUnread && isUrgent;
      }
      return isUnread; // Default filter returns all unread notifications
    });
  }
);

// Remove the old selector
// export const getUnreadNotifications = (state) => {
//   const notifications = getNotifications(state);
//   return notifications.filter(notification => !notification.isRead);
// };

