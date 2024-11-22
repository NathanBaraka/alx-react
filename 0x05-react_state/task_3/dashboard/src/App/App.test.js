import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('markNotificationAsRead removes the notification from the state', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    });

    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state('listNotifications')).toEqual([
      { id: 2, type: 'urgent', value: 'New resume available' },
    ]);
  });
});

