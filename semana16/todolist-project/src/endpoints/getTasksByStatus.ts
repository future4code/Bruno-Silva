import { Request, Response } from 'express';
import moment from 'moment';
import connection from '../connection';

const getTasksByStatus = async (
    req: Request,
    res: Response
) => {
    let errorCode = 400;

    try {
        const { status } = req.query;
        const modifyResult: any[] = [];

        if (status === "to_do" || status === "doing" || status === "done") {
            const result = await connection.raw(`
            SELECT LPAD(taskId, 3, 0) AS "taskId", title, description, limitDate, LPAD(creatorUserId, 3, 0) AS "creatorUserId", nickname AS "creatorUserNickname"
            FROM Tasks
            INNER JOIN Users
            ON id = creatorUserId
            WHERE status = '${status}';    
            `);

            for (let i = 0; i < result[0].length; i++) {
                const modifyDateResult = {
                    ...result[0][i],
                    limitDate: moment(result[0][i].limitDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
                };

                modifyResult.push(modifyDateResult);
            };

            res.status(200).send({ tasks: modifyResult });
        } else {
            errorCode = 422;
            throw new Error("Invalid status! Please, insert 'to_do', 'doing' or 'done' as a status´ value");
        };
    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default getTasksByStatus;