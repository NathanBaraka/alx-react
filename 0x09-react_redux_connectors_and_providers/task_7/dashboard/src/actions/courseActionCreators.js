import { SET_COURSES } from './actionTypes'; // Adjust this import according to your project structure

export const setCourses = (courses) => ({
  type: SET_COURSES,
  courses,
});

export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch((error) => console.error('Error fetching courses:', error));
  };
};

