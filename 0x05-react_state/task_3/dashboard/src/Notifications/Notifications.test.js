import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('calls markNotificationAsRead on button click', () => {
    const markNotificationAsRead = jest.fn();
    const listNotifications = [{ id: 1, value: 'Test notification' }];
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );
    wrapper.find('button').simulate('click');
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});

