import React from 'react';
import TelaFormulario from './Components/TelaFormulario';
import TelaListaDeUsuarios from './Components/TelaListaDeUsuarios';
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
    paginaAtual: "formulario"
  }

  irParaTelaFormulario = () => {
    this.setState({ paginaAtual: "lista" });
  }

  irParaTelaListaDeUsuarios = () => {
    this.setState({ paginaAtual: "formulario" });
  }

  selecionaTela = () => {
    switch (this.state.paginaAtual) {
      case "formulario":
        return (
          <TelaFormulario
            botaoMudarPagina={this.irParaTelaFormulario}
          />);
      case "lista":
        return (
          <TelaListaDeUsuarios
            botaoMudarPagina={this.irParaTelaListaDeUsuarios}
          />)
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
