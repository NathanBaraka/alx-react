// task_4/dashboard/src/reducers/courseReducer.js

import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

// Default state as an Immutable Map
const initialState = Map({
  courses: Map(),
  selectedCourses: Map(),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and merge with the state
      const normalizedData = coursesNormalizer(action.data);
      return state.merge({
        courses: fromJS(normalizedData.entities.courses)
      });

    case SELECT_COURSE:
      return state.setIn(['selectedCourses', action.index], true);

    case UNSELECT_COURSE:
      return state.setIn(['selectedCourses', action.index], false);

    default:
      return state;
  }
};

export default courseReducer;

