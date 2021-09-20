import React, { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/urls';
import useRequestData from '../hooks/useRequestData';
import axios from 'axios';

export const GlobalState = (props) => {
    const [ contestType, setContestType ] = useState("mega-sena");
    const [ lotery, setLotery ] = useState({id: 0, nome: "mega-sena"});
    const [ contest, setContest ] = useState({});
    const { data: loteries } = useRequestData([], `${BASE_URL}/loterias`);
    const { data: contests } = useRequestData([], `${BASE_URL}/loterias-concursos`);

    useEffect(() => {
        if(loteries.length) {
            setLotery(loteries[0]);
        };

        if(contests.length) {
            getContest(contests[0].concursoId);
        };
    }, [loteries, contests]);

    useEffect(() => {
        if (contests.length) {
            const copyContest = contests.filter(contest => contest.loteriaId === lotery.id);
            getContest(copyContest[0].concursoId);   
        };  
    }, [contestType]);

    const getContest = (id) => {
        axios.get(`${BASE_URL}/concursos/${id}`)
            .then((res) => {
                setContest(res.data);
            })
            .catch(() => {
                alert("Ops, ocorreu um erro! Tente novamente :)");
            });
    };

    const states = { lotery, loteries, contest, contestType };
    const setters = { setContestType, setLotery };

    return <GlobalStateContext.Provider value={{states, setters}}>
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState;