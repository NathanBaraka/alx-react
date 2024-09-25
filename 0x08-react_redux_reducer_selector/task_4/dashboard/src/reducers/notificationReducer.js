// task_4/dashboard/src/reducers/notificationReducer.js

import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS, Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

// Default state as an Immutable Map
const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize the data and merge with the state
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge({
        notifications: fromJS(normalizedData.entities.notifications)
      });

    case SET_TYPE_FILTER:
      // Use set function to update filter
      return state.set('filter', action.filter);

    case MARK_AS_READ:
      // Use setIn to update the specific notification's isRead
      return state.setIn(['notifications', action.index, 'isRead'], true);

    default:
      return state;
  }
};

export default notificationReducer;

