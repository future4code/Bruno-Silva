import styled from 'styled-components';
import { fifthColor, secondColor, thirdColor, fourthColor } from '../../constants/colors';

export const AdminContainer = styled.div`
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

export const HeaderAdminContainer = styled.div`
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

export const SectionSimplifyTripsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 9fr;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ListSimplifyTripsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const TripsDetailContainer = styled.div`
    height: 48px;
    width: 400px;
    margin: 16px;
    padding: 16px;
    color: ${thirdColor};
    background-color: ${fifthColor};
    border-radius: 16px;
    box-shadow: 1px 1px 1px darkgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-bottom: 8px;
        font-size: 24px;
    }

    :hover {
        cursor: pointer;
        background-color: ${fourthColor};
    }

    img {
        height: 32px;
    }

    img:hover {
        height: 36px;
        background-color: lightgoldenrodyellow;
        opacity: 0.9;
        border-radius: 50%;
    }
`