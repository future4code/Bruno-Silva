import { BaseDatabase } from "./BaseDatabase";
import { User } from "../entities/User";

export class UserDatabase extends BaseDatabase {
    public static createUser = async (
        newUser: User
    ): Promise<void> => {
        try {
            await BaseDatabase.connection("")
                .insert({
                    id: newUser.getId(),
                    name: newUser.getName(),
                    email: newUser.getEmail,
                    password: newUser.getPassword(),
                    role: newUser.getRole()
                });
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };
};