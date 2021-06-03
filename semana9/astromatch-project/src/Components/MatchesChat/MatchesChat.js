import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CrushBox, CrushChatContainer, MatchesContainer, NavMatches, ShowMatches, ImageRestart } from './MatchesChatStyles';

function MatchesChat(props) {
    const [allMatches, setAllMatches] = useState([]);
    const [haveCrushes, setHaveCrushes] = useState(false);

    useEffect(() => {
        const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-paiva/matches";

        axios
            .get(baseURL)
            .then((res) => {
                setAllMatches(res.data.matches);
                setHaveCrushes(true);
            })
            .catch(() => {
                alert("Ops, algo errado ocorreu! Tente novamente! :)")
            });

    }, [haveCrushes])

    const clearMatches = () => {
        if (window.confirm("Tem certeza que deseja deletar seus crushes? :(")) {
            const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-paiva/clear"

            axios
                .put(baseURL)
                .then(() => {
                    setHaveCrushes(false);
                })
                .catch(() => {
                    alert("Ops, algo errado ocorreu! Tente novamente! :)")
                })
        }
    }

    const showMatches = allMatches.map((info) => {
        return (
            <CrushBox>
                <CrushChatContainer key={info.id}>
                    <img src={info.photo} alt={`imagem de ${info.name}`}></img>
                    <p>{info.name}</p>
                </CrushChatContainer>
            </CrushBox>
        )
    })

    return (
        <MatchesContainer>
            <NavMatches>
                <h3>Novos matches</h3>
                <ImageRestart onClick={clearMatches} src={props.restartCrushes} alt={"ícone de limpar matches"}></ImageRestart>
            </NavMatches>
            <ShowMatches>
                {showMatches} 
            </ShowMatches>       
        </MatchesContainer>
    );
};

export default MatchesChat;