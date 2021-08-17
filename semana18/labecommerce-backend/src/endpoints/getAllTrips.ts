import { Request, Response } from 'express';
import { ProductDatabase } from '../database/ProductDatabase';

const getAllTrips = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 422;

    try {
        const result = await ProductDatabase.getTrips();

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        res.status(200).send({trips: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default getAllTrips;