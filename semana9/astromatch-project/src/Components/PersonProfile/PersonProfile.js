import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PersonContainer, CrushContainer, MatchBox } from './styles'

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
                    alert("Parabéns, você tem um novo match!")
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

    return (
        <PersonContainer>
            {/* <div style={`background-image: url(${crushesProfile.photo})`}> */}
            <CrushContainer>
                <img src={crushesProfile.photo} alt={"imagem do crush"}></img>
                <p>{crushesProfile.name}</p>
                <p>{crushesProfile.age}</p>
                <p>{crushesProfile.bio}</p>
            </CrushContainer>
            <MatchBox>
                <img src={props.dislike} alt={"ícone dislike"} onClick={captureCrush}></img>
                <img src={props.like} alt={"ícone like"} onClick={postAndCaptureCrush}></img>
            </MatchBox>
        </PersonContainer>
    );
};

export default PersonProfile;