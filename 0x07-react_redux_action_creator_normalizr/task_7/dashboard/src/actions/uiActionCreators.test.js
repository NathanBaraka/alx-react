import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure, LOGIN, LOGIN_SUCCESS } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.restore(); // Clean up after each test
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when the login API succeeds', () => {
    const store = mockStore({});
    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS, user: { email: 'test@example.com', id: 1 } },
    ];

    fetchMock.getOnce('/dist/login-success.json', {
      body: { email: 'test@example.com', id: 1 },
      headers: { 'content-type': 'application/json' },
    });

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when the login API fails', () => {
    const store = mockStore({});
    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE, error: 'Network response was not ok' },
    ];

    fetchMock.getOnce('/dist/login-success.json', 500); // Simulate API failure

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

