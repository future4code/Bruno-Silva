import React from 'react';
import styled from 'styled-components';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  irParaProximaEtapa = () => {
    let etapaAtual = this.state.etapa;
    let etapaNova = etapaAtual + 1;
    this.setState({ etapa: etapaNova })
  }


  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1  />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return;
    }
  }

  render() {
    return (
      <MainContainer>
        <div>{this.renderizaEtapa()}</div>
        {this.state.etapa < 4? <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>: ""}
      </MainContainer>
    );
  }
}

export default App;