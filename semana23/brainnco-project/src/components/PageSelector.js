import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { SelectContainer } from './styled';

const PageSelector = () => {
    const { states, setters } = useContext(GlobalStateContext);
    const { loteries } = states;
    const { setContestType, setLotery } = setters;

    const onChangeSelect = (event) => {
        if (event.target.value !== "default") {
            const newLotery = loteries.filter(lotery => lotery.nome === event.target.value);
            setLotery(newLotery[0]);
            setContestType(event.target.value);
        };
    };

    const contestOptions = loteries && loteries.map((lotery) => {
        return(
            <option key={lotery.id} value={lotery.nome}>{lotery.nome.toLocaleUpperCase()}</option>
        );
    });

    return (
        <SelectContainer onChange={onChangeSelect}>
            <option value={"default"}>SELECIONE O JOGO</option>
            {contestOptions}
        </SelectContainer>
    );
};

export default PageSelector;