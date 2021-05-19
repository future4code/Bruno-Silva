import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import EdicaoDoUsuario from './EdicaoDoUsuario';

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin: 32px 0;
    }
`

const CardInfoContainer = styled.div`
    border: 1px solid grey;
    border-radius: 8px;
    background-color: lightblue;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
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

class TelaDetalhesDoUsuario extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    componentDidUpdate() {
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
        const detalhesUsuario = this.state.usuarios.map((user) => {
            if (user.id === this.props.idUsuario) {
                return (
                    <DetailContainer>
                        <p>Nome do usuário: {user.name}</p>
                        <p>Id do usuário: {user.id}</p>
                        <Botao onClick={() => this.deleteUser(user.id)}>Remover Usuário</Botao>
                        <EdicaoDoUsuario 
                            userId={user.id}
                        />
                    </DetailContainer>
                )
            }
        });

        return (
            <InfoContainer>
                <Botao onClick={this.props.botaoIrParaLista}>Voltar</Botao>
                <CardInfoContainer>
                    <h2>Informações Adicionais</h2>
                    {detalhesUsuario}
                </CardInfoContainer>
            </InfoContainer>
        );
    };
}

export default TelaDetalhesDoUsuario;