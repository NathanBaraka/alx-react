import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseListRow.css'; // Import the CSS file

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // Create a state variable for checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  // Determine row class based on checkbox state
  const rowClass = isChecked ? 'rowChecked' : '';

  if (isHeader) {
    return (
      <tr className={rowClass}>
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr className={rowClass}>
        <td>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

