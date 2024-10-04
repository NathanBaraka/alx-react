import { fromJS } from 'immutable';
import { getListCourses } from './courseSelector';

describe('Course Selector', () => {
  it('should return a list of courses', () => {
    const state = {
      courses: fromJS({
        1: { id: '1', title: 'Course 1' },
        2: { id: '2', title: 'Course 2' },
      }),
    };

    const expected = [
      { id: '1', title: 'Course 1' },
      { id: '2', title: 'Course 2' },
    ];

    expect(getListCourses(state)).toEqual(expected);
  });
});

