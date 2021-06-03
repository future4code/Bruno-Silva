import styled from 'styled-components';

export const MatchesContainer = styled.div`
    height: 360px;
    margin-top: -32px;
`

export const NavMatches = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    h3 {
        padding-left: 8px;
        font-style: italic;
    }
`

export const ShowMatches = styled.div`
    height: 90%;
    overflow: auto;
`

export const CrushBox = styled.div`
    :hover {
        background-color: yellowgreen;
        cursor: pointer;
    }
`

export const CrushChatContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 8px;
    font-size: 8px;

    p {
        font-size: 16px;
    }

    img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        margin-right: 8px;
    }
` 

export const ImageRestart = styled.img`
    height: 24px;

    :hover {
        height: 32px;
        cursor: pointer;
    }
`