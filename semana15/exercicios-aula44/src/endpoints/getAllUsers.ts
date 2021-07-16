import { Request, Response } from 'express';
import { initialUsers } from '../data';
import { user } from '../types';

export const getAllUsers = (
    req: Request,
    res: Response
): void =>{
    let codeError: number = 400;
    let users: user[] = initialUsers; 

    try {
        res.status(200).send(users);
    } catch(error) {
        res.status(codeError).send({message: error.message});
    };
};