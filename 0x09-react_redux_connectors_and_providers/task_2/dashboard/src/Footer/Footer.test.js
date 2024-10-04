import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the correct message when the user is not logged in', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toEqual('Not logged in');
  });

  it('renders the correct message when the user is logged in', () => {
    const user = { email: 'user@example.com' };
    const wrapper = shallow(<Footer user={user} />);
    expect(wrapper.find('p').text()).toEqual('Logged in as: user@example.com');
  });
});

