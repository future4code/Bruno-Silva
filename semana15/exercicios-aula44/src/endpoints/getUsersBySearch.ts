import { Request, Response } from 'express';
import { initialUsers } from '../data';
import { user } from '../types';

export const getUsersBySearch = (
    req: Request,
    res: Response
): void => {
    let codeError = 400;
    try {
        const userType: string = req.query.type as string;
        const userName: string = req.query.name as string;

        // if (userType && userName){} // Pesquisa dupla não solicitada

        if (userType && !userName) {
            const usersByType: user[] | undefined = initialUsers.filter((user) => user.type === userType.toLocaleUpperCase());
            
            if (!usersByType[0]) {
                codeError = 422;
                throw new Error("Please, check credential´s type for: 'ADMIN' or 'NORMAL'");
            }
            res.status(200).send(usersByType);
        }

        if (userName && !userType) {
            const usersByName: user[] | undefined = initialUsers.filter((user) => {
                return user.name.toLocaleLowerCase().includes(userName.toLocaleLowerCase())
            });

            if (!usersByName[0]) {
                codeError = 404;
                throw new Error("No users have been found!")
            }

            res.status(200).send(usersByName);
        }

        codeError = 422;
        throw new Error("No type/ name has been found! Please, insert an input`s value");
    } catch (error) {
        res.status(codeError).send({ message: error.message });
    }
}