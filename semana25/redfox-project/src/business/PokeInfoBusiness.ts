import { PokeInfoRepository } from "../data/pokeInfo/PokeInfoRepository";
import { PokeList } from "../models/PokeList";
import { PokeStatus } from "../models/PokeStatus";

export class PokeInfoBusiness {
    constructor(
        private pokeInfoDatabase: PokeInfoRepository
    ) { };

    getPokeListOrderedAndPaged = async (
        order: string,
        size: number,
        page: number
    ): Promise<PokeList[]> => {
        const offset = size * (page - 1);
        
        const pokeList = await this.pokeInfoDatabase.getPokeListOrderedAndPaged(order, size, offset);

        return pokeList;
    };

    getPokeStatusByPokename = async (
        pokename: string
    ): Promise<PokeStatus> => {
        const pokeStatus = await this.pokeInfoDatabase.getPokeStatusByPokename(pokename);

        return pokeStatus;
    };
};