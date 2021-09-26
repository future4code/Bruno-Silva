import { CustomError } from "../../error/CustomError";
import { PokeList } from "../../models/PokeList";
import { PokeStatus } from "../../models/PokeStatus";
import { BaseDatabase } from "../BaseDatabase";

export class PokeInfoDatabase extends BaseDatabase {
    private static TABLE_NAME = "Pokemon";

    getPokeListOrderedAndPaged = async (
        order: string,
        size: number,
        offset: number
    ): Promise<PokeList[]> => {
        const result = await BaseDatabase.connection(PokeInfoDatabase.TABLE_NAME)
            .select("pokename", "pokeNumber")
            .orderBy("pokeNumber", order)
            .limit(size)
            .offset(offset);

        return result.map(pokemon => PokeList.toPokeListModel(pokemon));
    };

    getPokeStatusByPokename = async (pokename: string): Promise<PokeStatus> => {
        const result = await BaseDatabase.connection(PokeInfoDatabase.TABLE_NAME)
            .select("type1", "type2", "attack", "defense", "stamina")
            .where({ pokename });

        return PokeStatus.toPokeStatusModel(result[0]);
    };
};