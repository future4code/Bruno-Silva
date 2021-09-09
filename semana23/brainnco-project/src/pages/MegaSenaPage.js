import React, { useEffect } from 'react';
import PageSelector from '../components/PageSelector';
import logo from '../assets/Logo_Sena.svg';
import { PageContainer, NavPageContainer, NavMiddleContainer, NavFooterContainer, ExibitionContainer } from './styled';
import useRequestData from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';

const MegaSenaPage = () => {
    // const { data: loteries, getData: getLoteries } = useRequestData([], `${BASE_URL}/loterias`);
    // const { data: contests, getData: getContests } = useRequestData([], `${BASE_URL}/loterias-concursos`);
    // const { data: contest, getData: getContest } = useRequestData([], `${BASE_URL}/concursos/440`);

    // useEffect(() => {
    //     getLoteries();
    // }, []);

    // console.log(loteries);
    // console.log(contests);
    // console.log(contest);
    // const lotery = loteries[0] && loteries.filter( lotery => lotery.nome === "mega-sena");

    return (
        <PageContainer>
            <NavPageContainer>
                <PageSelector />
                <NavMiddleContainer>
                    <img src={logo} alt="logo" />
                    <p>MEGA-SENA</p>
                </NavMiddleContainer>
                <NavFooterContainer>
                    <h4>Concurso</h4>
                    <p>numeração - data</p>
                </NavFooterContainer>
            </NavPageContainer>
            <ExibitionContainer>
                <div></div>
                <div>
                    números
                </div>
                <div>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
                </div>
            </ExibitionContainer>
        </PageContainer>
    );
};

export default MegaSenaPage;