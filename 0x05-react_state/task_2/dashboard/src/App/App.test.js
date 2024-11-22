import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import AppContext, { defaultUser } from './AppContext';

describe('<App />', () => {
  it('renders Login component by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('logIn updates the state correctly', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();

    // Simulate login
    const testEmail = 'test@example.com';
    const testPassword = 'password123';
    instance.logIn(testEmail, testPassword);

    // Verify state
    expect(wrapper.state('user')).toEqual({
      email: testEmail,
      password: testPassword,
      isLoggedIn: true,
    });

    // Verify UI changes
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it('logOut resets the state correctly', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();

    // Simulate login
    instance.logIn('test@example.com', 'password123');

    // Simulate logout
    instance.logOut();

    // Verify state
    expect(wrapper.state('user')).toEqual(defaultUser);

    // Verify UI changes
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('wraps the app in AppContext.Provider', () => {
    const wrapper = mount(<App />);
    const contextValue = wrapper.find(AppContext.Provider).prop('value');

    // Verify context provides correct user and logOut
    expect(contextValue.user).toEqual(defaultUser);
    expect(contextValue.logOut).toEqual(wrapper.instance().logOut);
  });

  it('Notifications panel displays correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });
});

