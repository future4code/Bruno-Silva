import { classes, classTeachDependencies, teacher } from "../../types";
import connection from "../connection";

const insertTeacherInClass = async (
    classId: number,
    teacherId: number
): Promise<any> => {
    const allTeachers: teacher[] = await connection("Teacher")
        .select();

    const allClasses: classes[] = await connection("Class")
        .select();

    const alreadyTeacherInClass: classTeachDependencies[] | undefined = await connection("ClassTeacher_junction")
        .select()
        .where({teacher_id: teacherId});

    const result: classTeachDependencies | false | undefined = allClasses.find((existedClass) => existedClass.id === classId) &&
        allTeachers.find((existedTeacher) => existedTeacher.id === teacherId) &&
        !alreadyTeacherInClass[0] &&
        await connection("ClassTeacher_junction")
            .insert({
                class_id: classId,
                teacher_id: teacherId
            });

    return result;
};

export default insertTeacherInClass;