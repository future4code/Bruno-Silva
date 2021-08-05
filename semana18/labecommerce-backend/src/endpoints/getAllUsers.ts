import { Request, Response } from 'express';
import { UserDatabase } from '../database/UserDatabase';
import { User } from '../entities/User';

const getAllUsers = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 422;

    try {
        const result: User[] | undefined = await UserDatabase.getUsers();

        console.log(result);     

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        res.status(200).send({users: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage });
    };
};

export default getAllUsers;