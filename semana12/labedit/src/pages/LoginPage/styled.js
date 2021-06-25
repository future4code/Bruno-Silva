import styled from "styled-components";
import { thirdColor, fourthColor, neutralColor } from '../../constants/colors'

export const LoginContainer = styled.div`
    height: 93vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const LogoContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoImage = styled.img`
    width: 160px;
    max-width: 400px;
`

export const TitleName = styled.div`
    font-size: 64px;
    font-family: verdana, arial, helvetica, sans-serif;
    display: flex;

    span:nth-child(1) {
        color: ${fourthColor};
    }

    span:nth-child(2) {
        color: ${thirdColor}
    }

    span:nth-child(3) {
        color: ${neutralColor}
    }
`

export const LoginFormBox = styled.div`
    height: 400px;
    width: 30vw;
    box-shadow: 1px 1px 1px darkgrey;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const SignUpButtonContainer = styled.div`
    width: 25vw;
    border-radius: 16px;
    background-color: ${thirdColor};
`

export const LoginFormContainer = styled.div`
    width: 25vw;
    margin: 16px 0;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
    }
`