import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

// Bind the action creators
export const boundNotificationActions = (dispatch) =>
  bindActionCreators({ markAsAread, setNotificationFilter }, dispatch);

