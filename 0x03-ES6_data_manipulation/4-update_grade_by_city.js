/**
 * Create a function updateStudentGradeByCity that
 * returns an array of students for a specific city with their new grade
 * It should accept a list of students (from getListStudents),
 * a city (String), and newGrades (Array of “grade” objects) as parameters.
 * newGrades is an array of objects with this format
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
  // filter students by city
  let studentsByCity = students.filter((student) => student.location === city);
  // map students by city and add their new grade
  studentsByCity = studentsByCity.map((student) => {
    // find the student's grade
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    // a copy of the student object
    const updateStudent = { ...student };
    // if the student's grade is found, add the grade to the student
    updateStudent.grade = gradeObject ? gradeObject.grade : 'N/A';
    // return the student
    return updateStudent;
  });
  // return the students by city
  return studentsByCity;
}
