import notificationReducer from './notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionCreators';
import { Map } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState).toEqual(Map({
      loading: false,
      notifications: Map({}),
    }));
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = { type: SET_LOADING_STATE, isLoading: true };
    const newState = notificationReducer(undefined, action);
    expect(newState.get('loading')).toBe(true);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications: [{ id: 1, message: 'Test notification' }],
    };
    const newState = notificationReducer(undefined, action);
    expect(newState.get('notifications').size).toBe(1);
  });
});

