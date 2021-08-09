import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import idGenerator from "../services/IdGenerator";

const signup = async(
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const { email, password } = req.body;

        if(!email || email.indexOf("@") === -1) {
            errorCode = 422;
            throw new Error("Email inválido! Por favor, tente novamente");
        };

        if (!password || password.lenght < 6) {
            errorCode = 422;
            throw new Error("Senha deve ter ao menos 6 caracteres! Por favor, tente novamente");
        };

        const alreadyExistedUser = await UserDatabase.getUserByEmail(email);
        console.log(alreadyExistedUser)

        if (alreadyExistedUser[0]) {
            errorCode = 422;
            throw new Error("Usuário já existente! Por favor, tente um novo e-mail");
        };

        const generatedId: string = idGenerator();
        
        const newUser: User = new User(generatedId,email, password);

        await UserDatabase.createUser(newUser);

        const authorization = Authenticator.generateToken({id: newUser.getId()});

        res.status(201).send({ message: authorization});
    } catch(error) {
        res.status(errorCode).send({message: error.message ? error.message : error.sqlMessage });
    };
};

export default signup;