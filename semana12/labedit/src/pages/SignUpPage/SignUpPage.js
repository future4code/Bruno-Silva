import React from "react";
import SignUpForm from './SignUpForm'
import { SignUpContainer } from "./styled";
import useProtectedPage from "../../hooks/useUnProtectedPage";

const SignUpPage = (props) => {
  useProtectedPage();

  const { setLogoutButtonText } = props

  return (
    <>
      <SignUpContainer>
        <SignUpForm setLogoutButtonText={setLogoutButtonText}/>
      </SignUpContainer>
    </>
  );
}

export default SignUpPage;