import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledBar, LogoContainer } from './styled';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';
import GlobalStateContext from '../../global/GlobalStateContext';
import logo from '../../assets/logo.svg';

const Header = () => {
  const history = useHistory();
  const { logoutButtonText, setLogoutButtonText } = useContext(GlobalStateContext)

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("postId")
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
        <LogoContainer onClick={() => { goToLogin(history) }}>
          <img src={logo} alt={"logo da LabeDit"} />
          <div>
            <span>La</span><span>BeD</span><span>iT</span>
          </div>
        </LogoContainer>
        <Button onClick={logoutButtonAction} color={"inherit"}>{logoutButtonText}</Button>
      </StyledBar>
    </AppBar>
  );
}

export default Header;