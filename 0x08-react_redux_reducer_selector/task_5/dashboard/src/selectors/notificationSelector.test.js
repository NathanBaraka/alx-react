// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const state = {
    notifications: fromJS({
      filter: 'URGENT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    }),
  };

  test('filterTypeSelected should return the filter value', () => {
    expect(filterTypeSelected(state)).toEqual('URGENT');
  });

  test('getNotifications should return the list of notifications', () => {
    const notifications = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ];
    expect(getNotifications(state).toJS()).toEqual(notifications);
  });

  test('getUnreadNotifications should return the list of unread notifications', () => {
    const unreadNotifications = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ];
    expect(getUnreadNotifications(state).toJS()).toEqual(unreadNotifications);
  });
});

