import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PlaylistBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  :hover {
    cursor: pointer;
    color: #7ca72a;
  }
`

class Playlists extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  componentDidUpdate() {
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
        this.setState({ playlists: res.data.result.list })
      })
      .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente! :(")
      })

  }

  deletePlayList = (id) => {
    if (window.confirm("Tem certeza que deseja remover esta playlist?")) {
      const urlAddress = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

      const header = {
        headers: {
          Authorization: "bruno-silva-paiva"
        }
      }

      axios
        .delete(urlAddress, header)
        .then((res) => {
          alert("Playlist removida com sucesso! :)")
          this.getAllPlaylists()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  render() {
    const playLists = this.state.playlists.map((info) => {
      return (
        <PlaylistBox key={info.id}>
          <p onClick={() => this.props.detailPage(info.id)}>{info.name}</p>
          <button onClick={() => this.deletePlayList(info.id)}>x</button>
        </PlaylistBox>
      )
    })

    return (
      <div>
        <h2>Sua Biblioteca</h2>
        {playLists}
      </div>
    );
  }
}
export default Playlists;