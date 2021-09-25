import React, { useContext } from "react";

import { RegisterFormContainer } from './styled';

import useForm from "../../hooks/useForm";
import { register } from '../../services/participant';

const RegisterForm = () => {
  const [form, onChange, clear] = useForm({email: "", password: "" });

  const onSubmitRegister = (event) => {
    event.preventDefault();
    register(form, clear);
  }

  return (
    <RegisterFormContainer>
      <form onSubmit={onSubmitRegister}>
        <label
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
        />
        <label
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
        />
        <label
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
        />
        <button
          type={"submit"}
          variant={"contained"}
          color={"secondary"}
        >
          Enviar
        </button>
      </form>
    </RegisterFormContainer>
  );
}

export default RegisterForm;