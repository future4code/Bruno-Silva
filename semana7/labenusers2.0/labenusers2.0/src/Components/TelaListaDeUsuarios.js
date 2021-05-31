import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin: 32px 0;
    }
`

const CardListContainer = styled.div`
    border: 1px solid grey;
    border-radius: 8px;
    background-color: lightblue;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserContainer = styled.div`
    border: 1px solid grey;
    background-color: slateblue;
    height: 64px;
    width: 80%;
    padding: 0 8px;
    margin-bottom: 2vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

class TelaListaDeUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        const urlAddress = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        };

        axios
            .get(urlAddress, header)
            .then((response) => {
                this.setState({ usuarios: response.data })
            })
            .catch((error) => {
                alert("Ops! Ocorreu um erro! Tente novamente :)")
            });

    }

    deleteUser = (id) => {
        if (window.confirm("Deseja realmente deletar este(a) usuário(a)?")) {
            const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

            const header = {
                headers: {
                    Authorization: "bruno-silva-paiva"
                }
            };

            axios
                .delete(urlAddress, header)
                .then((response) => {
                    this.getAllUsers()
                    alert("Usuário(a) removido(a) com sucesso!")
                })
                .catch((error) => {
                    alert("Ops, um erro ocorreu! Tente novamente :)")
                })
        } else {
            return;
        }
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <UserContainer key={user.id}>
                    <li>{user.name}</li>
                    <div>
                        <Botao onClick={() => this.props.irParaDetalhes(user.id)}>Detalhes</Botao>
                        <Botao onClick={() => this.deleteUser(user.id)}>Remover</Botao>
                    </div>
                </UserContainer>
            );
        });

        return (
            <ListContainer>
                <Botao onClick={this.props.botaoIrParaFormulario}>Ir para Formulários</Botao>
                <CardListContainer>
                    <h2>Lista de Usuários</h2>
                    {listaUsuarios}
                </CardListContainer>
            </ListContainer>
        );
    };
}

export default TelaListaDeUsuarios;