import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

describe('<CourseList />', () => {
  let wrapper;
  const mockFetchCourses = jest.fn();
  const mockSelectCourse = jest.fn();
  const mockUnSelectCourse = jest.fn();
  const mockCourses = [
    { id: '1', title: 'Course 1', isSelected: false },
    { id: '2', title: 'Course 2', isSelected: false },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <CourseList
        courses={mockCourses}
        fetchCourses={mockFetchCourses}
        selectCourse={mockSelectCourse}
        unSelectCourse={mockUnSelectCourse}
      />
    );
  });

  it('calls fetchCourses on mount', () => {
    expect(mockFetchCourses).toHaveBeenCalled(); // Check if fetchCourses is called on mount
  });

  it('dispatches selectCourse when a checkbox is checked', () => {
    wrapper.instance().onChangeRow('1', true); // Simulate checking the checkbox
    expect(mockSelectCourse).toHaveBeenCalledWith('1'); // Check if selectCourse is called with the correct id
  });

  it('dispatches unSelectCourse when a checkbox is unchecked', () => {
    wrapper.instance().onChangeRow('1', false); // Simulate unchecking the checkbox
    expect(mockUnSelectCourse).toHaveBeenCalledWith('1'); // Check if unSelectCourse is called with the correct id
  });
});

