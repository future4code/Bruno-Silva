import { Request, Response } from 'express';

import { ParticipantBusiness } from '../business/ParticipantBusiness';
import { ParticipantInputDTO } from '../models/Participant';

export class ParticipantController {
    constructor(
        private participantBusiness: ParticipantBusiness
    ){};

    getAllParticipants = async (req: Request, res: Response):Promise<void> => {
        try {
            const participants = await this.participantBusiness.getAllParticipants();

            res.status(200).send({ participants: participants});
        } catch (error: any) {
            res.status(error.code || 400).send({ message: error.message? error.message : error.sqlMessage });
        };
    };

    createParticipant = async (req: Request, res: Response):Promise<void> => {
        try {
            const { firstName, lastName, participation } =  req.body;

            const participantInput: ParticipantInputDTO = {
                firstName,
                lastName,
                participation
            };

            await this.participantBusiness.createParticipant(
                participantInput
            );

            res.status(201).send({ message: "Participant created successfully!" });
        } catch (error: any) {
            res.status(error.code || 400).send({ message: error.message? error.message : error.sqlMessage });
        };
    };
};