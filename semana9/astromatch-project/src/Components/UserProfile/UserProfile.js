import React from 'react';
import { UserProfileContainer, ProfileImageContainer, SettingsContainer } from './UserProfileStyles';

function UserProfile(props) {
    return (
        <UserProfileContainer>
            <ProfileImageContainer>
                <img src={props.cheshire} alt={"imagem do gato cheshire"}></img>
                <p>UserName</p>
            </ProfileImageContainer>
            <SettingsContainer>
                <div>
                    <img src={props.settings} alt={"ícone de configurações"}></img>
                    <p>Configurações</p>
                </div>
                <div>
                    <img src={props.addMidia} alt={"ícone de mídia"}></img>
                    <p>Adicionar mídia</p>
                </div>
                <div>
                    <img src={props.editInfo} alt={"ícone de edição de informações"}></img>
                    <p>Editar informações</p>
                </div>
            </SettingsContainer>
        </UserProfileContainer>
    );
};

export default UserProfile;