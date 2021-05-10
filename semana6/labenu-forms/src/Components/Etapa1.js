import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

const Container1 = styled.div`
  h3 {
    display: flex;
    justify-content: center;
  }
`

export default class Etapa1 extends React.Component {
  
  render() {

    return (
      <Container1>
        <h3><bold>ETAPA 1 - DADOS GERAIS</bold></h3>
        <PerguntaAberta pergunta={"1. Qual é o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual é a sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual é o seu e-mail?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual é a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
        
      </Container1>
    );
  }
}