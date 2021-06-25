import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { LoginFormContainer } from './styled';
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { useHistory } from 'react-router-dom';
import { login } from '../../services/user';
import GlobalStateContext from "../../global/GlobalStateContext";
import CircularProgress from '@material-ui/core/CircularProgress';

const LoginForm = () => {
  const [form, onChange, clear] = useForm({email: "", password: "" });
  const history = useHistory();
  const { setLogoutButtonText } = useContext(GlobalStateContext);
  const [ isLoading, setIsLoading ] = useState(false);

  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, clear, history, setLogoutButtonText, setIsLoading);
  }

  return (
    <LoginFormContainer>
      <h2><em>Área de acesso</em></h2>
      <form onSubmit={onSubmitLogin}>
        <TextField 
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        <TextField 
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        <Button
          type={"submit"}
          variant={"contained"}
          color={"secondary"}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : "Entrar"}
        </Button>
      </form>
    </LoginFormContainer>
  );
}

export default LoginForm;