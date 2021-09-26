export class PokeStatus {
    constructor(
        private type1: string,
        private type2: string,
        private attack: number,
        private defense: number,
        private stamina: number
    ) { }

    getType1(): string {
        return this.type1;
    };

    getType2(): string {
        return this.type2;
    };

    getAttack(): number {
        return this.attack;
    };

    getDefense(): number {
        return this.defense;
    };

    getStamina(): number {
        return this.stamina;
    };

    static toPokeStatusModel(data: any): PokeStatus {
        return new PokeStatus(data.type1, data.type2, data.attack, data.defense, data.stamina);
    };
};