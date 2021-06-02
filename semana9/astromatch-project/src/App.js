import React from 'react';
import styled from 'styled-components';
import ScreenContainer from './Components/ScreenContainer/ScreenContainer';
import contacts from './img/contacts.svg';
import msg from './img/msg.svg';
import profile from './img/profile.svg';
import like from './img/like.svg';
import dislike from './img/dislike.svg';
import restartCrushes from './img/restart-crushes.svg'

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <ScreenContainer 
        imgContacts={contacts}
        imgMsg={msg}
        imgProfile={profile}
        like={like}
        dislike={dislike}
        restartCrushes={restartCrushes}
      />
    </AppContainer>
  );
};

export default App;

