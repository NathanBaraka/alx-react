import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notifications';

describe('<Notifications />', () => {
  let wrapper;
  const mockFetchNotifications = jest.fn();
  const mockMarkAsRead = jest.fn();
  const mockNotifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        notifications={mockNotifications}
        fetchNotifications={mockFetchNotifications}
        markAsRead={mockMarkAsRead}
      />
    );
  });

  it('calls fetchNotifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled(); // Check if fetchNotifications is called on mount
  });

  it('calls markAsRead when a notification is clicked', () => {
    wrapper.find('li').at(0).simulate('click'); // Simulate a click on the first notification
    expect(mockMarkAsRead).toHaveBeenCalledWith(1); // Check if markAsRead is called with the correct id
  });

  it('renders notifications correctly', () => {
    expect(wrapper.find('li').length).toBe(mockNotifications.length); // Check if the correct number of notifications are rendered
  });
});

