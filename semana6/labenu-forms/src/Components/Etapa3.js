import React from 'react';
import styled from 'styled-components';

const MainContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  h3, label, input, select {
    margin-bottom: 16px;
  }
`

export default class Etapa3 extends React.Component {
  render() {
    return (
      <MainContainer3>
        <h3><bold>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</bold></h3>
        <label>5. Por que você não terminou um curso de graduação?</label>
        <input></input>
        <label>6. Você fez algum curso complementar?</label>
        <select>
          <option>Nenhum</option>
          <option>Curso técnico</option>
          <option>Curso de inglês</option>
        </select>
      </MainContainer3>
    );
  }
}