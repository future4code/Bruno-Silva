import { Request, Response } from 'express';
import connection from '../connection';

const getAllUsers = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const result = await connection.raw(`
            SELECT id, nickname
            FROM Users;
        `);

        const users = {
            users: result[0]
        }

        res.status(200).send(users);
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default getAllUsers;