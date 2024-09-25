// task_2/dashboard/src/reducers/courseReducer.js
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Default state
const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Set `isSelected` to false for every course
      return action.data.map(course => ({
        ...course,
        isSelected: false
      }));

    case SELECT_COURSE:
      // Map over the courses and update the selected course
      return state.map(course =>
        course.id === action.index
          ? { ...course, isSelected: true }
          : course
      );

    case UNSELECT_COURSE:
      // Map over the courses and update the unselected course
      return state.map(course =>
        course.id === action.index
          ? { ...course, isSelected: false }
          : course
      );

    default:
      return state;
  }
};

export default courseReducer;

