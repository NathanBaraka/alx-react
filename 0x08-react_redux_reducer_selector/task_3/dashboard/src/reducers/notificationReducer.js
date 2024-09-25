// task_3/dashboard/src/reducers/notificationReducer.js

import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// Default state
const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Add notifications and set 'isRead' to false for all
      return {
        ...state,
        notifications: action.data.map(notification => ({
          ...notification,
          isRead: false
        })),
      };

    case MARK_AS_READ:
      // Mark specific notification as read
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        ),
      };

    case SET_TYPE_FILTER:
      // Update the filter value
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;

