// 8-seq.js
import { Seq } from 'immutable';

/**
 * Prints the first name and last name of students with a score >= 70.
 *
 * @param {Object} grades - The object containing student grades.
 */
export function printBestStudents(grades) {
  Seq(grades)
    .filter(student => student.score >= 70) // Filter students with score >= 70
    .forEach(student => {
      const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
      const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
      console.log(`${firstName} ${lastName}`); // Print the formatted names
    });
}

