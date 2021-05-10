import React from 'react';
import styled from 'styled-components';

const MainContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  h3, label, input {
    margin-bottom: 16px;
  }
`

export default class Etapa2 extends React.Component {
  render() {
    return (
      <MainContainer2>
        <h3><bold>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</bold></h3>
        <label>5. Qual curso?</label>
        <input></input>
        <label>6. Qual a unidade de ensino?</label>
        <input></input>
      </MainContainer2>
    );
  }
}