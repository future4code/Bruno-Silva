import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';

const Container2 = styled.div`
  h3 {
    display: flex;
    justify-content: center;
  }
`

export default class Etapa2 extends React.Component {
  render() {
    return (
      <Container2>
        <h3><bold>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</bold></h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
      </Container2>
    );
  }
}