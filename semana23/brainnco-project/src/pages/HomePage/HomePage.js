import React, { useContext } from 'react';
import PageSelector from '../../components/PageSelector';
import logo from '../../assets/logo.svg';
import { PageContainer, NavAndMidContainer, NavPageContainer, NavMiddleContainer, NavFooterContainer, CurveBox, ExibitionContainer, NumbersContainer, SortNumberBox } from './styled';
import GlobalStateContext from "../../global/GlobalStateContext";
import moment from 'moment';

const HomePage = () => {
    const { states } = useContext(GlobalStateContext);
    const { lotery, contest, contestType } = states;

    const formatedDate = moment(contest.data, "YYYY-MM-DD").format("DD/MM/YYYY");

    const numbers = contest.numeros && contest.numeros.map((number) => {
        return (
            <SortNumberBox>
                <p key={number}>{number}</p>
            </SortNumberBox>
        );
    });

    return (
        <PageContainer>
            <NavAndMidContainer contestType={contestType}>
                <NavPageContainer>
                    <PageSelector />
                    <NavMiddleContainer>
                        <img src={logo} alt="logo" />
                        <p>{lotery ? lotery.nome.toLocaleUpperCase() : "Loading"}</p>
                    </NavMiddleContainer>
                    <NavFooterContainer>
                        <h4>Concurso</h4>
                        <p>{contest ? contest.id : "Loading"} - {contest ? formatedDate : "Loading"}</p>
                    </NavFooterContainer>
                </NavPageContainer>
                <CurveBox contestType={contestType} />
            </NavAndMidContainer>
            <ExibitionContainer>
                <div></div>
                <NumbersContainer>
                    {numbers}
                </NumbersContainer>
                <div>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
                </div>
            </ExibitionContainer>
        </PageContainer>
    );
};

export default HomePage;