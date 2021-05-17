import React from 'react';
import styled from 'styled-components';

const SectionPerguntaAberta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;

    label {
        margin-bottom: 10px;
    }
`

export default class PerguntaAberta extends React.Component {
  
  render() {

    return (
      <SectionPerguntaAberta>
          <label>{this.props.pergunta}</label>
          <input></input>
      </SectionPerguntaAberta>
    );
  }
}