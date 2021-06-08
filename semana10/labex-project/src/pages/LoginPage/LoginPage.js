import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  const backToHome = () => {
    history.goBack();
  };

  const goToAdminHome = () => {
    history.push("/admin/trips/list");
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <input placeholder={"e-mail"} />
      <input placeholder={"senha"} />
      <div>
        <button onClick={backToHome}>Voltar</button>
        <button onClick={goToAdminHome}>Entrar</button>
      </div>
    </div>
  );
}

export default LoginPage;