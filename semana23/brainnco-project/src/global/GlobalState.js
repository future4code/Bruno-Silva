import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/urls';
import useRequestData from '../hooks/useRequestData';

export const GlobalState = (props) => {
    const [ contestType, setContestType ] = useState("mega-sena");
    const { data: loteries, getData: getLoteries } = useRequestData([], `${BASE_URL}/loterias`);
    const { data: contests, getData: getContests } = useRequestData([], `${BASE_URL}/loterias-concursos`);
    
    const lotery = loteries.length && loteries.filter(lotery => lotery.nome === contestType);
    const theContest = lotery.length && contests.length && contests.filter(contest => contest.loteriaId === lotery[0].id);

    const { data: contest, getData: getContest } = useRequestData({}, `${BASE_URL}/concursos/${theContest && theContest[0].concursoId}`);

    const data = {
        lotery,
        loteries,
        contest,
        setContestType
    }

    return <GlobalStateContext.Provider value={data}>
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState;