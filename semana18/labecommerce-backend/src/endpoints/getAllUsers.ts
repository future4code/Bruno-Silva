import { Request, Response } from 'express';
import { PurchaseDatabase } from '../database/PurchaseDatabase';
import { UserDatabase } from '../database/UserDatabase';
import { Purchase } from '../entities/Purchase';
import { User } from '../entities/User';

const getAllUsers = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 422;

    try {
        const users = await UserDatabase.getUsers();        

        if (!users) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        const result = await UserDatabase.getUsers();    

        res.status(200).send({users: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default getAllUsers;