import { User } from '../entities/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
    constructor() {
        super();
    };

    public static createUser = async (user: User): Promise<User> => {
        const result: User = await BaseDatabase.connection("User_Aula55")
            .insert(user);

        return result;
    };

    public static getUserById = async (id: string): Promise<any> => {
        const result = await BaseDatabase.connection("User_Aula55")
            .select()
            .where({ id: id });

        return result;
    };

    public static getUserByEmail = async (email: string): Promise<any> => {
        const result = await BaseDatabase.connection("User_Aula55")
            .select()
            .where({ email: email });

        return result;
    };
};