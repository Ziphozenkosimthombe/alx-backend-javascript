/**
 * function getStudentIds returns an array of student ids
 * from a list of objects
 * take one argument which is an array of objects
 * array is same format as getListStudent
 */ 


export default function getListStudentIds(array){
    //check if array is an array
    if (Array.isArray(array)){
        return array.map((student) => student.id);
    }
    return [];
}

