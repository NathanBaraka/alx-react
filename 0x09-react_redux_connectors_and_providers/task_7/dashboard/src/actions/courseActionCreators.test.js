import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCourses, setCourses } from './courseActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Action Creators', () => {
  it('fetches courses and dispatches setCourses', () => {
    const store = mockStore({});
    const mockData = [{ id: '1', title: 'Course 1' }, { id: '2', title: 'Course 2' }];
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const expectedActions = [
      { type: 'SET_COURSES', courses: mockData },
    ];

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

