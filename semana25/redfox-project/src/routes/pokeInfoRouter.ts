import express from 'express';

import { PokeInfoBusiness } from '../business/PokeInfoBusiness';

import { PokeInfoController } from '../controller/PokeInfoController';

import { PokeInfoDatabase } from '../data/pokeInfo/PokeInfoDatabase';

export const pokeInfoRouter = express.Router();

const pokeInfoDatabase = new PokeInfoDatabase();

const pokeInfoBusiness = new PokeInfoBusiness(
    pokeInfoDatabase
);

const pokeInfoController = new PokeInfoController(pokeInfoBusiness);

pokeInfoRouter.get("/:pokename", (req,res) => pokeInfoController.getPokeStatusByPokename(req,res));

pokeInfoRouter.get("/list", (req,res) => pokeInfoController.getPokeListOrderedAndPaged(req,res));