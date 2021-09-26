import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const MainContainer = styled.div`
    height: 70vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const TableContainer = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;

    table, tr, td {
        border: 1px solid lightgrey;
        background-color: rgb(150,130,100);
        text-align: center;
        color: white;
    };

    td {
        height: 60px;
        width: 180px;
    }
`