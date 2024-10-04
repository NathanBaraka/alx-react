import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActions';
import Notifications from './Notifications';

jest.mock('../actions/notificationActions');

describe('<NotificationsContainer />', () => {
  let wrapper;
  const mockFetchNotifications = jest.fn();
  const mockNotifications = [
    { id: '1', message: 'Notification 1', isRead: false, type: 'default' },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <NotificationsContainer
        notifications={mockNotifications}
        fetchNotifications={mockFetchNotifications}
      />
    );
  });

  it('should fetch notifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled(); // Check if fetchNotifications was called
  });

  it('should render the Notifications component with the correct props', () => {
    expect(wrapper.find(Notifications).props().notifications).toEqual(mockNotifications);
  });
});

