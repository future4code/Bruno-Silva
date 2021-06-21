import styled from 'styled-components';
import { fifthColor, secondColor, thirdColor, fourthColor } from '../../constants/colors';

export const TripsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 6fr;

    img {
        height: 80px;
        margin: 16px;
    }

    button {
        margin: 0 16px;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${secondColor};
`

export const LogoContainer = styled.div`
    display:flex;
    align-items: center;

    h1 {
        margin-bottom: 48px;
    }

    :hover {
        cursor: pointer;
    }
`

export const SectionTripsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 9fr;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ListTripsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const CardTripContainer = styled.div`
    height: 200px;
    width: 400px;
    margin: 16px;
    padding: 16px;
    color: ${thirdColor};
    background-color: ${fifthColor};
    border-radius: 16px;
    box-shadow: 1px 1px 1px darkgrey;

    p {
        margin-bottom: 8px;
    }

    :hover {
        cursor: default;
        opacity: 0.8;
    }
`