import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    @media screen  and (max-width : 420px){
        border: box-sizing;
        display: flex;
        flex-direction: column;
    }
`

export const NavAndMidContainer = styled.div`
    display: flex;
    width: 40vw;
    background-color:${(props) => {
        switch (props.contestType) {
            case "mega-sena":
                return "#6BEFA3";
            case "quina":
                return "#8666EF";
            case "lotofácil":
                return "#DD7AC6";
            case "lotomania":
                return "#FFAB64";
            case "timemania":
                return "#5AAD7D";
            case "dia de sorte":
                return "#BFAF83";
            default:
                return;
        };
    }};

    @media screen  and (max-width : 420px){
        height: 40vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    };
`

export const NavPageContainer = styled.div`
    width: 30vw;
    padding: 24px 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: initial;

    @media screen  and (max-width : 420px){
        height: 30vh;
        width: 100vw;
        padding: 32px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    };
`

export const NavMiddleContainer = styled.div`
    color: #FFFFFF;
    display: flex;
    font-weight: 700;
    font-size: 30px;

    img {
        width: 60px; 
        margin-right: 2vw;
    }

    @media screen  and (max-width : 420px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
    };
`

export const NavFooterContainer = styled.div`
    color: white;
    font-size: 16px;
    display: flex;
    flex-direction: column;

    h4 {
        font-weight: 500;
        font-size: 14px;
    }

    p {
        margin-top: -8px;
        font-size: 20px;
        font-weight: 700;
    }

    @media screen  and (max-width : 420px){
        margin-top: -24px;
    };
`

export const CurveBox = styled.div`
    width: 10vw;
    background-color: #EFEFEF;
    border-top-left-radius: 8vw 50vh;
    border-bottom-left-radius: 8vw 50vh;

    @media screen  and (max-width : 420px){
        height: 10vh;
        width: 100vw;
        border-top-right-radius: 1200vh 200vw;
        border-top-left-radius: 1200vh 200vw;
    };
`

export const ExibitionContainer = styled.div`
    width: 50vw;
    padding: 6vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen  and (max-width : 420px){
        height: 50vh;
        width: 100vw;
        padding: 32px;
        text-align: center;
    };
`

export const NumbersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const SortNumberBox = styled.div`
    width: 110px;
    height: 110px;
    background-color: white;
    border-radius: 50%;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 27px;
        color: #333333;
    }

    @media screen  and (max-width : 420px){
        height: 76px;
        width: 76px;

        p {
            font-size: 20px;
        }
    };
`