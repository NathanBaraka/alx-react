import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

// Test for mapStateToProps
describe('App Component Redux Integration', () => {
  it('mapStateToProps should return the correct state for isLoggedIn and displayDrawer', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('mapStateToProps should return false for displayDrawer when isNotificationDrawerVisible is false', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('mapStateToProps should return false for isLoggedIn if isUserLoggedIn is false', () => {
    const state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true
    });

    const expectedProps = {
      isLoggedIn: false,
      displayDrawer: true
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

