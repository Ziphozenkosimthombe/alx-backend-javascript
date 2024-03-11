/**
 * function returns the sum of all the student ids.
 * accept a list of students (from getListStudents) as a parameter.
 */

export default function getStudentIdsSum(students) {
  const initialValue = 0;
  return students.reduce((acc, cv) => acc + cv.id, initialValue);
}
