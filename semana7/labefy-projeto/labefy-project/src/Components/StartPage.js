import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import SearchTable from './SearchTable';
import Playlists from './Playlists';
import HomePage from './HomePage';
import CreatePlaylistPage from './CreatePlaylistPage';
import DetailPage from './DetailPage';
import ConnectionBox from './ConnectionBox';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    color: white;
  }
`

const StartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100vh;
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
`

class StartPage extends React.Component {
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
            teste={this.getPlaylistTracks}
          />
        );
      default:
        return;
    }
  }

  render() {
    return (
      <StartContainer>
        <GlobalStyle />
        <SectionContainer>
          <SearchContainer>
            <SearchTable
              criaLista={this.criaLista}
              irParaHomePage={this.irParaHomePage}
              user={this.props.user}
              logout={this.props.logout}
            />
          </SearchContainer>
          <Lists>
            <Playlists
              detailPage={this.getPlaylistTracks}
            />
          </Lists>
        </SectionContainer>
        {this.renderizaCentroPagina()}
        <ConnectionBox />
      </StartContainer>
    );
  }
}
export default StartPage;