import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display the contact link when user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('#contact-link').exists()).toBe(false);
  });

  it('displays the contact link when user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('#contact-link').exists()).toBe(true);
  });
});

