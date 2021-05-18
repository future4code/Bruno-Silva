import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Formulario extends React.Component {
  render() {
    return (
      <FormContainer>
        <h2>Criar Usuário</h2>
        <div>
          <input
            value={this.props.inputName}
            onChange={this.props.handleName}
            placeholder={"Nome"}
          />
          <input
            value={this.props.inputEmail}
            onChange={this.props.handleEmail}
            placeholder={"E-mail"}
          />
          <button onClick={this.props.criarUsuario}>Criar</button>
        </div>
      </FormContainer>
    );
  }
}

export default Formulario;