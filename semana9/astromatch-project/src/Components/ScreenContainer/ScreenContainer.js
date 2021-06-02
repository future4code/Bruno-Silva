import React, { useState } from 'react';
import { MatchContainer, NavContainer } from './styles';
import PersonProfile from '../PersonProfile/PersonProfile';
import MatchesChat from '../MatchesChat/MatchesChat';
import UserProfile from '../UserProfile/UserProfile';

function ScreenContainer(props) {
    const [changeSection, setChangeSection] = useState("crushes");

    const changeToMatches = () => {
        setChangeSection("crushes");
    };

    const changeToChat = () => {
        setChangeSection("chat");
    };

    const changeToProfile= () => {
        setChangeSection("user-profile");
    };

    const renderMainContainer = () => {
        switch (changeSection) {
            case "crushes":
                return (
                <PersonProfile 
                    like={props.like}
                    dislike={props.dislike}
                />);
            case "chat":
                return (
                <MatchesChat 
                    restartCrushes={props.restartCrushes}
                />);
            case "user-profile":
                return (<UserProfile />);
            default:
                return;
    }};

    return(
        <MatchContainer>
            {renderMainContainer()}
            <NavContainer>
                <img src={props.imgContacts} alt={"ícone novos crushes"} onClick={changeToMatches}></img>
                <img src={props.imgMsg} alt={"ícone chat de matches"} onClick={changeToChat}></img>
                <img src={props.imgProfile} alt={"ícone perfil do usuário"} onClick={changeToProfile}></img>
            </NavContainer>
        </MatchContainer>
    );
};

export default ScreenContainer;