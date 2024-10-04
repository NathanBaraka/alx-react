import { Map } from 'immutable';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';

const initialState = Map({
  user: null,
  isNotificationDrawerVisible: false,
  // other states...
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('user', action.user);
    case LOGOUT:
      return state.set('user', null);
    default:
      return state;
  }
};

export default uiReducer;

