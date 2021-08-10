import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const signUp = async (
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const { email, password } = req.body;

        if (!email || email.indexOf("@") === -1) {
            errorCode = 422;
            throw new Error("Email inválido! Por favor, tente novamente");
        };

        if (!password || password.lenght < 6) {
            errorCode = 422;
            throw new Error("Senha deve ter ao menos 6 caracteres! Por favor, tente novamente");
        };

        const alreadyExistedUser = await UserDatabase.getUserByEmail(email);

        if (alreadyExistedUser[0]) {
            errorCode = 422;
            throw new Error("Usuário já existente! Por favor, tente um novo e-mail");
        };

        const cypherPassword = await HashManager.generateHash(password);

        const newUser: User = new User(IdGenerator.generateId(), email, cypherPassword);

        await UserDatabase.createUser(newUser);

        const authorization = Authenticator.generateToken({id: newUser.getId()});

        res.status(201).send({ token: authorization });
    } catch (error) {
        res.status(errorCode).send({ message: error.message ? error.message : error.sqlMessage });
    };
};

export default signUp;