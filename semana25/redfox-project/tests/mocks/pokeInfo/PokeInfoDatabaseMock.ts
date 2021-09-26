import { Participant } from '../../../src/models/Participant';
import { ParticipantMockSuccess } from './ParticipantMock';

export class ParticipantDatabaseMock {

    public getAllParticipants = async (): Promise<Participant[]> => {
        return [ParticipantMockSuccess];
    };

    public createParticipant = async(newParticipant: Participant): Promise<void> => {

    };

    modifyParticipationFromParticipantById = async (
        participant: Participant,
        modifyParticipationFactor: number
    ): Promise<void> => {

    };
};