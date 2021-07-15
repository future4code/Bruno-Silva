import { Request, Response } from 'express';
import { initialUsers } from '../data';
import { TYPES, user } from '../types';

export const postNewUser = (
    req: Request,
    res: Response
): void => {
    let codeError: number = 400;
    const regExValidateEmail: RegExp = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    const users: user[] = initialUsers;

    try {
        const { name, email, type, age } = req.body;

        if (!name || !email || !type || !age) {
            codeError = 422;
            throw new Error("Missing data! Please, check inputs´ values");
        };

        if (typeof name !== "string") {
            codeError = 422;
            throw new Error("Name was expected as a string! Please, check input´s value");
        };

        if (!regExValidateEmail.test(email)){
            codeError = 422;
            throw new Error("Insert a validate e-mail, such as: 'xxxx@yyyyy.zzz.www");
        };

        if (typeof type !== "string") {
            codeError = 422;
            throw new Error("Type was expected as a string! Please, check input´s value");
        };

        if (type.toLocaleUpperCase() !== TYPES.ADMIN && type.toLocaleUpperCase() !== TYPES.NORMAL) {
            console.log(type.toLocaleUpperCase());
            console.log(TYPES.ADMIN);
            console.log(TYPES.NORMAL);
            throw new Error("Please, check credential´s type for: 'ADMIN' or 'NORMAL'");
        }

        if (typeof age !== "number") {
            codeError = 422;
            throw new Error("Age was expect as a number! Please, check input´s value");
        };

        const newUser: user = {
            id: users.length+1,
            name: name,
            email: email,
            type: type.toLocaleUpperCase() === TYPES.ADMIN ? TYPES.ADMIN : TYPES.NORMAL,
            age: age
        };

        users.push(newUser);

        res.status(200).send({message: "User created successfully!"});
    } catch (error) {
        res.status(codeError).send({ message: error.message });
    };
}