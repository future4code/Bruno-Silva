import React from 'react';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function LoginPage() {
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  const history = useHistory();

  const onClickLogin = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/login";

    const body ={ email, password };

    axios
    .post(url, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      history.push("/admin/trips/list");
    })
    .catch((err) => {
      alert(err.response.data.message)
    });
  };

  const goToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <input type={"email"} value={email} onChange={handleEmail} placeholder={"e-mail"} />
      <input type={"password"} value={password} onChange={handlePassword} placeholder={"senha"} />
      <div>
        <button onClick={goToHome}>Voltar</button>
        <button onClick={onClickLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default LoginPage;