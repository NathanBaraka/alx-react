import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER and set isNotificationDrawerVisible to true', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER and set isNotificationDrawerVisible to false', () => {
    const state = uiReducer(
      initialState.set('isNotificationDrawerVisible', true),
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
  });
});

