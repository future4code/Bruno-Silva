import React, { useContext } from 'react';
import PageSelector from '../components/PageSelector';
import logo from '../assets/Logo_Sena.svg';
import { PageContainer, NavPageContainer, NavMiddleContainer, NavFooterContainer, ExibitionContainer } from './styled';
import GlobalStateContext from "../global/GlobalStateContext";

const HomePage = () => {
    const { lotery, contest } = useContext(GlobalStateContext);

    const numbers = contest.numeros && contest.numeros.map((number) => {
        return (
            <p key={number}>{number}</p>
        );
    });

    return (
        <PageContainer>
            <NavPageContainer>
                <PageSelector />
                <NavMiddleContainer>
                    <img src={logo} alt="logo" />
                    <p>{lotery ? lotery.nome : "Loading"}</p>
                </NavMiddleContainer>
                <NavFooterContainer>
                    <h4>Concurso</h4>
                    <p>{contest? contest.id : "Loading"} - {contest? contest.data : "Loading"}</p>
                </NavFooterContainer>
            </NavPageContainer>
            <ExibitionContainer>
                <div></div>
                <div>
                    {numbers}
                </div>
                <div>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
                </div>
            </ExibitionContainer>
        </PageContainer>
    );
};

export default HomePage;