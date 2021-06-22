import React from "react";
import TextField from "@material-ui/core/TextField";
import { SignUpFormContainer } from './styled';
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { useHistory } from 'react-router-dom';
import { SignUp } from '../../services/user';

const SignUpForm = (props) => {
  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
  const history = useHistory();
  const { setLogoutButtonText } = props;

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    SignUp(form, clear, history, setLogoutButtonText);
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
          Cadastrar
        </Button>
      </form>
    </SignUpFormContainer>
  );
}

export default SignUpForm;