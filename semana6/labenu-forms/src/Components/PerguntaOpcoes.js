import React from 'react';
import styled from 'styled-components';

const SectionPerguntaOpcoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;

    label {
        margin-bottom: 10px;
    }
`

export default class PerguntaOpcoes extends React.Component {
  
  render() {
    const opcoesDoSeletor = this.props.opcoes.map((opcao) => {
        return <option>{opcao}</option>
    });   

    return (
      <SectionPerguntaOpcoes>
        <label>{this.props.pergunta}</label>
        <select>{opcoesDoSeletor}
        </select>
      </SectionPerguntaOpcoes>
    );
  }
}