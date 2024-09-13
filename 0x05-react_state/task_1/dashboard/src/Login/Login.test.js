import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should have the submit button disabled by default', () => {
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toEqual(true);
  });

  it('should enable submit button when both email and password are filled', () => {
    wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });

    expect(wrapper.find('input[type="submit"]').prop('disabled')).toEqual(false);
  });

  it('should disable submit button when email is empty', () => {
    wrapper.find('input#email').simulate('change', { target: { value: '' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });

    expect(wrapper.find('input[type="submit"]').prop('disabled')).toEqual(true);
  });

  it('should disable submit button when password is empty', () => {
    wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: '' } });

    expect(wrapper.find('input[type="submit"]').prop('disabled')).toEqual(true);
  });
});

