import React from "react";
import LoginForm from './LoginForm'
import { LoginContainer, SignUpButtonContainer } from "./styled";
import Button from "@material-ui/core/Button";
import { goToRegister } from "../../routes/coordinator";
import { useHistory } from "react-router";
import useUnProtectedPage from '../../hooks/useUnProtectedPage'

const LoginPage = (props) => {
  useUnProtectedPage()
  const history = useHistory();
  const { setLogoutButtonText} = props

  return (
    <>
      <LoginContainer>
        <LoginForm setLogoutButtonText={setLogoutButtonText}/>
        <SignUpButtonContainer>
          <Button
            type={"submit"}
            fullWidth
            variant={"text"}
            color={"inherit"}
            margin={"normal"}
            onClick={() => {goToRegister(history)}}
          >
            Não possui conta? Cadastre-se!
          </Button>
        </SignUpButtonContainer>
      </LoginContainer>
    </>
  );
}

export default LoginPage;