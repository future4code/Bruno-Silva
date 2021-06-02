import styled from 'styled-components';

export const HeaderBox = styled.div`
    height: 48px;
    border-bottom: 2px solid purple;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    span:first-child {
        color: Green;
    }

    span:nth-child(2) {
        color: purple;
    }
`
