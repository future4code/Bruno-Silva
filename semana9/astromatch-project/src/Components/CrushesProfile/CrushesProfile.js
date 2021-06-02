import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PersonContainer, CrushContainer, PhotoProfile, InfoBox, MatchBox } from './CrushesProfileStyles'

function PersonProfile(props) {
    const [crushesProfile, setCrushesProfile] = useState({});

    useEffect(() => {
        captureCrush()
    }, [])

    const captureCrush = () => {
        const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/person"

        axios
            .get(baseURL)
            .then((res) => {
                setCrushesProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const postAndCaptureCrush = () => {
        const baseURLPost = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/choose-person"

        const body = {
            id: `${crushesProfile.id}`,
            choice: true
        }

        axios
            .post(baseURLPost, body)
            .then((res) => {
                if (res.data.isMatch) {
                    alert("Você tem um novo match!")
                }
            })
            .catch((err) => {
                console.log(err)
            })

        const baseURLGet = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/person"

        axios
            .get(baseURLGet)
            .then((res) => {
                setCrushesProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const clearMatches = () => {
        if (window.confirm("Tem certeza que deseja deletar seus crushes? :(")) {
            const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/clear"

            axios
                .put(baseURL)
                .then(() => {
                    console.log("entrei");
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const renderCrushesProfile = () => {
        if (crushesProfile !== null) {
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
                <div>
                    <p>Não tem mais crushes :/</p>
                    <button onClick={clearMatches}>Resetar</button>
                </div>
            )
        }
    }

    return (
        <PersonContainer>
            {/* <div style={`background-image: url(${crushesProfile.photo})`}> */}
            {renderCrushesProfile()}
        </PersonContainer>
    );
};

export default PersonProfile;