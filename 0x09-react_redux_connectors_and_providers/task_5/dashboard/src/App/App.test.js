import React from 'react';
import { shallow } from 'enzyme'; // Assuming you're using Enzyme for shallow rendering
import App from './App'; // Import the App component
import Notifications from '../Notifications/Notifications'; // Import Notifications component
import OtherComponent from '../OtherComponent/OtherComponent'; // Import other components for testing

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true); // Check if the App component renders
  });

  it('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1); // Check if Notifications component is rendered
  });

  it('renders other components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(OtherComponent).length).toBe(1); // Check for other components
  });
});

