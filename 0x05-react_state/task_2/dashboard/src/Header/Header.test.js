import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import AppContext, { defaultUser } from '../App/AppContext';

describe('<Header />', () => {
  it('does not display logoutSection by default', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('displays logoutSection when user is logged in', () => {
    const user = { email: 'test@example.com', password: '', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.text()).toContain('Welcome test@example.com');
  });

  it('calls logOut when logout link is clicked', () => {
    const logOut = jest.fn();
    const user = { email: 'test@example.com', password: '', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find('a[href="#logout"]').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});

