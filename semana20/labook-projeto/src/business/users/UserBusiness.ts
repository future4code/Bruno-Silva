import { CustomError } from "../../error/CustomError";
import { LoginInputDTO, User, UserInputDTO } from "../../model/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { authenticationData } from "../../types";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    static regExValidateEmail: RegExp = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    constructor(
        private userDatabase: UserRepository
    ) {};

    signup = async (
        input: UserInputDTO
    ):Promise<string> => {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new CustomError(422, '"name", "email" and "password" must be provided');
        };

        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            throw new CustomError(422, `'name', 'email' and 'password' should be a string type one! 
                Please, check input´s values`);
        };

        if(!UserBusiness.regExValidateEmail.test(email)){
            throw new CustomError(422, "Insert a valid e-mail, such as: 'xxxx@yyyyy.zzz.www");
        };

        if(password.length < 6){
            throw new CustomError(422, `'password' should´ve at least 6 characters!
                Please, check 'password' input value`);
        };

        const newId = new IdGenerator();
        const id: string = newId.generateId();

        const newHash = new HashManager();
        const cypherPassword = await newHash.hash(password);

        const newUser: User = new User(id, name, email, cypherPassword);

        await this.userDatabase.create(newUser);

        const newToken = new Authenticator();

        const newAuthData: authenticationData = { id };
        const token: string = newToken.generateToken(newAuthData);

        return token;
    };

    login = async (
        input: LoginInputDTO
    ):Promise<string> => {
        const { email, password } = input;

        if (!email || !password) {
            throw new CustomError(422, '"email" and "password" must be provided');
        };

        if( typeof email !== "string" || typeof password !== "string") {
            throw new CustomError(422, `'email' and 'password' should be a string type one! 
                Please, check input´s values`);
        };

        if(!UserBusiness.regExValidateEmail.test(email)){
            throw new CustomError(422, "Insert a valid e-mail, such as: 'xxxx@yyyyy.zzz.www");
        };

        const user = await this.userDatabase.findUserByEmail(email);

        if (!user) {
            throw new CustomError(401, "Invalid credentials");
        };

        const newHash = new HashManager();
        const passwordIsCorrect: boolean = await newHash.compare(password, user.getPassword());

        if (!passwordIsCorrect) {
            throw new CustomError(401, "Invalid credentials");
        };

        const newToken = new Authenticator();
        const token: string = newToken.generateToken({
            id: user.getId()
        });

        return token;
    };
};