export class PokeList {
    constructor(
        private pokename: string,
        private pokeNumber: number,
    ) { }

    getPokename(): string {
        return this.pokename;
    };

    getPokeNumber(): number {
        return this.pokeNumber
    }

    static toPokeListModel(data: any): PokeList {
        return new PokeList(data.pokename, data.pokeNumber);
    };
};