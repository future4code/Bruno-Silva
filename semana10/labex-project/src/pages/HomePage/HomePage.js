import React from 'react';
import { useHistory } from 'react-router-dom';

import { goToAdminHome, goToListTrips } from '../../routes/Coordinator';

import { AccessContainer, CoordinatorButton } from '../../GlobalStyles';
import { LogoContainer, NavContainer } from './HomePageStyles';

import logo from '../../img/logo-labex.svg';

function HomePage() {
  const history = useHistory();

  return (
    <AccessContainer>
      <LogoContainer>
        <img src={logo} alt={"logo da LabeX"}></img>
        <h1>BEM-VINDO À LABEX! :D</h1>
      </LogoContainer>
      <NavContainer>
        <CoordinatorButton onClick={() => { goToListTrips(history) }}>Ver viagens</CoordinatorButton>
        <CoordinatorButton onClick={() => { goToAdminHome(history) }}>Área de Admin</CoordinatorButton>
      </NavContainer>
    </AccessContainer>
  );
};

export default HomePage;