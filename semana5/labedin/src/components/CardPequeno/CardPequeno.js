import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <p>{ props.email }</p>
            <p>{ props.endereco }</p>
        </SmallCardContainer>
    );
}

export default CardPequeno