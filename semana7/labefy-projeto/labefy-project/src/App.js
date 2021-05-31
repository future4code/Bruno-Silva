import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import StartPage from './Components/StartPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-color: black;
    color: yellowgreen;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 32px;
  }
`

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginContainer = styled.div`
  background-color: #111111;
  height: 400px;
  width: 480px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const CardLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-bottom: 64px;

  label {
    margin-bottom: 16px;
  }

  input {
    height: 32px;
    width: 240px;
    text-align: center;
  }

  input:hover {
    width: 300px;
    cursor: default;
    background-color: ghostwhite;
  }
`

const Botao = styled.button`
  border-radius: 16px;
  height: 32px;
  width: 80px;
  background-color: #1DB954;

  :hover {
    cursor: pointer;
    width: 96px;
    color: white;
  }
`

class App extends React.Component {
  state = {
    estaLogado: "deslogado",
    inputUser: "",
    inputPassword: "",
    userName: ""
  }

  handleInputUser = (event) => {
    this.setState({ inputUser: event.target.value, userName: event.target.value });
  };

  handleInputPassword = (event) => {
    this.setState({ inputPassword: event.target.value });
  }

  loginUser = () => {
    if( (this.state.inputUser !== "") && (this.state.inputPassword !== "") ) {
      this.setState({ estaLogado: "logado", inputUser: "", inputPassword: "" });
    } else {
      alert ("Favor, inserir nome e/ou senha de usuário");
    } 
  };

  irParaLogin = () => {
    if (window.confirm("Tem certeza que deseja sair?")) {
      this.setState({ estaLogado: "deslogado" });
      alert("Até a próxima! :)");
    }  
  };

  renderizaLogin = () => {
    switch (this.state.estaLogado) {
      case "deslogado":
        return (
          <MainContainer>
            <LoginContainer>
              <h1>Labefy</h1>
              <h3>Seja bem-vindo! :)</h3>
              <CardLoginContainer>
                <input 
                  value={this.inputUser}
                  onChange={this.handleInputUser}
                  placeholder={"Usuário"}
                />
                <label>Nome do usuário</label>
                <input
                  value={this.inputPassword}
                  onChange={this.handleInputPassword} 
                  placeholder={"Senha"}
                />
                <label>Password</label>
                <Botao onClick={this.loginUser}>Entrar</Botao>
              </CardLoginContainer>
            </LoginContainer>
          </MainContainer>
        );
      case "logado":
        return (
          <StartPage 
            user={this.state.userName}
            logout={this.irParaLogin}
          />
        );
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {this.renderizaLogin()}
      </div>
    );
  }
}
export default App;