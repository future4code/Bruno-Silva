import { PokeList } from "../../models/PokeList";
import { PokeStatus } from "../../models/PokeStatus";

export interface PokeInfoRepository {
    getPokeListOrderedAndPaged (
    order: string,
    size: number,
    offset: number
): Promise<PokeList[]>,
    getPokeStatusByPokename (pokename: string): Promise<PokeStatus>
};