// task_4/dashboard/src/reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  const sampleNotifications = [
    { id: 1, type: 'default', value: 'Notification 1' },
    { id: 2, type: 'urgent', value: 'Notification 2' }
  ];

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and normalize data', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: sampleNotifications };
    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'Notification 2', isRead: false }
      }
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = fromJS({
      notifications: {
        '1': { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'Notification 2', isRead: false }
      },
      filter: 'DEFAULT'
    });
    const action = { type: MARK_AS_READ, index: 1 };
    const state = notificationReducer(initialState, action);
    expect(state.getIn(['notifications', '1', 'isRead'])).toEqual(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const state = notificationReducer(undefined, action);
    expect(state.get('filter')).toEqual('URGENT');
  });
});

