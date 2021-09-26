import { PokeInfoDatabaseMock } from './mocks/pokeInfo/PokeInfoDatabaseMock';

import { PokeInfoBusiness } from '../src/business/PokeInfoBusiness';
import { PokeInfoDatabase } from '../src/data/pokeInfo/PokeInfoDatabase';

import { PokeListMockSuccess } from './mocks/pokeInfo/PokeListMock';
import { PokeStatusMockSuccess } from './mocks/pokeInfo/PokeStatusMock';

const pokeInfoBusinessMock = new PokeInfoBusiness(
    new PokeInfoDatabaseMock() as PokeInfoDatabase
);

describe("Testing get pokeList ordered and paged", () => {
    test("Should return success when it´s required", async () => {
        expect.assertions(1);

        const result = await pokeInfoBusinessMock.getPokeListOrderedAndPaged(
            "ASC",
            10,
            2
        );

        expect(result).toEqual([PokeListMockSuccess]);
    });
});

describe("Testing get pokeStatus", () => {

    test("Should return success when it´s required", async () => {
        expect.assertions(1);

        const result = await pokeInfoBusinessMock.getPokeStatusByPokename(
            "Bulbasaur"
        );

        expect(result).toEqual(PokeStatusMockSuccess);
    });
});