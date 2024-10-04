import { setLoadingState, setNotifications, fetchNotifications, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('should create an action to set loading state', () => {
    const expectedAction = {
      type: SET_LOADING_STATE,
      isLoading: true,
    };
    expect(setLoadingState(true)).toEqual(expectedAction);
  });

  it('should create an action to set notifications', () => {
    const notifications = [{ id: 1, message: 'Test notification' }];
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications,
    };
    expect(setNotifications(notifications)).toEqual(expectedAction);
  });

  it('should dispatch actions for fetchNotifications', async () => {
    const dispatch = jest.fn();
    const fetchMock = jest.fn(() => Promise.resolve({ json: () => Promise.resolve([{ id: 1, message: 'Test notification' }]) }));
    global.fetch = fetchMock;

    await fetchNotifications()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: SET_LOADING_STATE, isLoading: true });
    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications: [{ id: 1, message: 'Test notification' }],
    });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_LOADING_STATE, isLoading: false });
  });
});

