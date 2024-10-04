import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  let wrapper;
  const mockLogout = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header user={{ email: 'user@example.com' }} logout={mockLogout} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call logout when the logout link is clicked', () => {
    wrapper.find('a').simulate('click');
    expect(mockLogout).toHaveBeenCalled();
  });

  it('should not render the logout link when there is no user', () => {
    wrapper = shallow(<Header user={null} logout={mockLogout} />);
    expect(wrapper.find('a').exists()).toBe(false);
  });
});

