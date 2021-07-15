import { Request, Response } from 'express';
import { countries } from '../data';
import { country } from '../types';

export const postEditCountry = (
    req: Request,
    res: Response
): void => {
    let result: country[] = countries;

    const countryIndex: number = result.findIndex(
        (country) => country.id === Number(req.params.id)
    );

    if (countryIndex === -1) {
        res.status(400).send("Country not found!");
    }

    if (!req.body.name && !req.body.capital) {
        res.status(404).send("Invalid parameters!");
    } else if (req.body.name) {
        result[countryIndex].name = req.body.name;
    } else if (req.body.capital) {
        result[countryIndex].capital = req.body.capital;
    }
    
    res.status(200).send("Country successfully modified!");
}