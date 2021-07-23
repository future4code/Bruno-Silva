import { Request, Response } from 'express';
import connection from '../connection';

const createTask = async (
    req: Request,
    res: Response
) => {
    let errorCode = 400;

    try {
        const { title, description, limitDate, creatorUserId } = req.body;
        const splitDate = limitDate.split("/");
        const formatDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;

        if (!title || (description !== 0 && !description) || !limitDate || !creatorUserId) {
            errorCode = 422;
            throw new Error("One or more fields weren´t filled. Please, check inputs´ values");
        };

        await connection.raw(`
            INSERT INTO Tasks (title, description, limitDate, creatorUserId)
            VALUES (
                '${title}',
                '${description}',
                '${formatDate}',
                ${Number(creatorUserId)});
        `);

        res.status(201).send("Task created successfully!");
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    }
};

export default createTask;