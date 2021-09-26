import { ParticipantDatabaseMock } from './mocks/participant/ParticipantDatabaseMock';

import { ParticipantBusiness } from '../src/business/ParticipantBusiness';
import { ParticipantDatabase } from '../src/data/participant/ParticipantDatabase';

import { ParticipantMockSuccess } from './mocks/participant/ParticipantMock';

const participantBusinessMock = new ParticipantBusiness(
    new ParticipantDatabaseMock() as ParticipantDatabase
);

describe("Testing get all participants", () => {
    test("Should return success when it´s required", async () => {
        expect.assertions(1);

        const result = await participantBusinessMock.getAllParticipants();

        expect(result).toEqual([ParticipantMockSuccess]);
    });
});

describe("Testing create participant", () => {

    test("Should return error if firstName isn´t provided", async () => {
        expect.assertions(2);
        try {

            await participantBusinessMock.createParticipant({
                firstName: "",
                lastName: "participant_lastName",
                participation: 10
            });

        } catch (error: any) {
            expect(error.message).toEqual(`'firstName', 'lastName' and/or 'participation' weren´t provided!`);
            expect(error.code).toBe(422);
        };
    });
});