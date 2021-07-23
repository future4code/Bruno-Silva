import { Request, Response } from 'express';
import connection from '../connection';

const createUser = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;
    const regExValidateEmail: RegExp = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    try {
        const { name, nickname, email } = req.body;

        if (!name || !nickname || !email) {
            errorCode = 422;
            throw new Error("One or more fields weren´t filled. Please, check inputs´ values");
        };

        if (!regExValidateEmail.test(email)){
            errorCode = 422;
            throw new Error("Insert a validate e-mail, such as: 'xxxx@yyyyy.zzz.www");
        };

        await connection.raw(`
            INSERT INTO Users (name, nickname, email)
            VALUES (
                "${name}",
                "${nickname}",
                "${email}"
            );
        `);

        res.status(200).send("User created successfully!");
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default createUser;