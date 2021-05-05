import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80px;

img {
    width: 2vw;
    height: 3vh;
    margin: 0 16px;
}

p {
    margin: 0 2px;
}
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={ props.imagem} alt="icones"></img>
            <p><b>E-mail:</b></p>
            <p>{ props.texto }</p>
        </SmallCardContainer>
    );
}

export default CardPequeno