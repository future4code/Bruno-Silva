import { PokeList } from '../../../src/models/PokeList';
import { PokeStatus } from '../../../src/models/PokeStatus';
import { PokeListMockSuccess } from './PokeListMock';
import { PokeStatusMockSuccess } from './PokeStatusMock';

export class PokeInfoDatabaseMock {

    public getPokeListOrderedAndPaged = async (
        order: string,
        size: number,
        offset: number
    ): Promise<PokeList[]> => {
        return [PokeListMockSuccess];
    };

    public getPokeStatusByPokename = async (pokename: string): Promise<PokeStatus> => {
        return PokeStatusMockSuccess;
    }
};