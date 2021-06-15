import React, { useState } from 'react';
import { MatchContainer, NavContainer } from './ScreenContainerStyles';
import CrushesProfile from '../CrushesProfile/CrushesProfile';
import MatchesChat from '../MatchesChat/MatchesChat';
import UserProfile from '../UserProfile/UserProfile';
import HeaderContainer from '../HeaderContainer/HeaderContainer';

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
                <CrushesProfile 
                    like={props.like}
                    dislike={props.dislike}
                    refresh={props.refresh}
                />);
            case "chat":
                return (
                <MatchesChat 
                    restartCrushes={props.restartCrushes}
                />);
            case "user-profile":
                return (
                <UserProfile 
                    settings={props.settings}
                    editInfo={props.editInfo}
                    addMidia={props.addMidia}
                    cheshire={props.cheshire}
                />);
            default:
                return;
    }};

    return(
        <MatchContainer>
            <HeaderContainer />
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