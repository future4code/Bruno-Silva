import express from 'express';

import { ParticipantBusiness } from '../business/ParticipantBusiness';

import { ParticipantController } from '../controller/ParticipantController';

import { ParticipantDatabase } from '../data/participant/ParticipantDatabase';

import { IdGenerator } from '../services/IdGenerator';


export const participantRouter = express.Router();

const idGenerator = new IdGenerator();

const participantDatabase = new ParticipantDatabase();

const participantBusiness = new ParticipantBusiness(
    participantDatabase,
    idGenerator
);

const participantController = new ParticipantController(participantBusiness);

participantRouter.get("/", (req,res) => participantController.getAllParticipants(req,res));

participantRouter.post("/", (req,res) => participantController.createParticipant(req,res));