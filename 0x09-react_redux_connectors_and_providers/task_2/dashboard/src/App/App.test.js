import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { loginRequest } from '../actions/uiActionCreators';

describe('App Component', () => {
  let wrapper;
  const mockLogin = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App login={mockLogin} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call login when the login button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockLogin).toHaveBeenCalled();
  });
});

