import styled from "styled-components";
import { thirdColor } from '../../constants/colors'

export const LoginContainer = styled.div`
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SignUpButtonContainer = styled.div`
    width: 25vw;
    border-radius: 16px;
    background-color: ${thirdColor};
`

export const LoginFormContainer = styled.div`
    width: 50vw;
    margin: 24px 0;

    form {
        display: flex;
        flex-direction: column;
    }
`