import React from 'react';
import styled from 'styled-components';

const MainContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  h3, label, input, select {
    margin-bottom: 16px;
  }
`

export default class Etapa1 extends React.Component {
  
  render() {

    return (
      <MainContainer1>
        <h3><bold>ETAPA 1 - DADOS GERAIS</bold></h3>
        <label>1. Qual é o seu nome?</label>
        <input></input>
        <label>2. Qual é a sua idade?</label>
        <input></input>
        <label>3. Qual é o seu e-mail?</label>
        <input></input>
        <label>4. Qual é a sua escolaridade</label>
        <select>
          <option>Ensino médio incompleto</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior incompleto</option>
          <option>Ensino superior completo</option>
        </select>
      </MainContainer1>
    );
  }
}