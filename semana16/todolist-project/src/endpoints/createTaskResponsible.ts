import { Request, Response } from 'express';
import connection from '../connection';

const createTaskResponsible = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { task_id, responsible_user_id } = req.body;

        if (!task_id || !responsible_user_id) {
            errorCode = 422;
            throw new Error("One or more fields weren´t filled. Please, check inputs´ values");
        };

        const allResponsibleRegisters = await connection.raw(`
            SELECT * FROM Responsibles;
        `);

        const isRegistered = allResponsibleRegisters[0][0] && allResponsibleRegisters[0].findIndex((id: any) => {
            if (id[`task_id`] === Number(task_id) && id[`responsible_user_id`] === Number(responsible_user_id)) {
                return true;
            } else {
                return false;
            };
        });

        if (isRegistered !== -1 && isRegistered !== undefined) {
            errorCode = 422;
            throw new Error("User already associated to task! Please, try another");
        };

        await connection.raw(`
            INSERT INTO Responsibles
            VALUES (
                ${Number(task_id)},
                ${Number(responsible_user_id)}
            );
        `);

        res.status(201).send("User responsibility defined successfully!");
    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default createTaskResponsible;