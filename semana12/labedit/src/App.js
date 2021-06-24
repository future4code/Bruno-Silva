import React, { useState } from "react";
import Router from "./routes/Router";
import theme from './constants/theme';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalState } from "./global/GlobalState";

const App = () => {
  const token = localStorage.getItem("token");
  const [logoutButtonText, setLogoutButtonText] = useState(token ? "Logout" : "Login");

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header logoutButtonText={logoutButtonText} setLogoutButtonText={setLogoutButtonText} />
          <Router setLogoutButtonText={setLogoutButtonText} />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalState>

  );
}

export default App;
