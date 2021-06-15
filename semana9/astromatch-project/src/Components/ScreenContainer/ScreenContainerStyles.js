import styled from 'styled-components';

export const MatchContainer = styled.div`
    height: 540px;
    width: 320px;
    border: 3px solid black;
    border-radius: 8px;
    background-color: white;
    display: grid;
    grid-template-rows: 1fr 4fr 1fr;
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
        height: 32px;
    }

    img:hover {
        background-color: grey;
        border-radius: 50%;
        cursor: pointer;
    }
`