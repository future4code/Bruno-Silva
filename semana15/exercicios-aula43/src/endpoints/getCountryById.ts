import { Request, Response } from 'express';
import { countries } from '../data';
import { country } from '../types';

export const getCountryById = (
    req: Request,
    res: Response
):void => {
    if(req.params.id) {
        const countryInfos: country[] = countries.filter((country): boolean => {
            return country.id === Number(req.params.id)
        })

        if (countryInfos[0]) {
            res.status(200).send(countryInfos[0])
        } else {
            res.status(404).send("Not found")
        }
        
    }
}