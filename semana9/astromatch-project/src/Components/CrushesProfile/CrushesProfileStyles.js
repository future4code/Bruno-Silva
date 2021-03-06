import styled from 'styled-components';

export const PersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CrushContainer = styled.div`
    height: 360px;
    width: 90%;
    margin: auto;
    border: 1px solid yellowgreen;
    border-radius: 4px;
    box-shadow: 2px 2px 2px darkgrey;
    display: grid;
    grid-template-rows: 2fr 1fr;
`

export const PhotoProfile = styled.div`
    background-image: url(${(props) => props.photoProfile});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    margin-top: -1px;
`

export const InfoBox = styled.div`
    color: white;
    background-image: linear-gradient(#000000, #55efc4);
    padding: 8px;
    margin-top: -1px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    span:first-child {
        font-weight: bold;
        font-size: 20px;
        margin-right: 8px;
    }

    span:nth-child(2) {
        font-weight: bold;
        margin-right: 8px;
    }
`

export const MatchBox = styled.div`
    padding-top: 4px;
    display: flex;
    justify-content: space-evenly;

    img {
        height: 32px;
    }

    img:hover {
        width: 33px;
        background-color: yellow;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const NoMatchesContainer = styled.div`
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        height: 32px;
    }

    img:hover {
        cursor: pointer;
        height: 36px;
    }
`

