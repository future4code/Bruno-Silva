import { Request, Response } from 'express';
import { PurchaseDatabase } from '../database/PurchaseDatabase';

const getAllPurchases = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 422;

    try {
        const result = await PurchaseDatabase.getPurchases();

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        res.status(200).send({purchases: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default getAllPurchases;