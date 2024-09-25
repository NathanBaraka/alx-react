// src/selectors/notificationSelector.js
export const filterTypeSelected = (state) => state.notifications.get('filter');

export const getNotifications = (state) => state.notifications.get('notifications');

export const getUnreadNotifications = (state) =>
  state.notifications.get('notifications').filter((notification) => !notification.isRead);

