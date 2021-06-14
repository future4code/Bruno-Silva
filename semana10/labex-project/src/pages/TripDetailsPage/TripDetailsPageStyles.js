import styled from 'styled-components';
import { fifthColor, secondColor, thirdColor, fourthColor } from '../../constants/colors';

export const TripDetailsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 2fr 2fr 2fr;

    img {
        height: 80px;
        margin: 16px;
    }

    button {
        margin: 0 16px;
    }
`

export const HeaderDetailsContainer = styled.div`
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

export const TripInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TripInfoBox = styled.div`
    width: 640px;
    padding: 16px;
    color: ${thirdColor};
    background-color: ${fifthColor};
    border-radius: 8px;
`

export const CandidatesContainer = styled.div`
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CandidatesBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardCandidateContainer = styled.div`
    height: 224px;
    width: 400px;
    margin: 16px;
    padding: 16px;
    color: ${thirdColor};
    background-color: ${fifthColor};
    border-radius: 16px;
    box-shadow: 1px 1px 1px darkgrey;

    p {
        margin-bottom: 8px;
        font-size: 16px;
    }

    :hover {
        cursor: pointer;
        background-color: ${fourthColor};
    }

    div:nth-child(2) {
        display: flex;
        justify-content: space-evenly;
    }
`

export const ApprovedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ApprovedList = styled.ul`
    height: 160px;
    width: 160px;
    margin: 16px;
    padding: 16px;
    color: ${thirdColor};
    background-color: ${fifthColor};
    border-radius: 16px;
    box-shadow: 1px 1px 1px darkgrey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ApprovedOrNoTButton = styled.button`
    height: 32px;
    width: 80px;
    border-radius: 24px;
    margin: 16px 0;
    color: darkblue;
    background-color: yellowgreen;

    :hover {
        cursor: pointer;
        opacity: 0.9;
        color: white;
    }
`