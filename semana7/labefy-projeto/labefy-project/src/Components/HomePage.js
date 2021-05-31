import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HomePageContainer = styled.div`
  background: linear-gradient(to bottom, #7e48e5 0%, #696969 100%);
  display: grid;
  grid-template-rows: 2fr 3fr 3fr;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardsListContainer = styled.div`
  padding-left: 16px;
  border-top: 1px solid darkgrey;
  border-bottom: 1px solid darkgrey;
  display: flex;
  flex-direction: column;
`

const CardContainer = styled.div`
  display: flex;
  text-align: center;
`
const EachCard = styled.div`
  margin: 16px;
  background-color: darkgrey;
  box-shadow: 5px 5px 5px grey;

  :hover {
    cursor:pointer;
    background-color: #1DB954;
  }

  img {
    height: 160px;
  }
`

const CardSugestionsContainer = styled.div`
  padding-left: 16px;
  display: flex;
`

class HomePage extends React.Component {
  state = {
    allPlaylists: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

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

  }

  render() {
    const renderizaPlaylists = this.state.allPlaylists.map((info) => {
      return (
        <EachCard onClick={() => this.props.detailPage(info.id)} key={info.id}>
          <img src={"https://picsum.photos/200/300"} />
          <p>{info.name}</p>
        </EachCard>
      )
    });

    return (
      <HomePageContainer>
        <HeaderContainer>
          <h2>Música mais tocada</h2>
          <p>nome da música e botão para tocar</p>
        </HeaderContainer>
        <CardsListContainer>
          <h2>Suas Playlists</h2>
          <CardContainer>
            {renderizaPlaylists}
          </CardContainer>
        </CardsListContainer>
        <CardSugestionsContainer>
          <h2>Sugestão de Playlists</h2>
        </CardSugestionsContainer>
      </HomePageContainer>
    );
  }
}
export default HomePage;