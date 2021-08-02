import { Request, Response } from 'express';
import moment from 'moment';
import connection from '../connection';

const getTasksDelayed = async(
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;
    let modifyResult: any[] = [];

    try {
        const result = await connection.raw(`
        SELECT LPAD(taskId, 3, 0) AS "taskId", title, description, limitDate, LPAD(creatorUserId, 3, 0) AS "creatorUserId", nickname AS "creatorUserNickname"
            FROM Tasks
            INNER JOIN Users
            ON id = creatorUserId
            WHERE (limitDate < CURDATE()) AND (status <> "done");
        `);

        for (let i = 0; i < result[0].length; i++) {
            const modifyDateResult = {
                ...result[0][i],
                limitDate: moment(result[0][i].limitDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
            };

            modifyResult.push(modifyDateResult);
        };

        res.status(200).send(modifyResult);
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    }
    
};

export default getTasksDelayed;