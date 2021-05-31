import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import delIcon from '../img/del-icon.svg';

const PlaylistBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 24px;
  }

  :hover {
    cursor: pointer;
    background-color: #C0C0C0;
    border-radius: 40px;
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
          <DeleteButton src={delIcon} onClick={() => this.deletePlayList(info.id)}></DeleteButton>
        </PlaylistBox>
      )
    })

    return (
      <div>
        <h2><em>Sua Biblioteca</em></h2>
        {playLists}
      </div>
    );
  }
}
export default Playlists;