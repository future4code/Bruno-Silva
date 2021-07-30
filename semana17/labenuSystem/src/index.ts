import app from './app';
import getStudentAgeById from './endpoints/getStudentAgeById';
import createStudent from './endpoints/createStudent';
import createTeacher from './endpoints/createTeacher';
import createClass from './endpoints/createClass';
import createStudentInClass from './endpoints/createStudentInClass';
import createTeacherInClass from './endpoints/createTeacherInClass';

app.get("/student/age/:studentId", getStudentAgeById);

app.post("/student", createStudent);
app.post("/teacher", createTeacher);
app.post("/class", createClass);
app.post("/class/student", createStudentInClass);
app.post("/class/teacher", createTeacherInClass);