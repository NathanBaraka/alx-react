import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = {
    notifications: fromJS([
      { id: '1', message: 'Notification 1', isRead: false, type: 'default' },
      { id: '2', message: 'Urgent Notification', isRead: false, type: 'urgent' },
      { id: '3', message: 'Read Notification', isRead: true, type: 'default' },
    ]),
    notificationFilter: 'DEFAULT',
  };

  it('should return all unread notifications when the filter is DEFAULT', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual([
      { id: '1', message: 'Notification 1', isRead: false, type: 'default' },
      { id: '2', message: 'Urgent Notification', isRead: false, type: 'urgent' },
    ]);
  });

  it('should return all unread and urgent notifications when the filter is URGENT', () => {
    state.notificationFilter = 'URGENT'; // Change filter to URGENT
    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual([
      { id: '2', message: 'Urgent Notification', isRead: false, type: 'urgent' },
    ]);
  });
});

