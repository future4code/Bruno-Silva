import connection from "./connection";
import { student } from "../types";

const selectStudentId = async (
    email: string
): Promise<any> => {
    const result: student[] | undefined = await connection("Student")
        .select()
        .from("Student")
        .where({email: email});
    
    return result;
};

export default selectStudentId;