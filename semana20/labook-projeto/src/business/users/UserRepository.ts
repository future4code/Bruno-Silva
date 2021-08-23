import { User } from "../../model/User";

export interface UserRepository {
    create(user: User):Promise<void>
    findUserByEmail(email: string):Promise<User>
};