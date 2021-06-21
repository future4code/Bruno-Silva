import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { goToHome } from '../../routes/Coordinator';
import useForm from '../../hooks/useForm';
import baseURL from '../../constants/baseURL';

import { AccessContainer, CoordinatorButton, InputForm } from '../../GlobalStyles';
import { AccessButton } from './LoginPageStyles';

function LoginPage() {
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  });

  useEffect(() => {
    document.title="Login";
  }, [])

  const onClickLogin = (event) => {
    event.preventDefault();
    const url = `${baseURL}/login`;

    const body = form;

    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push("/admin/trips/list");
        alert("Seja bem-vindo! :)");
      })
      .catch((err) => {
        alert(`${err.response.data.message}! Tente novamente :)`)
      });

    cleanFields();
  };

  return (
    <AccessContainer>
      <h1>LOGIN</h1>
      <div>
        <form onSubmit={onClickLogin}>
          <InputForm
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder={"E-mail"}
            required
            type={"email"}
          />
          <InputForm
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={"Senha"}
            required
            type={"password"}
          />
          <AccessButton>Entrar</AccessButton>
        </form>
      </div>
      <div>
        <CoordinatorButton onClick={() => { goToHome(history) }}>Voltar</CoordinatorButton>
      </div>
    </AccessContainer>
  );
}

export default LoginPage;