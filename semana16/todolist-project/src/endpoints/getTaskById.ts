import { Request, Response } from 'express';
import moment from 'moment';
import connection from '../connection';

const getTaskById = async (
    req: Request,
    res: Response
) => {
    let errorCode = 400;

    try {
        const taskId = Number(req.params.id as string);

        const result = await connection.raw(`
            SELECT taskId, title, description, limitDate, status, creatorUserId, nickname AS "creatorUserNickname"
            FROM Tasks
            INNER JOIN Users
            ON Users.id = Tasks.creatorUserId
            WHERE taskId = '${taskId}';
        `);

        if (result[0][0] === undefined){
            errorCode = 404;
            throw new Error("No task has been found");
        }

        const modifyDateResult = {
            ...result[0][0],
            limitDate: moment(result[0][0].limitDate,'YYYY-MM-DD').format('DD/MM/YYYY')
        };

        res.status(200).send(modifyDateResult);
             
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default getTaskById;