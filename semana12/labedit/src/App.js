import React from "react";
import Router from "./routes/Router";
import theme from './constants/theme';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalState>

  );
}

export default App;
