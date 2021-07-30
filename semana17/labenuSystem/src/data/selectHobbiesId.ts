import connection from "./connection";
import { hobby } from "../types";

const selectHobbiesId = async (
    hobbies: hobby[],
): Promise<any> => {
    const allHobbies: hobby[] = await connection("Hobbies")
        .select();
    
    let result: hobby[] | undefined = [];
    for (let hobby of hobbies){
        const element: hobby | undefined = allHobbies[0] && allHobbies.find((existHobby: hobby) => existHobby.description === hobby.description);

        if (element) {
            result.push(element)
        };
    };
    
    return result;
};

export default selectHobbiesId;