// task_2/dashboard/src/reducers/courseReducer.test.js
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = [];

  const coursesData = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  it('should return the default state as an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and return courses with isSelected set to false', () => {
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: coursesData });
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update isSelected for the course with the given id', () => {
    const state = courseReducer(coursesData, { type: SELECT_COURSE, index: 2 });
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update isSelected for the course with the given id', () => {
    const initialStateWithSelection = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    const state = courseReducer(initialStateWithSelection, { type: UNSELECT_COURSE, index: 2 });
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(state).toEqual(expectedState);
  });
});

