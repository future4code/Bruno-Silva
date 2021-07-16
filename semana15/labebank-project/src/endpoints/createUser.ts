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

        if (!name || !cpf || !birthDay) {
            codeError = 422;
            throw new Error("One or more fields weren´t filled. Please, check inputs´ values");
        }

        const arrayBirthDay: string[] = birthDay.split("/");
        const birthDayInNumbers: date = {
            day: Number(arrayBirthDay[0]),
            month: Number(arrayBirthDay[1]),
            year: Number(arrayBirthDay[2])
        }

        const actualDate: date = {
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
        };

        if (actualDate.year - birthDayInNumbers.year < 18) {
            codeError = 422;
            throw new Error("User cannot be created! User`s age was expected at least 18 years old");
        } else if (actualDate.year - birthDayInNumbers.year === 18) {
            if (actualDate.month < birthDayInNumbers.month) {
                codeError = 422;
                throw new Error("User cannot be created! User`s age was expected at least 18 years old");
            } else if (actualDate.month === birthDayInNumbers.month) {
                if (actualDate.day < birthDayInNumbers.day) {
                    codeError = 422;
                    throw new Error("User cannot be created! User`s age was expected at least 18 years old");
                };
            };
        };

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