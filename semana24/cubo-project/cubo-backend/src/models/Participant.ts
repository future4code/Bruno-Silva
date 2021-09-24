export class Participant {
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private participation: number
    ) { }

    getId(): string {
        return this.id;
    };

    getFirstName(): string {
        return this.firstName;
    };

    getLastName(): string {
        return this.lastName;
    };

    getParticipation(): number {
        return this.participation;
    };

    setId(newId: string): void {
        this.id = newId;
    };

    setFirstName(newFirstName: string): void {
        this.firstName = newFirstName;
    };

    setLastName(newLastName: string): void {
        this.lastName = newLastName;
    };

    setParticipation(newParticipation: number): void {
        this.participation = newParticipation;
    };

    static toParticipantModel(data: any): Participant {
        return new Participant(data.id, data.firstName, data.lastName, data.participation);
    };
};

export interface ParticipantInputDTO {
    firstName: string | undefined,
    lastName: string | undefined,
    participation: number | undefined
};