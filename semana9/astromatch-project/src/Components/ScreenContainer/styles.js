import styled from 'styled-components';

export const MatchContainer = styled.div`
    height: 400px;
    width: 320px;
    display: grid;
    grid-template-rows: 4fr 1fr;
    border: 1px solid red;
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
    }
`