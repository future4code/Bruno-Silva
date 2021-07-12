import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { SignUpFormContainer } from './styled';
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { useHistory } from 'react-router-dom';
import { SignUp } from '../../services/user';
import GlobalStateContext from "../../global/GlobalStateContext";
import CircularProgress from '@material-ui/core/CircularProgress';


const SignUpForm = () => {
  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
  const history = useHistory();
  const { setLogoutButtonText } = useContext(GlobalStateContext);
  const [ isLoading, setIsLoading ] = useState(false);

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    SignUp(form, clear, history, setLogoutButtonText, setIsLoading);
  }

  return (
    <SignUpFormContainer>
      <form onSubmit={onSubmitSignUp}>
        <TextField
          type={"text"}
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"Nome do Usuário"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          inputProps={{pattern: "^.{3,}", title: "Seu nome deve ter no mínimo 3 caracteres"}}
          required
        />
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
          inputProps={{ minLength: 8 }}
          required
        />
        <Button
          type={"submit"}
          variant={"contained"}
          color={"secondary"}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : "Cadastrar"}
        </Button>
      </form>
    </SignUpFormContainer>
  );
}

export default SignUpForm;