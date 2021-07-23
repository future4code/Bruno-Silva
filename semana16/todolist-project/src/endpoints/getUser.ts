import { Request, Response } from 'express';
import connection from '../connection';

const getUser = async (
    req: Request,
    res: Response
) => {
    let errorCode = 400;

    try {
        const userId = Number(req.params.id as string);

        const result = await connection.raw(`
            SELECT LPAD( id, 3, '0') AS "id", nickname
            FROM Users
            WHERE id = ${userId};
        `);

        res.status(200).send(result[0][0]);
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default getUser;