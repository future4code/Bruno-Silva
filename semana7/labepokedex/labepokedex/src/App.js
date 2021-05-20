import React from "react";
import axios from "axios";
import styled from "styled-components";
import pokedex from "./pokedex.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardContainer = styled.div`
  border: 1px solid black;
`
const BackImage = styled.img`
  width: 800px;
`

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    this.setState({ pokemons: response.data.results });
  };

  getPokePicture = async (event) => {
    const url = event.target.value;

    const response = await axios.get(`${url}`);
    this.setState({ picture: response.data.sprites.front_default });
  };

  render() {
    console.log(typeof this.state.pokemons);
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });

    return (
      <MainContainer>
        <h1>Pokemons</h1>
        <select onChange={this.getPokePicture}>
          <option>Selecione um pokemon</option>
          {pokeList}
        </select>
        <BackImage
          src={pokedex}
          alt={"imagem de pokedex"}
        />
        <CardContainer>
            {this.state.picture && (
              <img src={this.state.picture} alt={"foto do pokemon"}></img>
            )}
          </CardContainer>
      </MainContainer>
    );
  }
}
