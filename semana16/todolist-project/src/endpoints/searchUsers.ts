import { Request, Response } from 'express';
import connection from '../connection';

const searchUsers = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        if (!req.query.search) {
            errorCode = 422;
            throw new Error("Please, fill in a search value");
        };

        const result = await connection.raw(`
            SELECT LPAD(id, 3, 0) AS "id", nickname
            FROM Users
            WHERE nickname LIKE '%${req.query.search}%' OR email LIKE '%${req.query.search}%';
        `)

        res.status(200).send({users: result[0]});
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default searchUsers;