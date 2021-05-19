import React from 'react';
import ListaDeUsuarios from './Components/ListaDeUsuarios';
import Formulario from './Components/Formulario';
import axios from 'axios';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends React.Component {
  state = {
    usuariosCadastrados: [],
    inputName: "",
    inputEmail: "",
    paginaAtual: 1
  }

  componentDidMount() {
    this.getAllUsers()
  }

  deleteUser = (id) => {
    const header = {
      headers: {
        Authorization: "bruno-silva-paiva"
      } 
    };

    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, header)
    .then((res) => {
      alert("Usuário removido com sucesso!");
    })
    .catch((err) => {
      alert("Ops! Não foi possível remover usuário!")
    })

    this.getAllUsers()
  }

  

  getAllUsers = () => {
    const header = {
      headers: {
        Authorization: "bruno-silva-paiva"
      } 
    };

    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", header)
    .then((res) => {
      this.setState({ usuariosCadastrados: res.data});
    })
    .catch((err) => {
      alert("Erro ao exibir usuarios!")
    })
  }

  createUser = () => {
    const header = {
      headers: {
        Authorization: "bruno-silva-paiva"
      } 
    };

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, header)
    .then(() => {
      alert("Cadastro realizado com sucesso!")
      this.setState({ inputName: "", inputEmail: "" })
      this.getAllUsers()
    })
    .catch((err) => {
      alert("Ops! Não foi possível cadastrar usuário!")
    })
  }

  handleName = (e) => {
    this.setState({ inputName: e.target.value});
  }

  handleEmail = (e) => {
    this.setState({ inputEmail: e.target.value});
  }

  alternarPaginas = () => {
    let numeroDaPagina = this.state.paginaAtual;

    if ( numeroDaPagina === 1 ){
      numeroDaPagina = 2;
    } else {
      numeroDaPagina = 1;
    }

    this.setState({ paginaAtual: numeroDaPagina});
  }

  renderizaPagina = () => {
    switch (this.state.paginaAtual) {
      case 1:
        return (
        <Formulario
          key={this.state.usuariosCadastrados.id}
          inputName={this.state.inputName}
          inputEmail={this.state.inputEmail}
          handleName={this.handleName}
          handleEmail={this.handleEmail}
          criarUsuario={this.createUser}
        />
        );
      case 2:
        return (
        <ListaDeUsuarios
          key={this.state.usuariosCadastrados.id}
          usuarios={this.state.usuariosCadastrados}
          removerUsuario={this.deleteUser}
        />
        );
      default:
        return;
    }
  }

  render(){
    const lista = this.state.usuariosCadastrados

    return (
      <MainContainer>
        <h1>Labenusers</h1>
        <button onClick={this.alternarPaginas}>Trocar de Página</button>
        <hr />
        <div>{this.renderizaPagina()}</div>
      </MainContainer>
    );
  }
}

export default App;
