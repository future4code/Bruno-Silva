import { Request, Response } from "express";
import { PurchaseDatabase } from "../database/PurchaseDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../entities/User";

const getPurchasesByUserId = async(
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const { userId } = req.params;

        if (!userId) {
            errorCode = 422;
            throw new Error(`Field 'userId' are empty! Please, check input´s value`);
        };

        const hasUser = await UserDatabase.getUserById(userId);

        if(!hasUser) {
            errorCode = 422;
            throw new Error("User not found! Please, check 'userId' input´s value");
        };

        const result = await PurchaseDatabase.getPurchasesByUserId(userId);

        res.status(200).send({ purchases: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message ? error.message : error.sqlMessage });
    };
};

export default getPurchasesByUserId;