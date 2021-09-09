import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';

const PageSelector = () => {
    const { loteries, setContestType, setLotery } = useContext(GlobalStateContext);

    const onChangeSelect = (event) => {
        if (event.target.value !== "default") {
            const y = loteries.filter(lotery => lotery.nome === event.target.value);
            setLotery(y[0]);
            setContestType(event.target.value);
        };
    };

    const contestOptions = loteries && loteries.map((lotery) => {
        return(
            <option key={lotery.id} value={lotery.nome}>{lotery.nome}</option>
        );
    });

    return (
        <select onChange={onChangeSelect}>
            <option value={"default"}>Selecione</option>
            {contestOptions}
        </select>
    );
};

export default PageSelector;