import { Request, Response } from 'express';
import moment from 'moment';
import connection from '../connection';

const getTasksByCreatorId = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const modifyResult: any[] = [];
        const creatorUserId: string = req.query.creatorUserId as string;

        if (!creatorUserId) {
            errorCode = 422;
            throw new Error("Please, fill in an user id!");
        };

        let result = await connection.raw(`
            SELECT LPAD(taskId, 3, '0') AS "taskId", title, description, limitDate, LPAD(creatorUserId, 3, '0') AS "creatorUserId", status, nickname AS "creatorUserNickname"
            FROM Tasks
            INNER JOIN Users
            ON Users.id = Tasks.creatorUserId
            WHERE creatorUserId = ${Number(req.query.creatorUserId)};
        `); 

        for (let i = 0; i < result[0].length; i++) {
            const modifyDateResult = {
                ...result[0][i],
                limitDate: moment(result[0][i].limitDate,'YYYY-MM-DD').format('DD/MM/YYYY')
            };

            modifyResult.push(modifyDateResult);
        };

        res.status(200).send({tasks: modifyResult});
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default getTasksByCreatorId;