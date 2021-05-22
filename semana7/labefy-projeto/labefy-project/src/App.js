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
  width: 800px;
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
    width: 240px;
    border-radius: 16px;
    text-align: center;
  }

  input:hover {
    width: 300px;
    cursor: pointer;
    background-color: yellowgreen;
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
      alert ("Favor, inserir nome de usuário");
    } 
  };

  irParaLogin = () => {
    this.setState({ estaLogado: "deslogado" });
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
                <button onClick={this.loginUser}>Entrar</button>
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