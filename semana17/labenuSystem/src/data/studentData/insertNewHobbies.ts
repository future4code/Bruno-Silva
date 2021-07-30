import connection from "../connection";
import { hobby } from "../../types";

const insertNewHobbies = async(
    hobbies: hobby[]
): Promise<any> => {
    const allHobbies: hobby[] =  await connection("Hobbies")
        .select();

    let result: hobby[] | undefined = hobbies;
    for (let hobby of hobbies){
        const index: number = allHobbies.findIndex((createdHobby: hobby) => createdHobby.description === hobby.description);

        if (index === -1) {
            result = await connection("Hobbies")
                .insert({description: hobby.description});
        };
    };
    
    return result;           
};

export default insertNewHobbies;