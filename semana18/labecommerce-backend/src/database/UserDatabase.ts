import { User } from "../entities/User";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    constructor() {
        super()
    };

    public static createUser = async (newUser: User): Promise<any> => {
        await BaseDatabase.connection("User")
            .insert(newUser);

        // const result = await BaseDatabase.connection.raw(`
        //     INSERT INTO User
        //     VALUES(
        //         '${character.getId()}',
        //         '${character.getName()}',
        //         '${character.getEmail()}',
        //         ${character.getAge()} 
        //     );
        // `);
        // return result;
    };
};