import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledBar, TitleName } from './styled';
import { useHistory } from 'react-router-dom';
import { goToLogin, previousPage } from '../../routes/coordinator';

const Header = (props) => {
  const history = useHistory();
  const { logoutButtonText, setLogoutButtonText } = props

  const logout = () => {
    localStorage.removeItem("token")
  }

  const logoutButtonAction = () => {
    if (localStorage.getItem("token")) {
      logout();
      setLogoutButtonText("");
      goToLogin(history);
      alert("Até a proxima! :)")
    } else {
      goToLogin(history);
    };
  };

  return (
    <AppBar position="static">
      <StyledBar>
        <div></div>
        <TitleName onClick={() => {previousPage(history)}}>
          <span>La</span><span>bEd</span><span>it</span>
        </TitleName>
        <Button onClick={logoutButtonAction} color={"inherit"}>{logoutButtonText}</Button>
      </StyledBar>
    </AppBar>
  );
}

export default Header;