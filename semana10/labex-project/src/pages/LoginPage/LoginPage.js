import React from 'react';

function LoginPage(props) {
  return (
    <div>
      <input placeholder={"e-mail"} />
      <input placeholder={"senha"} />
      <div>
        <button onClick={props.backToHomePage}>Voltar</button>
        <button onClick={props.logging}>Entrar</button>
      </div>
    </div>
  );
}

export default LoginPage;