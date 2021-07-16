import { Request, Response } from 'express';
import { countries } from '../data';
import { country } from '../types';

export const getFilteredCountry = (
    req: Request,
    res: Response
): void => {
    let result: country[] = countries;

    result = result
        .filter((country) => {
            return country.name.includes(req.query.name as string);
        })
        .filter((country) => {
            return country.capital.includes(req.query.capital as string);
        })
        .filter((country) => {
            return country.continent.includes(req.query.continent as string);
        });

    if (result.length !== countries.length) {
        res.status(200).send(result);
    } else {
        res.status(404).send("No content has been found");
    };
};