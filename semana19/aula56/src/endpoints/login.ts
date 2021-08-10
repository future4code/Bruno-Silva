import { Request, Response } from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { User } from '../entities/User';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';

const login = async (
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

        const [alreadyExistedUser] = await UserDatabase.getUserByEmail(email);
        
        if (!alreadyExistedUser) {
            errorCode = 422;
            throw new Error("Usuário não existente! Por favor, tente novamente");
        };

        if(!HashManager.compareHash(password, alreadyExistedUser.password)) {
            errorCode = 401;
            throw new Error("Credenciais inválidas! Por favor, tente novamente");
        };

        const authorization = Authenticator.generateToken({id: alreadyExistedUser.id});

        res.status(200).send({ token: authorization });
    } catch (error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default login;