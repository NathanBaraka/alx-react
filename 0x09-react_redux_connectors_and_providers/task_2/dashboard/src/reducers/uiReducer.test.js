import uiReducer from './uiReducer';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  it('should handle LOGIN action', () => {
    const state = Map({ user: null });
    const action = { type: LOGIN, user: { email: 'user@example.com' } };
    const newState = uiReducer(state, action);
    expect(newState.get('user')).toEqual({ email: 'user@example.com' });
  });

  it('should handle LOGOUT action', () => {
    const state = Map({ user: { email: 'user@example.com' } });
    const action = { type: LOGOUT };
    const newState = uiReducer(state, action);
    expect(newState.get('user')).toBeNull();
  });
});

