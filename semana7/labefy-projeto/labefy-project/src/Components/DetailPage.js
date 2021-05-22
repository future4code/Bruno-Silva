import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

const DetailContainer = styled.div`
    background: linear-gradient(to bottom, #b0e0e6 0%, #696969 100%);
    display: grid;
    grid-template-rows: 3fr 6fr 1fr;
    height: 100vh;

    div h3 {
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
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 0 16px;
    }
    
    button {
        margin: 16px 0;
    }
`

const MusicContainer = styled.div`
    margin: 16px 0;
    display: flex;
    justify-content: space-evenly;
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
        console.log(id)
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
        const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idSong}`

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        }

        axios
            .delete(urlAddress, header)
            .then((res) => {
                console.log("entrei aqui")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const headerDetail = this.state.allPlaylists.map((info) => {
            if (info.id === this.props.idPlaylist) {
                return (
                    <HeaderContainer>
                        <h1>{info.name}</h1>
                        <InsertSongContainer>
                            <label>Nova música</label>
                            <input
                                value={this.state.inputNovaMusica}
                                onChange={this.handleNewSong}
                                placeholder={"digite o nome da música"}
                            />
                            <label>Novo artista</label>
                            <input
                                value={this.state.inputNovoArtista}
                                onChange={this.handleNewArtist}
                                placeholder={"digite o nome do(a) artista"}
                            />
                            <label>Novo endereço</label>
                            <input
                                value={this.state.inputNovoUrl}
                                onChange={this.handleNewUrl}
                                placeholder={"digite o endereço da música"}
                            />
                            <button
                                onClick={() => {
                                    this.addTrackToPlaylist(info.id);
                                    this.props.teste(info.id)
                                }}>
                                Enviar
                            </button>
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
                    <button onClick={() => this.playSong(info.url)}>play</button>
                    <button onClick={() => this.deleteTrackSong(this.props.idPlaylist, info.id)}>x</button>
                </MusicContainer>
            );
        });

        return (
            <DetailContainer>
                {headerDetail}
                <div>
                    <h3>Soundtrack</h3>
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