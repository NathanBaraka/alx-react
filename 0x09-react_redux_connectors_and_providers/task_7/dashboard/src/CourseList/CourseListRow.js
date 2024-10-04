import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ course, isChecked, onChangeRow }) => {
  const handleChange = (event) => {
    onChangeRow(course.id, event.target.checked); // Call onChangeRow when checkbox is clicked
  };

  return (
    <tr>
      <td>{course.title}</td>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange} // Handle checkbox change
        />
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChangeRow: PropTypes.func.isRequired,
};

export default CourseListRow;

