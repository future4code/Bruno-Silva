import React, { useEffect } from "react";
import LoginForm from './LoginForm'
import { LogoContainer, LogoImage, LoginContainer, LoginFormBox, SignUpButtonContainer, TitleName } from "./styled";
import Button from "@material-ui/core/Button";
import { goToRegister } from "../../routes/coordinator";
import { useHistory } from "react-router";
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import logo from '../../assets/logo.svg';

const LoginPage = () => {
  useUnProtectedPage()
  const history = useHistory();

  useEffect(() => {
    document.title = "Login";
  }, [])

  return (
      <LoginContainer>
        <LogoContainer>
          <LogoImage src={logo} alt={"logo da LabEdit"} />
          <TitleName>
            <span>La</span><span>BeD</span><span>iT</span>
          </TitleName>
        </LogoContainer>
        <LoginFormBox>
          <LoginForm />
          <SignUpButtonContainer>
            <Button
              type={"submit"}
              fullWidth
              variant={"text"}
              color={"inherit"}
              margin={"normal"}
              onClick={() => { goToRegister(history) }}
            >
              Não possui conta? Cadastre-se!
            </Button>
          </SignUpButtonContainer>
        </LoginFormBox>
      </LoginContainer>
  );
}

export default LoginPage;