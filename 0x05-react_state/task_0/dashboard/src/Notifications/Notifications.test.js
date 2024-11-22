import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('should call handleDisplayDrawer when clicking on menu item', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawerMock} />
    );

    wrapper.find('[data-testid="menu-item"]').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when clicking on close button', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawerMock}
      />
    );

    wrapper.find('[data-testid="close-button"]').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});

