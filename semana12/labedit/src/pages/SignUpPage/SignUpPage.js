import React, { useEffect } from "react";
import SignUpForm from './SignUpForm'
import { SignUpContainer, SignUpBox, LogoImage, TitleName } from "./styled";
import useProtectedPage from "../../hooks/useUnProtectedPage";
import logo from '../../assets/logo.svg';

const SignUpPage = () => {
  useProtectedPage();

  useEffect(() => {
    document.title = "Register";
  }, [])

  return (
    <SignUpContainer>
      <SignUpBox>
        <LogoImage src={logo} alt={"logo da LaBeDiT"} />
        <TitleName>
          <span><bold>La</bold></span><span><bold>BeD</bold></span><span><bold>iT</bold></span>
        </TitleName>
        <SignUpForm />
      </SignUpBox>
    </SignUpContainer>
  );
}

export default SignUpPage;