import axios from 'axios';
import { addressInfo } from '../types';

const getAddressInfo = async (
    zipcode: string
): Promise<addressInfo | null> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);

        const selectInfo: addressInfo = {
            street: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return selectInfo;
    } catch(error: any) {
        console.log(error.message? error.message.data : error.message);
        return null;
    };
};

export default getAddressInfo;