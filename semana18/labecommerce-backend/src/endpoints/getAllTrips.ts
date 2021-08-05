import { Request, Response } from 'express';
import { ProductDatabase } from '../database/ProductDatabase';
import { Ticket } from '../entities/Ticket';

const getAllTrips = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 422;

    try {
        const result: Ticket[] | undefined = await ProductDatabase.getTrips();
        console.log(result);

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        res.status(200).send({trips: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage });
    };
};

export default getAllTrips;