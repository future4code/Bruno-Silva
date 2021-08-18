import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

const getUserProfile = async(
    req: Request,
    res: Response
):Promise<void> => {
    let errorCode: number = 400;

    try {
        const auth = req.headers.authorization as string;

        const authenticationData = Authenticator.getTokenData(auth);

        const [user] = await UserDatabase.getUserById(authenticationData.id);

        if(user.role !== "normal") {
            errorCode = 401;
            throw new Error("Acesso não autorizado!");
        };

        res.status(200).send({ id: user.id, email: user.email });
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    }
};

export default getUserProfile;