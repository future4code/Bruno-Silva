import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageRestart, CrushChatContainer } from './styles';

function MatchesChat(props) {
    const [allMatches, setAllMatches] = useState([]);
    const [haveCrushes, setHaveCrushes] = useState(false);

    useEffect(() => {
        const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/matches";

        axios
            .get(baseURL)
            .then((res) => {
                setAllMatches(res.data.matches);
                setHaveCrushes(true);
            })
            .catch((err) => {
                console.log(err)
            });

    }, [haveCrushes])

    const clearMatches = () => {
        if (window.confirm("Tem certeza que deseja deletar seus crushes? :(")) {
            const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/clear"

            axios
                .put(baseURL)
                .then(() => {
                    setHaveCrushes(false);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const showMatches = allMatches.map((info) => {
        return (
            <CrushChatContainer key={info.id}>
                <img src={info.photo} alt={"imagem do crush"}></img>
                <p>{info.name}</p>
            </CrushChatContainer>
        )
    })

    return (
        <div>
            {showMatches}
            <ImageRestart onClick={clearMatches} src={props.restartCrushes} alt={"ícone de limpar matches"}></ImageRestart>
        </div>
    );
};

export default MatchesChat;