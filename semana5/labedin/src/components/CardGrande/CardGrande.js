import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 160px;

img {
    width: 80px;
    margin-right: 10px;
    border-radius: 50%;
}

h4 {
    margin-bottom: 15px;
}

div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <img src={ props.imagem } alt="sem foto" />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;