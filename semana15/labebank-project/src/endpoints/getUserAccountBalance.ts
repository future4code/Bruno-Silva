import { Request, Response } from 'express';
import { users } from '../data';
import { accountUser } from '../types';

export const getUserAccountBalance = (
    req: Request,
    res: Response
): void => {
    let codeError = 400;
    try {
        const allUsers: accountUser[] | [] = users;
        const user: accountUser | undefined = allUsers.find((user) => user.cpf === req.params.cpf);
        const stringifyCpf: string = req.params.cpf.split(".").join("").split("-").join("");

        if (stringifyCpf.length !== 11 && isNaN(Number(stringifyCpf))) {
            codeError = 422;
            throw new Error("Invalid type! Expected 11 numeric digits, such as: 111.111.111-11! Please, check the input´s value");
        } else if (stringifyCpf.length === 11 && isNaN(Number(stringifyCpf))) {
            codeError = 422;
            throw new Error("Expected only numeric digits! Please, check the character´s used on input´s value");
        } else if (stringifyCpf.length !== 11 && !isNaN(Number(stringifyCpf))) {
            codeError = 422;
            throw new Error("Expected 11 digits! Please, check the number of character´s filled");
        };

        if (!user) {
            codeError = 404;
            throw new Error("User not found! Please, insert a valid CPF!");
        };

        res.status(200).send(user.balance.toString());
    } catch (error) {
        res.status(codeError).send({ message: error.message });
    }


}