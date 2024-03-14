///<reference path="Teacher.ts" />

/**
 * write a React Class in the same namespace
 * Add a new attribute experienceTeachingReact? (number) to the Teacher interface
 * In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
 * Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
 * If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
 * */ 

namespace Subjects{
    export interface Teacher{
        experienceTeachingReact?: number;
    }

    export class React extends Subject{
        getRequirements(): string{
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string{
            return (this.teacher.experienceTeachingReact > 0) ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
        }
    }
}