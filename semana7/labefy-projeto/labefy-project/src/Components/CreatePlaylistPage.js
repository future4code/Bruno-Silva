import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';

class CreatePlaylistPage extends React.Component {
    state = {
        nomePlayList: ""
    }

    handleCreatePlaylist = (event) => {
        this.setState({ nomePlayList: event.target.value })
    }

    createPlaylist = () => {
        const urlAddress = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            name: this.state.nomePlayList
        }

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        }

        if (this.state.nomePlayList !== "") {
            axios
                .post(urlAddress, body, header)
                .then(() => {
                    alert("Playlist criada com sucesso! :)")
                })
                .catch(() => {
                    alert("Lista com este nome já existente! Favor, criar com outro nome :(")
                })
        } else {
            alert("Favor, preencher campo de nome de playlist!")
        } 

        this.setState({ nomePlayList: "" })
    }

    render() {
        return (
            <div>
                <h2>Criação de Playlist</h2>
                <label>Digite o nome da nova playlist</label>
                <input
                    value={this.state.name}
                    onChange={this.handleCreatePlaylist}
                    placeholder={"insira nome da playlist"}
                />
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        );
    }
}
export default CreatePlaylistPage;