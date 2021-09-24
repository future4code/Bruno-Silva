import { Participant } from "../../models/Participant";

export interface ParticipantRepository {
    getAllParticipants(): Promise<Participant[]>,
    createParticipant(newParticipant: Participant): Promise<void>,
    modifyParticipationFromParticipantById(participant: Participant, newTotalPercentage: number): Promise<void>
};