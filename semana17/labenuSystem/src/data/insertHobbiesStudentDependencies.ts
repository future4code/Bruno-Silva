import connection from "./connection";
import { hobby } from "../types";

const insertHobbiesStudentDependencies = async (
    hobbies: hobby[],
    studentId: number
): Promise<any> => {
    let result: hobby[] | undefined;

    for (let hobby of hobbies){
        console.log("hobby",hobby);
        result = await connection("StudentHobbies_junction")
            .insert({
                student_id: studentId,
                hobbies_id: hobby.id
            });
    };
    
    return result;
};

export default insertHobbiesStudentDependencies;