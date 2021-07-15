import { Request, Response } from 'express';
import { initialUsers } from '../data';
import { user } from '../types';

export const getUsersByType = (
    req: Request,
    res: Response
): void => {
    let codeError = 400;
    try {
        const userType: string = req.query.type as string;

        if (userType) {
            const usersByType: user[] | undefined = initialUsers.filter((user) => user.type === userType.toLocaleUpperCase());
            res.status(200).send(usersByType);
        } else {
            codeError = 422;
            throw new Error("Invalid type! Please, check for: 'ADMIN/admin' or 'NORMAL/normal'")
        }
    } catch(error) {
        res.status(codeError).send({message: error.message});
    }
}