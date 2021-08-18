import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

const getUserById = async(
    req: Request,
    res: Response
):Promise<void> => {
    let errorCode: number = 400;

    try {
        const auth = req.headers.authorization as string;

        const verifyAuth = Authenticator.getTokenData(auth);

        const [user] = await UserDatabase.getUserById(verifyAuth.id);

        res.status(200).send({ id: user.id, email: user.email });
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    }
};

export default getUserById;