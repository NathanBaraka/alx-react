// task_3/dashboard/src/reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const defaultState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  const sampleNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(defaultState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and add isRead false to all notifications', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: sampleNotifications };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const state = notificationReducer(defaultState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the correct notification', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: sampleNotifications.map(notification => ({
        ...notification,
        isRead: false,
      })),
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      filter: 'URGENT',
      notifications: [],
    };
    const state = notificationReducer(defaultState, action);
    expect(state).toEqual(expectedState);
  });
});

