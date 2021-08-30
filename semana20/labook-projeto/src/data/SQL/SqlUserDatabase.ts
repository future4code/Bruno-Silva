import { UserRepository } from "../../business/users/UserRepository";
import { User } from "../../model/User";
import { SqlBaseDatabase } from "./SqlBaseDatabase";

export class SqlUserDatabase extends SqlBaseDatabase implements UserRepository{
    private static TABLE_NAME = "labook_users"

    create = async(
        newUser: User
    ):Promise<void> => {
        await this.getConnection().insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword()
        }).into(SqlUserDatabase.TABLE_NAME);
    };

    findUserByEmail = async( 
        email: string
    ):Promise<User> => {
        const result = await this.getConnection()
            .select()
            .from(SqlUserDatabase.TABLE_NAME)
            .where({ email });

        return User.toUserModel(result[0]);
    };
};