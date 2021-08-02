import { Request, Response } from 'express';
import connection from '../connection';

const deleteTaskResponsible = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { taskId, responsibleUserId } = req.params;

        const hasTask = await connection.raw(`
            SELECT taskId
            FROM Tasks
            WHERE taskId = ${Number(taskId)};
        `);

        const hasUser = await connection.raw(`
            SELECT id
            FROM Users
            WHERE id = ${Number(responsibleUserId)};
        `);

        if (!hasTask[0][0] || !hasUser[0][0]) {
            errorCode = 422;
            throw new Error("User or task doesn´t exist! Please, check params´ values");
        };

        const hasResponsibleByTask = await connection.raw(`
            SELECT *
            FROM Responsibles
            WHERE task_id = ${Number(taskId)} AND responsible_user_id = ${Number(responsibleUserId)};
        `);

        if (hasResponsibleByTask[0][0] === undefined) {
            errorCode = 422;
            throw new Error("User selected isn´t responsible by task chosen! Please, check again the params´ values");
        } else {
            await connection.raw(`
                DELETE
                FROM Responsibles
                WHERE task_id = ${Number(taskId)} AND responsible_user_id = ${Number(responsibleUserId)};
            `);

            res.status(200).send("Responsability has been removed successfully!");
        };
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default deleteTaskResponsible;