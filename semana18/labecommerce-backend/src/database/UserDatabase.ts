import { User } from "../entities/User";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    constructor() {
        super()
    };

    //nao está aceitando sem o static. Por que?
    
    public createUser = async (newUser: User): Promise<any> => {
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

        // FAZ SENTIDO UM MÉTODO SER ESTÁTICO?
    };

    public static getUsers = async (): Promise<any> => {
        const result: User[] | undefined = await BaseDatabase.connection("User")
            .select();

        return result;
    };

    public static getUserById = async(userId: string): Promise<any> => {
        const result: User[] = await BaseDatabase.connection("User")
            .select()
            .where({ id: userId});

        return result;
    };
};