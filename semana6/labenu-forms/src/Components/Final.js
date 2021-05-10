import React from 'react';
import styled from 'styled-components';

const MainContainerFinal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  h3 {
    margin-bottom: 16px;
  }
`

export default class Final extends React.Component {
  render() {
    return (
      <MainContainerFinal>
        <h3><bold>O FORMULÁRIO ACABOU!</bold></h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </MainContainerFinal>
    );
  }
}