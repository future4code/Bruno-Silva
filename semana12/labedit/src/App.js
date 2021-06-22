import React, { useState } from "react";
import Router from "./routes/Router";
import theme from './constants/theme';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const token = localStorage.getItem("token");
  const [logoutButtonText, setLogoutButtonText] = useState(token ? "Logout" : "");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header token={token} logoutButtonText={logoutButtonText} setLogoutButtonText={setLogoutButtonText}/>
        <Router setLogoutButtonText={setLogoutButtonText}/>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
