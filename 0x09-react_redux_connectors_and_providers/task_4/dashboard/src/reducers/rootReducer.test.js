import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = rootReducer(undefined, {});
    expect(initialState).toEqual({
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    });
  });
});

