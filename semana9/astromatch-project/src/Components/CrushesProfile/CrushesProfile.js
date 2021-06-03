import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PersonContainer, CrushContainer, PhotoProfile, InfoBox, MatchBox, NoMatchesContainer } from './CrushesProfileStyles'

function PersonProfile(props) {
    const [ crushesProfile, setCrushesProfile ] = useState({});
    const [ haveCrushes, setHaveCrushes ] = useState(false);

    useEffect(() => {
        captureCrush()
    }, [haveCrushes])

    const captureCrush = () => {
        const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-paiva/person"

        axios
            .get(baseURL)
            .then((res) => {
                setCrushesProfile(res.data.profile)
            })
            .catch(() => {
                alert("Ops, algo errado ocorreu! Tente novamente! :)")
            });
    };

    const postAndCaptureCrush = () => {
        const baseURLPost = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-paiva/choose-person"

        const body = {
            id: `${crushesProfile.id}`,
            choice: true
        }

        axios
            .post(baseURLPost, body)
            .then((res) => {
                if (res.data.isMatch) {
                    alert("Você tem um novo match! :)")
                }
            })
            .catch(() => {
                alert("Ops, algo errado ocorreu! Tente novamente! :)")
            })

        const baseURLGet = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-paiva/person"

        axios
            .get(baseURLGet)
            .then((res) => {
                setCrushesProfile(res.data.profile)
            })
            .catch(() => {
                alert("Ops, algo errado ocorreu! Tente novamente! :)")
            });
    }

    const clearMatches = () => {
        if (window.confirm("Tem certeza que deseja reiniciar crushes? :(")) {
            const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-silva-paiva/clear"

            axios
                .put(baseURL)
                .then(() => {
                    setHaveCrushes(!haveCrushes)
                })
                .catch(() => {
                    alert("Ops, algo errado ocorreu! Tente novamente! :)")
                })
        }
    }

    const renderCrushesProfile = () => {
        if (crushesProfile) {
            return (
                <CrushContainer >
                    <PhotoProfile photoProfile={crushesProfile.photo} />
                    <InfoBox>
                        <div>
                            <span>{crushesProfile.name}</span>
                            <span>{crushesProfile.age}</span>
                        </div>
                        <div>
                            <p>{crushesProfile.bio}</p>
                        </div>
                        <MatchBox>
                            <img src={props.dislike} alt={"ícone dislike"} onClick={captureCrush}></img>
                            <img src={props.like} alt={"ícone like"} onClick={postAndCaptureCrush}></img>
                        </MatchBox>
                    </InfoBox>
                </CrushContainer>
            )
        } else {
            return (
                <NoMatchesContainer>
                    <p>Acabaram os crushes :/<br />Atualize no botão abaixo</p>
                    <img src={props.refresh} alt={"ícone de refresh crushes"} onClick={clearMatches}></img>
                </NoMatchesContainer>
            )
        }
    }

    return (
        <PersonContainer>
            {renderCrushesProfile()}
        </PersonContainer>
    );
};

export default PersonProfile;