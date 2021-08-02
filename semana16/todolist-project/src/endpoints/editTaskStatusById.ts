import { Request, Response } from 'express';
import connection from '../connection';

const editTaskStatusById = async (
    req: Request,
    res: Response
) => {
    let errorCode = 400;

    try {
        const { status } = req.body;

        if (!status || typeof status !== "string") {
            errorCode = 422;
            throw new Error("Please, check if inputs´ value are filled or/ string type");
        };

        if (status === "to_do" || status === "doing" || status === "done") {
            await connection.raw(`
            UPDATE Tasks
            SET status = '${status}'
            WHERE taskId = ${Number(req.params.id)};
            `);

            res.status(201).send("Status updated successfully!");
        } else {
            errorCode = 422;
            throw new Error("Invalid status! Please, insert 'to_do', 'doing' or 'done' as inputs´ value");
        }
    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default editTaskStatusById;