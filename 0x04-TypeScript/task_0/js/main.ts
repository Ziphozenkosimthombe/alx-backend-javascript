/**
 * @file main.ts
 * Write an interface named Student that accepts the following elements:
 * firstName(string), lastName(string), age(number), and location(string)
 * Create two students, and create an array named studentsList containing the two variables
 * Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
 * Each row should contain the first name of the student and the location
 * 
 * Requirements:
 * When running, Webpack should return No type errors found.
 * Every variable should use TypeScript when possible.
 */ 

interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student ={
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
}

const student2: Student ={
    firstName: 'Bob',
    lastName: 'Bobber',
    age: 22,
    location: 'Cape Town'
}
// create an array name studentList containing tow variable

const studentList:Student[] = [student1, student2];

// render a table and for each elements in the array, append a new row to the table
const table = document.createElement('table');

// iterate through the studentList array
studentList.forEach((student) =>{
    // create the row for each students
    const row = table.insertRow()

    // adding the data student data top the cell

    const namesCell= row.insertCell(0);
    const locationsCell = row.insertCell(1);


    // adding the text content to the cell
    namesCell.textContent = student.firstName;
    locationsCell.textContent = student.location;
})

// appending the table to the body document
document.body.appendChild(table);
