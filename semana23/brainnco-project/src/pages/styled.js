import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
` 

export const NavPageContainer = styled.div`
    height: 100vh;
    width: 38vw;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const NavMiddleContainer = styled.div`
    margin-left: -8vw;
    color: white;
    display: flex;

    img {
        margin-right: 2vw;
    }
`

export const NavFooterContainer = styled.div`
    margin-left: -14vw;
    color: white;
    font-size: 16px;

    p {
        font-size: 24px;
    }
`

export const ExibitionContainer = styled.div`
    width: 62vw;
    padding: 6vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`