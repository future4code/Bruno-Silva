import React from "react";
import SignUpForm from './SignUpForm'
import { LogoImage, SignUpContainer } from "./styled";
import useProtectedPage from "../../hooks/useUnProtectedPage";
import logo from '../../assets/logo.svg';

const SignUpPage = (props) => {
  useProtectedPage();

  const { setLogoutButtonText } = props

  return (
    <>
      <SignUpContainer>
        <LogoImage src={logo} alt={"logo da LabEdit"} />
        <SignUpForm setLogoutButtonText={setLogoutButtonText} />
      </SignUpContainer>
    </>
  );
}

export default SignUpPage;