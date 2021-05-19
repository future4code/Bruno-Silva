import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin: 32px 0;
    }
`

const CardFormContainer = styled.div`
    border: 1px solid grey;
    border-radius: 8px;
    width: 400px;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
    }
`
const Botao = styled.button`
    border-radius: 8px;
    padding: 8px;
    background-color: goldenrod;

    :hover {
        cursor: pointer;
        color: greenyellow;
    }
`

class TelaFormulario extends React.Component {
    state = {
        inputName: "",
        inputEmail: ""
    }

    createUser = () => {
        const urlAddress = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        };

        axios
        .post(urlAddress, body, header)
        .then((response) => {
            alert("Cadastro de usuário(a) realizado(a) com sucesso!")
        })
        .catch((error) => {
            alert("Usuário e/ou e-mail já cadastrado! Favor, reinserir dados de cadastro")
        });

        this.setState({ inputName: "", inputEmail: "" })
    }

    handleName = (event) => {
        this.setState({ inputName: event.target.value });
    }

    handleEmail = (event) => {
        this.setState({ inputEmail: event.target.value });
    }

    render() {
        return (
            <FormContainer>
                <Botao onClick={this.props.botaoMudarPagina}>Ir para Lista de Usuários</Botao>
                <CardFormContainer>
                    <h2>Cadastro</h2>
                    <div>
                        <div>
                            <label>Nome:</label>
                            <input 
                                value={this.state.inputName}
                                onChange={this.handleName}
                                placeholder={"Digite seu nome"}
                            />
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input 
                                value={this.state.inputEmail}
                                onChange={this.handleEmail}
                                placeholder={"Digite seu e-mail"}
                            />
                        </div>
                        <Botao onClick={this.createUser}>Salvar</Botao>
                    </div>
                </CardFormContainer>
            </FormContainer>
        );
    };
}

export default TelaFormulario;