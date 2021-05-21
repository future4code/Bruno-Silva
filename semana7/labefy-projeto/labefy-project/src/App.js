import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import SearchTable from './Components/SearchTable';
import Playlists from './Components/Playlists';
import HomePage from './Components/HomePage';
import CreatePlaylistPage from './Components/CreatePlaylistPage';
import DetailPage from './Components/DetailPage';
import ConnectionBox from './Components/ConnectionBox';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-color: black;
    color: white;
  }
`

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`

const SectionContainer = styled.div`
  background-color: red;
`

class App extends React.Component {
  state = {
    paginaExibicao: "inicio",
    allTracks: [],
    idPlaylist: ""
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
      .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente! :(")
      })
  }

  renderizaCentroPagina = () => {
    switch (this.state.paginaExibicao) {
      case "inicio":
        return <HomePage />;
      case "cria-lista":
        return <CreatePlaylistPage />
      case "detalhes":
        return (
          <DetailPage
            idPlaylist={this.state.idPlaylist}
            allTracks={this.state.allTracks}
          />
        );
      default:
        return;
    }
  }

  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <SectionContainer>
          <SearchTable
            criaLista={this.criaLista}
            irParaHomePage={this.irParaHomePage}
          />
          <hr />
          <Playlists
            detailPage={this.getPlaylistTracks}
          />
        </SectionContainer>
        {this.renderizaCentroPagina()}
        <ConnectionBox />
      </AppContainer>
    );
  }
}
export default App;