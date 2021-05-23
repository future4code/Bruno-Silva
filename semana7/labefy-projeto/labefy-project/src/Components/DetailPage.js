import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import playIcon from '../img/play-icon.svg';
import delIcon from '../img/del-icon.svg';

const DetailContainer = styled.div`
    background: linear-gradient(to bottom, #b0e0e6 0%, #696969 100%);
    display: grid;
    grid-template-rows: 3fr 6fr 1fr;
    height: 100vh;

    div h2 {
        display: flex;
        justify-content: center;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        padding: 5vh 0;
    }
`

const AudioBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #696957;
`

const InsertSongContainer = styled.div`
    > div {
        margin-bottom: 16px;
    }

    div label {
        font-size: 24px;
    }

    div input {
        margin: 0 16px;
        height: 24px;
        width: 160px;
        text-align: center;
    }

    div input:hover {
        cursor: default;
        width: 200px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: 0 8px;
    }
`

const Botao = styled.button`
  border-radius: 16px;
  height: 32px;
  width: 80px;
  background-color: #1DB954;

  :hover {
    cursor: pointer;
    width: 96px;
    color: white;
  }
`

const MusicContainer = styled.div`
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        border: 1px solid black;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div img {
        height: 16px;
        padding-left: 4px;
    }

    div:hover {
        cursor: pointer;
        height: 36px;
        width: 36px;
    }

    :hover {
        cursor: default;
        background-color: darkgrey;
    }
`

const DeleteButton = styled.img`
  height: 24px;
  width: 24px;

  :hover {
    height: 40px;
    width: 40px;
  }
`

class DetailPage extends React.Component {
    state = {
        allPlaylists: [],
        urlSong: "",
        autoplay: "",
        inputNovaMusica: "",
        inputNovoArtista: "",
        inputNovoUrl: ""
    };

    componentDidMount() {
        this.getAllPlaylists()
    };

    getAllPlaylists = () => {
        const urlAddress = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        }

        axios
            .get(urlAddress, header)
            .then((res) => {
                this.setState({ allPlaylists: res.data.result.list })
            })
            .catch(() => {
                alert("Ops, ocorreu um erro! Tente novamente! :(")
            })
    };

    playSong = (url) => {
        this.setState({ urlSong: url });
    }

    handleNewSong = (event) => {
        this.setState({ inputNovaMusica: event.target.value })
    }

    handleNewArtist = (event) => {
        this.setState({ inputNovoArtista: event.target.value })
    }

    handleNewUrl = (event) => {
        this.setState({ inputNovoUrl: event.target.value })
    }

    addTrackToPlaylist = (id) => {
        const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const body = {
            name: this.state.inputNovaMusica,
            artist: this.state.inputNovoArtista,
            url: this.state.inputNovoUrl
        }

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        }

        axios
            .post(urlAddress, body, header)
            .then((res) => {
                alert("música cadastrada com sucesso!")
                this.setState({ inputNovaMusica: "", inputNovoArtista: "", inputNovoUrl: "" })
            })
            .catch((err) => {
                alert("Ops, ocorreu um erro! Tente novamente! :(")
            })
    }

    deleteTrackSong = (idPlaylist, idSong) => {
        if (window.confirm("Tem certeza que deseja remover a música?")) {
            const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idSong}`

            const header = {
                headers: {
                    Authorization: "bruno-silva-paiva"
                }
            }

            axios
                .delete(urlAddress, header)
                .then((res) => {
                    alert("Música deletada com sucesso!")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    render() {
        const headerDetail = this.state.allPlaylists.map((info) => {
            if (info.id === this.props.idPlaylist) {
                return (
                    <HeaderContainer>
                        <h1><em>{info.name}</em></h1>
                        <InsertSongContainer>
                            <div>
                                <label>Nova música</label>
                                <input
                                    value={this.state.inputNovaMusica}
                                    onChange={this.handleNewSong}
                                    placeholder={"Nome da música"}
                                />
                                <label>Novo artista</label>
                                <input
                                    value={this.state.inputNovoArtista}
                                    onChange={this.handleNewArtist}
                                    placeholder={"Nome do(a) artista"}
                                />
                                <label>Novo endereço</label>
                                <input
                                    value={this.state.inputNovoUrl}
                                    onChange={this.handleNewUrl}
                                    placeholder={"URL da música"}
                                />
                            </div>
                            <ButtonContainer>
                                <Botao onClick={() => [this.addTrackToPlaylist(info.id), this.props.atualizarTrack(info.id)]}>
                                    Enviar
                                </Botao>
                                <Botao onClick={() => this.props.atualizarTrack(info.id)}>Atualizar</Botao>
                            </ButtonContainer>
                        </InsertSongContainer>
                    </HeaderContainer>
                );
            };
        });

        const songBox = this.props.allTracks.map((info) => {
            return (
                <MusicContainer>
                    <p>{info.name}</p>
                    <p>{info.artist}</p>
                    <div onClick={() => this.playSong(info.url)}>
                        <img src={playIcon}></img>
                    </div>
                    <DeleteButton
                        src={delIcon}
                        onClick={() => this.deleteTrackSong(this.props.idPlaylist, info.id)}>
                    </DeleteButton>
                </MusicContainer>
            );
        });

        return (
            <DetailContainer>
                {headerDetail}
                <div>
                    <h2><em>Soundtrack</em></h2>
                    <Scrollbars style={{ width: "100%", height: "80%" }}>
                        {songBox}
                    </Scrollbars>
                </div>
                <AudioBox>
                    <audio src={this.state.urlSong} autoplay="autoplay" controls></audio>
                </AudioBox>
            </DetailContainer>
        );
    }
}
export default DetailPage;