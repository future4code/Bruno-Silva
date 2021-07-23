import { Request, Response } from 'express';
import connection from '../connection';

const editUser = async (
    req: Request,
    res: Response
) => {
    let errorCode = 400;

    try {  
        const { name, nickname } = req.body;
        const userId = Number(req.params.id as string);

        if (!name || !nickname) {
            errorCode = 422;
            throw new Error("One or more fields weren´t filled. Please, check inputs´ values");
        };

        await connection.raw(`
            UPDATE Users
            SET name = '${name}', nickname = '${nickname}'
            WHERE id = ${userId};
        `);

        res.status(200).send("User updated successfully!");
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default editUser;