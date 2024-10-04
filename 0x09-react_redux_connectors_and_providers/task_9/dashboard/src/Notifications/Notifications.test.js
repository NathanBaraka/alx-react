import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  let wrapper;
  const mockSetNotificationFilter = jest.fn();
  const mockNotifications = [
    { id: '1', message: 'Notification 1', isRead: false, type: 'default' },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        notifications={mockNotifications}
        setNotificationFilter={mockSetNotificationFilter}
      />
    );
  });

  it('should render notifications correctly', () => {
    expect(wrapper.find('ul').children()).toHaveLength(mockNotifications.length); // Ensure correct number of notifications
  });

  it('should call setNotificationFilter with URGENT when the first button is clicked', () => {
    wrapper.find('button').at(0).simulate('click'); // Simulate clicking the urgent button
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('URGENT'); // Check if it was called with 'URGENT'
  });

  it('should call setNotificationFilter with DEFAULT when the second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click'); // Simulate clicking the default button
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('DEFAULT'); // Check if it was called with 'DEFAULT'
  });
});

