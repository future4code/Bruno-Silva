import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class EdicaoDoUsuario extends React.Component {
    state = {
        estadoBotao: "edicao",
        inputNovoName: "",
        inputNovoEmail: ""
    }

    alternaParaSalvar = () => {
        this.setState({ estadoBotao: "salvar" });
    }

    editUser = (id) => {
        if (window.confirm("Tem certeza que deseja alterar os dados do usuário?")) {
            const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

            const body = {
                name: this.state.inputNovoName,
                email: this.state.inputNovoEmail
            }

            const header = {
                headers: {
                    Authorization: "bruno-silva-paiva"
                }
            };

            axios
            .put(urlAddress, body, header)
            .then((response) => {
                this.setState({ estadoBotao: "edicao" });
            })
            .catch((error) => {
                alert("Não foi possível alterar usuário(a). Tente novamente!")
            })
        } else {
            return;
        }
    }

    handleNewName = (event) => {
        this.setState({ inputNovoName: event.target.value })
    }

    handleNewEmail = (event) => {
        this.setState({ inputNovoEmail: event.target.value })
    }

    render() {
        const camposAlteracao = () => {
            if (this.state.estadoBotao === "edicao") {
                return (
                    <div>
                        <button onClick={this.alternaParaSalvar}>Edicao</button>
                    </div>
                );
            } else if (this.state.estadoBotao === "salvar") {
                return (
                    <div>
                        <input
                            value={this.state.inputNovoName}
                            onChange={this.handleNewName}
                            placeholder={"Digite novo nome"}
                        />
                        <input
                            value={this.state.inputNovoEmail}
                            onChange={this.handleNewEmail}
                            placeholder={"Digite novo e-mail"}
                        />
                        <button onClick={() => this.editUser(this.props.userId)}>Salvar</button>
                    </div>
                );
            }
        }

        return (
            <div>
                {camposAlteracao()}
            </div>
        )
    }

}

export default EdicaoDoUsuario;