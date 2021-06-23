import React from "react";
import errorIcon from '../../assets/errorIcon.svg';
import Typography from "@material-ui/core/Typography";
import { ErrorPageContainer } from "./styled";

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <img src={errorIcon} alt={"ícone de erro 404"} />
      <Typography color={'primary'} variant={'h2'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  );
}

export default ErrorPage;