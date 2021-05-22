import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CreatePlaylistContainer = styled.div`
    background: linear-gradient(to bottom, #7e48e5 0%, #696969 100%);
    display: grid;
    grid-template-rows: 1fr 5fr;
`
const HeaderCreatePlaylistContainer = styled.div`
    display: flex;
    justify-content: center;
`

const InfoCreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
        margin-bottom: 16px;
    }

    input {
        margin-bottom: 16px;
    }
`

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
            <CreatePlaylistContainer>
                <HeaderCreatePlaylistContainer>
                    <h2>Criação de Playlist</h2>
                </HeaderCreatePlaylistContainer>
                <InfoCreateContainer>
                    <label>Digite o nome da nova playlist</label>
                    <input
                        value={this.state.name}
                        onChange={this.handleCreatePlaylist}
                        placeholder={"insira nome da playlist"}
                    />
                    <button onClick={this.createPlaylist}>Criar</button>
                </InfoCreateContainer>
            </CreatePlaylistContainer>
        );
    }
}
export default CreatePlaylistPage;