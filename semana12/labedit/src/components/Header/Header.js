import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledBar } from './styled';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';

const Header = (props) => {
  const history = useHistory();
  const { token } = props
  const { logoutButtonText, setLogoutButtonText } = props

  const logout = () => {
    localStorage.removeItem("token")
  }

  const logoutButtonAction = () => {
    if (token) {
      logout();
      setLogoutButtonText("");
      goToLogin(history);
      alert("Até a proxima! :)")
    }
    
  }

  return (
    <AppBar position="static">
      <StyledBar>
        <Button color="inherit">
          LabEdit
        </Button>
        <Button onClick={logoutButtonAction} color="inherit">{logoutButtonText}</Button>
      </StyledBar>
    </AppBar>
  );
}

export default Header;