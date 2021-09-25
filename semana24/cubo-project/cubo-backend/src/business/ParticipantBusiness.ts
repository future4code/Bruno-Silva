import { Participant, ParticipantInputDTO } from "../models/Participant";

import { IdGenerator } from "../services/IdGenerator";

import { CustomError } from "../error/CustomError";
import { ParticipantRepository } from "../data/participant/ParticipantRepository";

export class ParticipantBusiness {
    constructor(
        private participantDatabase: ParticipantRepository,
        private idGenerator: IdGenerator
    ) { };

    getAllParticipants = async (): Promise<Participant[]> => {
        const participants = await this.participantDatabase.getAllParticipants();

        return participants;
    };

    createParticipant = async (
        input: ParticipantInputDTO
    ): Promise<void> => {
        const { firstName, lastName, participation } = input;

        if (!firstName || !lastName || !participation) {
            throw new CustomError(422, `'firstName', 'lastName' and/or 'participation' weren´t provided!`);
        };

        if (participation <= 0 || participation >= 100) {
            throw new CustomError(422, `'participation' should be a non-zero positive number, lesser than 100!`);
        };

        const allParticipants = await this.participantDatabase.getAllParticipants();

        let participationSum: number = 0;

        for (let participant of allParticipants) {
            participationSum += participant.getParticipation();
        };

        const newId = this.idGenerator.generateId();

        const newParticipant: Participant = Participant.toParticipantModel({
            id: newId,
            firstName,
            lastName,
            participation
        });

        if (participationSum + participation < 100) {

            await this.participantDatabase.createParticipant(newParticipant);

        } else {
            const modifyParticipationFactor = (100 - participation) / 100;

            for (let participant of allParticipants) {
                await this.participantDatabase.modifyParticipationFromParticipantById(participant, modifyParticipationFactor);
            };

            await this.participantDatabase.createParticipant(newParticipant);
        };
    };
};