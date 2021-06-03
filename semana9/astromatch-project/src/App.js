import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import ScreenContainer from './Components/ScreenContainer/ScreenContainer';
import contacts from './img/contacts.svg';
import msg from './img/msg.svg';
import profile from './img/profile.svg';
import like from './img/like.svg';
import dislike from './img/dislike.svg';
import restartCrushes from './img/restart-crushes.svg';
import refresh from './img/refresh.svg';
import settings from './img/settings.svg';
import editInfo from './img/edit-info.svg';
import addMidia from './img/add-midia.svg';
import cheshire from './img/cheshire.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin: 0;
  }
`

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle />      
      <ScreenContainer 
        imgContacts={contacts}
        imgMsg={msg}
        imgProfile={profile}
        like={like}
        dislike={dislike}
        restartCrushes={restartCrushes}
        refresh={refresh}
        settings={settings}
        editInfo={editInfo}
        addMidia={addMidia}
        cheshire={cheshire}
      />
    </AppContainer>
  );
};

export default App;

