import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDiaDeSortePage, goToLotoFacilPage, goToLotoManiaPage, goToMegaSenaPage, goToQuinaPage, goToTimeManiaPage, goToInitialPage } from '../routes/coordinator';

const PageSelector = () => {
    const history = useHistory();

    const onChangeSelect = (event) => {
        switch (event.target.value) {
            case "mega-sena":
                return goToMegaSenaPage(history);
            case "quina":
                return goToQuinaPage(history);
            case "lotofacil":
                return goToLotoFacilPage(history);
            case "lotomania":
                return goToLotoManiaPage(history);
            case "timemania":
                return goToTimeManiaPage(history);
            case "dia-de-sorte":
                return goToDiaDeSortePage(history);
            default:
                return goToInitialPage(history);
        };
    };

    return (
        <select onChange={onChangeSelect}>
            <option value={"default"}>Selecione</option>
            <option value={"mega-sena"}>MEGA-SENA</option>
            <option value={"quina"}>QUINA</option>
            <option value={"lotofacil"}>LOTOFACIL</option>
            <option value={"lotomania"}>LOTOMANIA</option>
            <option value={"timemania"}>TIMEMANIA</option>
            <option value={"dia-de-sorte"}>DIA DE SORTE</option>
        </select>
    )
};

export default PageSelector;