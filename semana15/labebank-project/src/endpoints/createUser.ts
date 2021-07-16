import { Request, Response } from 'express';
import { users } from '../data';
import { accountUser, date } from '../types';

export const createUser = (
    req: Request,
    res: Response
): void => {
    let codeError = 400;

    try {
        const allUsers: accountUser[] = users;
        const { name, cpf, birthDay } = req.body;

        const arrayBirthDay: string[] = birthDay.split("/");
        const birthDayInNumbers = [
            Number(arrayBirthDay[0]),
            Number(arrayBirthDay[1]),
            Number(arrayBirthDay[2])
        ]

        const actualDate: date = [
            new Date().getDate(),
            new Date().getMonth()+1,
            new Date().getFullYear(),
        ]

        if (!name || !cpf || !birthDay) {
            codeError = 422;
            throw new Error("One or more fields weren´t filled. Please, check inputs´ values");
        }

        // if ()

        const newUser: accountUser = {
            name: name,
            cpf: cpf,
            birthDay: birthDay,
            balance: 0,
            clientTransactions: []
        };

        allUsers.push(newUser);

        res.status(201).send("User account created successfully!");
    } catch (error) {
        res.status(codeError).send({ message: error.message });
    };
};