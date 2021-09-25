import React from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/urls';
import useRequestData from '../hooks/useRequestData';

export const GlobalState = (props) => {
    const { data: participants } = useRequestData([], `${BASE_URL}participants/`);

    return <GlobalStateContext.Provider value={participants}>
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState;