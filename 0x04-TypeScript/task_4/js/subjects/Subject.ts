/// <reference path="Teacher.ts" />

/**
 * write a Subject class in the same namespace named Subjects.
 * the class has one attribute teacher that implements the Teacher interface
 * the class has one setter method setTeacher that accepts a teacher in argument,
 * and as setter, set the instance attribute teacher with it)
 * */ 

namespace Subjects{
    export class Subject{
        teacher: Subjects.Teacher;

        set setTeacher(teacher: Teacher){
            this.teacher = teacher;
        }
    }
}