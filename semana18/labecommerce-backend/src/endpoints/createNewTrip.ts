import { Request, Response } from 'express';
import { StringifyRandomNumber } from '../constants/StringifyRandomNumber';
import { ProductDatabase } from '../database/ProductDatabase';
import { Ticket } from '../entities/Ticket';

const createNewTrip = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 400;

    try {
        const {name, description, price, origin, destination} = req.body;

        if (!name || !description || !price || !origin || !destination) {
            errorCode = 422;
            throw new Error(`One or more fields are empty! Please, fill 'name',
                'description' and 'price' to proceed`);
        };

        if (typeof price !== "number" || price <= 0) {
            errorCode = 422;
            throw new Error(`'price' was expected as a positive and not null number!
                Please, check 'price' input´s value`);
        };


        const newTrip: Ticket = new Ticket(StringifyRandomNumber.getStringifyRandomNumber(),
            name, description, price, origin, destination);

        await ProductDatabase.createTrip(newTrip);

        //QUAL ERRO PODERIA DAR COMO RESPOSTA DO CONNECTION DE UM POST?

        res.status(201).send({ message: "Trip created successfully!"});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default createNewTrip;