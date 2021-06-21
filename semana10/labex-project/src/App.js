import React from 'react';
import Router from './routes/Router';
import { AppContainer, GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      {Router()}
    </AppContainer>
  );
}

export default App;