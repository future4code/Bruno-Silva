import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static getUserByEmail = async (
        email: string
    ): Promise<User> => {
        const user = await BaseDatabase.connection("User_projeto19")
            .select()
            .where({ email });

        return user[0] && User.toUserModel(user[0]);
    };

    public static getUserById = async (
        id: string
    ): Promise<User> => {
        const user = await BaseDatabase.connection("User_projeto19")
            .select()
            .where({ id });

        return user[0] && User.toUserModel(user[0]);
    };

    public static createUser = async(
        user: User
    ):Promise<void> => {
        await BaseDatabase.connection("User_projeto19")
            .insert({
                id: user.getId(),
                name: user. getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            });
    };
};