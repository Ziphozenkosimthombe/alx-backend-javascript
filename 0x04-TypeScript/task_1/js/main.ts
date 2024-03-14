/**
 * firstName(string) and lastName(string)
 * These two attributes should only be modifiable when a Teacher is first initialized
 * fullTimeEmployee(boolean) this attribute should always be defined
 * yearsOfExperience(number) this attribute is optional
 * location(string) this attribute should always be defined
 * Add the possibility to add any attribute to the,
 * Object like contract(boolean) without specifying the name of the attribute
*/

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: unknown;
}

// interface named Directs that extends Teacher.
// requires an attribute named numberOfReports(number)

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  //console.log(director1);

/**
 * Write a function printTeacher:
 * It accepts two arguments firstName and lastName
 * It returns the first letter of the firstName and the full lastName
 * example: printTeacher("John", "Doe") -> J. Doe
 * Write an interface for the function named printTeacherFunction
 * 
*/

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>{
    const initials = firstName[0].toUpperCase();
    const makeLastNameUpper = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return `${initials}. ${makeLastNameUpper}` as string;
}

/**
 * Class name StudentClass
 * The constructor accepts firstName(string) and lastName(string) arguments
 * The class has a method named workOnHomework that return the string Currently working
 * The class has a method named displayName. It returns the firstName of the student
 * The constructor of the class should be described through an Interface
 * The class should be described through an Interface
 */ 

interface StudentInterface{
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: StudentInterface){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return  `Currently working`;
    }

    displayName(): string {
        return this.firstName;
    }
}



