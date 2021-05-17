import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from './PerguntaOpcoes';

const Container3 = styled.div`
  h3 {
    display: flex;
    justify-content: center;
  }
`

export default class Etapa3 extends React.Component {
  render() {
    return (
      <Container3>
        <h3><bold>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</bold></h3>
        <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"} />
        <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </Container3>
    );
  }
}