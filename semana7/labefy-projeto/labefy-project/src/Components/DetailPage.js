import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';

class DetailPage extends React.Component {
    state = {
        allPlaylists: []
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

    render() {
        const texto = this.state.allPlaylists.map((info) => {
            if (info.id === this.props.idPlaylist) {
                return (
                    <h2>{info.name}</h2>
                );
            };
        });

        const x = this.props.allTracks.map((info) => {
            return (
                <div>
                    <p>{info.name}</p>
                    <p>{info.artist}</p>
                    <audio src={info.url} controls></audio>
                </div>
            );
        });

        return (
            <div>
                {texto}
                {x}
            </div>
        );
    }
}
export default DetailPage;