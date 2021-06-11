import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { goToHome } from '../../routes/Coordinator';
import baseURL from '../../constants/baseURL';

function LoginPage() {
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  });


  const onClickLogin = (event) => {
    event.preventDefault();
    const url = `${baseURL}/login`;

    const body = form;
    
    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push("/admin/trips/list");
        alert("Seja bem-vindo! :)")
      })
      .catch((err) => {
        alert(`${err.response.data.message}! Tente novamente :)`)
    });

    cleanFields();
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <form onSubmit={onClickLogin}>
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder={"e-mail"}
          required
          type={"email"}
        />
        <input 
          name={"password"}
          value={form.password} 
          onChange={onChange} 
          placeholder={"senha"}
          required
          type={"password"}  
        />
        <button>Entrar</button>
      </form>
      <div>
        <button onClick={() => { goToHome(history) }}>Voltar</button>
      </div>
    </div>
  );
}

export default LoginPage;