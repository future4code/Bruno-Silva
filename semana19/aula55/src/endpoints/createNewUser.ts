import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../entities/User";
import idGenerator from "../services/IdGenerator";

const createNewUser = async(
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const { email, password } = req.body;
        const generatedId: string = idGenerator();

        if(!email || !password) {
            errorCode = 422;
            throw new Error("Email ou senha não preenchidas! Por favor, verifique");
        };

        const result = await UserDatabase.createUser(new User(generatedId, email, password));

        res.status(201).send({ message: result})
    } catch(error) {
        res.status(errorCode).send({message: error.message ? error.message : error.sqlMessage });
    };
};

export default createNewUser;