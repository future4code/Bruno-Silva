import { Request, Response } from 'express';
import connection from '../connection';

const getTaskUsers = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        if (!req.params.id) {
            errorCode = 422;
            throw new Error("Please, fill in an user!");
        }

        const result = await connection.raw(`
            SELECT LPAD(id, 3, 0) AS "id", nickname
            FROM Users
            INNER JOIN Responsibles
            ON id = responsible_user_id
            INNER JOIN Tasks
            ON taskId = task_id
            WHERE taskId = ${Number(req.params.id)};
        `);

        if (result[0][0] === undefined){
            errorCode = 404;
            throw new Error("No task has been found");
        }

        const orderedResult = result[0].sort(function (a: any, b:any) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            };
            return 0;
          });

        res.status(200).send({users: orderedResult});
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default getTaskUsers;