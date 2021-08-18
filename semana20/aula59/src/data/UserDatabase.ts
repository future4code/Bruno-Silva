import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "AULA59_User"

    async create(
        newUser: User
    ) {
        await this.getConnection().insert({
            id: newUser.getId(),
            name: newUser.getName(),
            nickname: newUser.getNickname(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            role: newUser.getRole()
        }).into(UserDatabase.TABLE_NAME);
    };

    async selectByEmail({ email }: any):Promise<User> {
        const result = await this.getConnection()
            .select()
            .from(UserDatabase.TABLE_NAME)
            .where({ email });

        return User.toUserModel(result[0]);
    };
};
