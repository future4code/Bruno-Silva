import { Request, Response } from 'express';
import { countries } from '../data';

export const getAllCountries = (
    req: Request,
    res: Response
): void => {
    res.send(countries);
};