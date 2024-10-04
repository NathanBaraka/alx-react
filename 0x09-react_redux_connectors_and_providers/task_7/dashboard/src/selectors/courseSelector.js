import { createSelector } from 'reselect';
import { Map } from 'immutable';

export const getCourses = (state) => state.courses; // Assuming courses is the key in the reducer

export const getListCourses = createSelector(
  [getCourses],
  (courses) => courses.valueSeq().toArray() // Convert Immutable List to a standard array
);

