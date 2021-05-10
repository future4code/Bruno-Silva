import React from 'react';
import styled from 'styled-components';

const Container4 = styled.div`
  h3 {
    display: flex;
    justify-content: center;
  }
`

export default class Final extends React.Component {
  render() {
    return (
      <Container4>
        <h3><bold>O FORMULÁRIO ACABOU!</bold></h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </Container4>
    );
  }
}