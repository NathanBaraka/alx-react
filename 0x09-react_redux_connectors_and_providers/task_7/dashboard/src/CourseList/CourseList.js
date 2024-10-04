import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector'; // Selector for courses
import CourseListRow from './CourseListRow'; // Assuming you have a CourseListRow component
import PropTypes from 'prop-types';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses(); // Fetch courses on mount
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id); // Select course if checked
    } else {
      this.props.unSelectCourse(id); // Unselect course if unchecked
    }
  };

  render() {
    const { courses } = this.props; // Destructure courses from props

    return (
      <div>
        <h2>Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <CourseListRow
                key={course.id}
                course={course}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
};

// Map state and dispatch to props
const mapStateToProps = (state) => ({
  courses: getListCourses(state), // Use the selector to get courses
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

