import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const SearchPageContainer = styled.div`
    background: linear-gradient(to bottom, #7e48e5 0%, #696969 100%);
    display: grid;
    grid-template-rows: 1fr 5fr;
`
const HeaderSearchPageContainer = styled.div`
    display: flex;
    justify-content: center;
`

const InfoSearchPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CardSearch = styled.div`
    display: flex;
    justify-content: center;
    background-color: grey;
    margin: 16px 0;
    width: 200px;
    border-radius: 32px;

    :hover {
        cursor: pointer;
        background-color: darkgrey;
        width: 280px;
        font-size: 32px;
    }

    p {
        margin: 16px 16px;
    }
`

class SearchPage extends React.Component {
    render() {
        const listaPesquisada = this.props.resultadoPesquisa.map((info, indice) => {
            return (
                <CardSearch onClick={() => this.props.detailPage(info.id)} key={info.id}>
                    <p>{indice + 1}</p>
                    <p>{info.name}</p>
                </CardSearch>
            );
        });

        return (
            <SearchPageContainer>
                <HeaderSearchPageContainer>
                    <h2><em>Pesquisa</em></h2>
                </HeaderSearchPageContainer>
                <InfoSearchPageContainer>
                    <h2><em>Resultado da pesquisa</em></h2>
                    {listaPesquisada}
                </InfoSearchPageContainer>
            </SearchPageContainer>
        );
    };
};

export default SearchPage;