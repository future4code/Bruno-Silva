import styled from 'styled-components';

export const AppFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const TravelIcon = styled.img`
    height: 64px;
`

export const AppFormSendButton = styled.button`
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