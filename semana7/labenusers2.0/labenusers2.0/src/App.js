import React from 'react';
import TelaFormulario from './Components/TelaFormulario';
import TelaListaDeUsuarios from './Components/TelaListaDeUsuarios';
import TelaDetalhesDoUsuario from './Components/TelaDetalhesDoUsuario';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100vh;
  background-color: blueviolet;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: greenyellow;
`

class App extends React.Component {
  state = {
    paginaAtual: "formulario",
    idUsuario: ""
  }

  irParaTelaListaDeUsuarios = () => {
    this.setState({ paginaAtual: "lista" });
  }

  irParaTelaFormulario = () => {
    this.setState({ paginaAtual: "formulario" });
  }

  irParaTelaDetalhesDoUsuario = (id) => {
    this.setState({ paginaAtual: "detalhes", idUsuario: id });
  }

  selecionaTela = () => {
    switch (this.state.paginaAtual) {
      case "formulario":
        return (
          <TelaFormulario
            botaoIrParaLista={this.irParaTelaListaDeUsuarios}
          />);
      case "lista":
        return (
          <TelaListaDeUsuarios
            botaoIrParaFormulario={this.irParaTelaFormulario}
            irParaDetalhes={this.irParaTelaDetalhesDoUsuario}
          />);
      case "detalhes":
        return (
          <TelaDetalhesDoUsuario 
            botaoIrParaLista={this.irParaTelaListaDeUsuarios}
            idUsuario={this.state.idUsuario}
          />
        );
      default:
        return alert("Ops! Página não encontrada :(")
    }
  }

  render() {
    return (
      <MainContainer>
        <HeaderContainer>
          <h1>Labenusers</h1>
        </HeaderContainer>
        {this.selecionaTela()}
      </MainContainer>
    );
  }
}

export default App;
