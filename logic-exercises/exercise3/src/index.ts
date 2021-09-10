import { maxValueTheft } from "./maxValueTheft";

const valuesArray: number[] = [1,2,3,1];
const valuesArrayTwo: number[] = [2,7,9,3,1];
const valuesArrayThree: number[] = [2,3,6,12,3,9,11,4];

console.log(`maxValueTheft: ${maxValueTheft(valuesArray)}`);
console.log(`maxValueTheftTwo: ${maxValueTheft(valuesArrayTwo)}`);
console.log(`maxValueTheftThree: ${maxValueTheft(valuesArrayThree)}`);