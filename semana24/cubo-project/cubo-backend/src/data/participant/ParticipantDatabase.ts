import { CustomError } from "../../error/CustomError";
import { Participant } from "../../models/Participant";
import { BaseDatabase } from "../BaseDatabase";


export class ParticipantDatabase extends BaseDatabase {
    private static TABLE_NAME = "Participant";

    getAllParticipants = async (): Promise<Participant[]> => {
        const result = await BaseDatabase.connection(ParticipantDatabase.TABLE_NAME)
            .select("*");
            
        return result.map(participant => Participant.toParticipantModel(participant));
    };

    createParticipant = async (newParticipant: Participant): Promise<void> => {
        try {
            await BaseDatabase.connection(ParticipantDatabase.TABLE_NAME)
                .insert({
                    id: newParticipant.getId(),
                    firstName: newParticipant.getFirstName(),
                    lastName: newParticipant.getLastName(),
                    participation: newParticipant.getParticipation()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };

    modifyParticipationFromParticipantById = async (participant: Participant,modifyParticipationFactor: number): Promise<void> => {
        try {
            await BaseDatabase.connection(ParticipantDatabase.TABLE_NAME)
                .update({
                    participation: participant.getParticipation()*modifyParticipationFactor
                })
                .where({
                    id: participant.getId()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    }
};