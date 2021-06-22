import React from "react";
import TextField from "@material-ui/core/TextField";
import { LoginFormContainer } from './styled';
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { useHistory } from 'react-router-dom';
import { login } from '../../services/user';

const LoginForm = (props) => {
  const [form, onChange, clear] = useForm({email: "", password: "" });
  const history = useHistory();
  const { setLogoutButtonText } = props

  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, clear, history, setLogoutButtonText);
  }

  return (
    <LoginFormContainer>
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
          Entrar
        </Button>
      </form>
    </LoginFormContainer>
  );
}

export default LoginForm;