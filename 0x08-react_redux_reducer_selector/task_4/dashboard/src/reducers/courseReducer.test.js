// task_4/dashboard/src/reducers/courseReducer.test.js

import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  const sampleCourses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' }
  ];

  it('should handle FETCH_COURSE_SUCCESS and normalize data', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: sampleCourses };
    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual({
      courses: {
        '1': { id: 1, name: 'Course 1' },
        '2': { id: 2, name: 'Course 2' }
      },
      selectedCourses: {}
    });
  });

  it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE, index: 1 };
    const state = courseReducer(fromJS({ courses: {}, selectedCourses: {} }), action);
    expect(state.toJS().selectedCourses[1]).toEqual(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {},
      selectedCourses: { '1': true }
    });
    const action = { type: UNSELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action);
    expect(state.toJS().selectedCourses[1]).toEqual(false);
  });
});

