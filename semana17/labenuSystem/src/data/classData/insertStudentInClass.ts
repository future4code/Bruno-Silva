import { classes, classStudDependencies, student } from "../../types";
import connection from "../connection";

const insertStudentInClass = async (
    classId: number,
    studentId: number
): Promise<any> => {
    const allStudents: student[] = await connection("Student")
        .select();

    const allClasses: classes[] = await connection("Class")
        .select();

    const alreadyStudentInClass: classStudDependencies[] | undefined = await connection("ClassStudent_junction")
        .select()
        .where({student_id: studentId});

    const result: classStudDependencies | false | undefined = allClasses.find((existedClass) => existedClass.id === classId) &&
        allStudents.find((existedStudent) => existedStudent.id === studentId) &&
        !alreadyStudentInClass[0] &&
        await connection("ClassStudent_junction")
            .insert({
                class_id: classId,
                student_id: studentId
            });

    return result;
};

export default insertStudentInClass;