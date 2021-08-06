import { User } from "../entities/User";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    constructor() {
        super()
    };
    
    public static createUser = async (newUser: User): Promise<void> => {
        await BaseDatabase.connection("User")
            .insert(newUser);
    };

    public static getUsers = async (): Promise<User[]> => {
        let result: User[] = [];

        const users = await BaseDatabase.connection("User")
            .select();

        for (let user of users){
            const userInClass = new User(user.id, user.name, user.email, user.age, user?.purchase);

            result.push(userInClass);
        };

        return result;
    };

    public static getUserById = async(userId: string): Promise<User> => {
        const result = await BaseDatabase.connection("User")
            .select()
            .where({ id: userId});
        
        if (result[0]){
            return new User(result[0].id, result[0].name, result[0].email, result[0].age, result[0]?.purchase);
        } else {
            return result[0];
        };
    };
};