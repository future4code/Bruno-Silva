import styled from 'styled-components';

export const RegisterFormContainer = styled.div`
    height: 20vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00daff;

    input {
        margin: 0 8px;
    }
`

export const FormInput = styled.input`
    height: 48px;
    width: 320px;
    border-radius: 4px;
    border: none;
    text-align: center;
` 

export const FormButton = styled.button`
    height: 48px;
    width: 120px;
    color: #f8f8ff;
    background-color: #00daff;
    border: 2px solid #f8f8ff;
    border-radius: 2px;

    :hover {
        cursor: pointer;
        color: green;
        background-color: lightgrey;
    }
` 