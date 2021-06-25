import styled from "styled-components";
import { thirdColor, fourthColor, neutralColor } from "../../constants/colors";

export const SignUpContainer = styled.div`
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SignUpBox = styled.div`
    height: 600px;
    width: 35vw;
    background-color: #314a96;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        background-color: white;
        border-radius: 8px;
    }
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

export const SignUpFormContainer = styled.div`
    width: 320px;

    form {
        display: flex;
        flex-direction: column;
    }
`