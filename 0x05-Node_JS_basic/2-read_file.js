/*
 ==> function name countStudent should accept the a path in argument
 ==> the script attempt should read the database file synchronously
 ==> if database not available the function should throw an error with the message Cannot load the database
 ==> if database is available the function should return the number of students in the database
 ==> It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 ==> CSV file can contain empty lines (at the end) - and they are not a valid student!
*/
const fs = require('fs');

const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter((line) => line);
        const students = lines.map((line) => line.split(','));
        const fields = {};
        let studentsCount = 0;
    
        students.forEach((student) => {
        if (!fields[student[3]]) {
            fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
        studentsCount += 1;
        });
    
        console.log(`Number of students: ${studentsCount}`);
        for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }
        }
    
        return studentsCount;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;