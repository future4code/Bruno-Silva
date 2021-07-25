import { Request, Response } from 'express';
import moment from 'moment';
import connection from '../connection';

const getTaskById = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const taskId: number = Number(req.params.id as string);

        const taskInfo = await connection.raw(`
            SELECT LPAD(taskId, 3, 0) AS "taskId", title, description, limitDate, status, LPAD(creatorUserId, 3, 0) AS "creatorUserId", nickname AS "creatorUserNickname"
            FROM Tasks
            INNER JOIN Users
            ON Users.id = Tasks.creatorUserId
            WHERE taskId = '${taskId}';
        `);

        const taskUsers = await connection.raw(`
            SELECT LPAD(id, 3, 0) AS "id", nickname
            FROM Users
            INNER JOIN Responsibles
            ON id = responsible_user_id
            INNER JOIN Tasks
            ON taskId = task_id
            WHERE taskId = '${taskId}';
        `);

        if (taskInfo[0][0] === undefined){
            errorCode = 404;
            throw new Error("No task has been found");
        };

        const modifyDateTaskInfo = {
            ...taskInfo[0][0],
            limitDate: moment(taskInfo[0][0].limitDate,'YYYY-MM-DD').format('DD/MM/YYYY'),
            users: taskUsers[0]
        };

        res.status(200).send(modifyDateTaskInfo);       
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default getTaskById;