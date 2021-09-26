import { Request, Response } from 'express';

import { PokeInfoBusiness } from '../business/PokeInfoBusiness';

export class PokeInfoController {
    constructor(
        private pokeInfoBusiness: PokeInfoBusiness
    ){};

    getPokeListOrderedAndPaged = async (req: Request, res: Response):Promise<void> => {
        try {
            const order = req.query.order === "DESC" ? "DESC" : "ASC";
            const size = Number(req.query.size) || 10;
            const page = Number(req.query.page) || 1; 

            const pokeList = await this.pokeInfoBusiness.getPokeListOrderedAndPaged(order, size, page);

            res.status(200).send({ pokelist: pokeList});
        } catch (error: any) {
            res.status(error.code || 400).send({ message: error.message? error.message : error.sqlMessage });
        };
    };

    getPokeStatusByPokename = async (req: Request, res: Response):Promise<void> => {
        try {
            const pokename = req.params.pokename;

            const pokeStatus = await this.pokeInfoBusiness.getPokeStatusByPokename(pokename);

            res.status(200).send({ pokeStatus: pokeStatus});
        } catch (error: any) {
            res.status(error.code || 400).send({ message: error.message? error.message : error.sqlMessage });
        };
    };
};