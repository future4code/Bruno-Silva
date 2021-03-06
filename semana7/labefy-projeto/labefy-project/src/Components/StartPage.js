import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import SearchTable from './SearchTable';
import Playlists from './Playlists';
import HomePage from './HomePage';
import CreatePlaylistPage from './CreatePlaylistPage';
import DetailPage from './DetailPage';
import ConnectionBox from './ConnectionBox';
import SearchPage from './SearchPage';

const StartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100vh;
  color: white;
`

const SectionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  background-color: #111;
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
`

const Lists = styled.div`
  display: flex; 
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid darkgrey;
`

class StartPage extends React.Component {
    state = {
        paginaExibicao: "inicio",
        allTracks: [],
        idPlaylist: "",
        resultadoPesquisa: []
    }

    componentDidMount() {
        alert(`Seja bem-vindo, ${this.props.user}!`)
    }

    irParaHomePage = () => {
        this.setState({ paginaExibicao: "inicio" });
    }

    criaLista = () => {
        this.setState({ paginaExibicao: "cria-lista" })
    }

    getPlaylistTracks = (id) => {
        this.setState({ paginaExibicao: "detalhes", idPlaylist: id });

        const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        }

        axios
            .get(urlAddress, header)
            .then((res) => {
                this.setState({ allTracks: res.data.result.tracks })
            })
            .catch((err) => {
                alert("Ops, ocorreu um erro! Tente novamente! :(")
            })
    }

    buscaPlaylist = (busca) => {
        const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${busca}`

        const header = {
            headers: {
                Authorization: "bruno-silva-paiva"
            }
        }

        axios
            .get(urlAddress, header)
            .then((res) => {
                this.setState({ paginaExibicao: "pesquisa", resultadoPesquisa: res.data.result.playlist });
            })
            .catch(() => {
                alert("Ops, um erro ocorreu! Tente novamente :(")
            })
    }

    renderizaCentroPagina = () => {
        switch (this.state.paginaExibicao) {
            case "inicio":
                return (
                    <HomePage 
                        detailPage={this.getPlaylistTracks}
                    />
                );
            case "cria-lista":
                return <CreatePlaylistPage />
            case "detalhes":
                return (
                    <DetailPage
                        key={this.state.idPlaylist}
                        idPlaylist={this.state.idPlaylist}
                        allTracks={this.state.allTracks}
                        atualizarTrack={this.getPlaylistTracks}
                    />
                );
            case "pesquisa":
                return (
                    <SearchPage 
                        resultadoPesquisa={this.state.resultadoPesquisa}
                        detailPage={this.getPlaylistTracks}
                    />
                );
            default:
                return;
        }
    }

    render() {
        console.log(this.state.resultadoPesquisa)
        return (
            <StartContainer>
                <SectionContainer>
                    <SearchContainer>
                        <SearchTable
                            criaLista={this.criaLista}
                            irParaHomePage={this.irParaHomePage}
                            user={this.props.user}
                            logout={this.props.logout}
                            buscaPlaylist={this.buscaPlaylist}
                        />
                    </SearchContainer>
                    <Scrollbars style={{ width: "100%", height: "100%" }}>
                        <Lists>
                            <Playlists
                                detailPage={this.getPlaylistTracks}
                            />
                        </Lists>
                    </Scrollbars>
                </SectionContainer>
                {this.renderizaCentroPagina()}
                <ConnectionBox />
            </StartContainer>
        );
    }
}
export default StartPage;