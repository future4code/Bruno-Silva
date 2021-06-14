import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { previousPage, goToAppForm, goToHome } from '../../routes/Coordinator';
import useGetAllTrips from '../../hooks/useGetAllTrips';
import baseURL from '../../constants/baseURL';

import { CoordinatorButton } from '../../GlobalStyles';
import { TripsContainer, HeaderContainer, LogoContainer, SectionTripsContainer, ListTripsContainer, CardTripContainer } from './ListTripsPageStyles';

import logo from '../../img/logo-labex.svg';

function ListTripsPage() {
  const history = useHistory();

  useEffect(() => {
    document.title="Trip Lists";
  }, [])

  const getTrips = useGetAllTrips(`${baseURL}/trips`, []);

  const renderAllTrips = getTrips && getTrips.map((info) => {
    return (
      <CardTripContainer key={info.id}>
        <p><b>Nome:</b> {info.name}</p>
        <p><b>Descrição:</b> {info.description}</p>
        <p><b>Planeta:</b> {info.planet}</p>
        <p><b>Duração:</b> {info.durationInDays}</p>
        <p><b>Data:</b> {info.date}</p>
      </CardTripContainer>
    );
  });

  return (
    <TripsContainer>
      <HeaderContainer>
        <LogoContainer onClick={() => { goToHome(history) }}>
          <img src={logo} alt={"logo da LabeX"}></img>
          <h1><b><em>LabeX</em></b></h1>
        </LogoContainer>
        <div>
          <CoordinatorButton onClick={() => { previousPage(history) }}>Voltar</CoordinatorButton>
          <CoordinatorButton onClick={() => { goToAppForm(history) }}>Inscrever-se</CoordinatorButton>
        </div>
      </HeaderContainer>
      <SectionTripsContainer>
        <h1>LISTA DE VIAGENS</h1>
        <Scrollbars>
          <ListTripsContainer>
            {renderAllTrips}
          </ListTripsContainer>
        </Scrollbars>
      </SectionTripsContainer>
    </TripsContainer>
  );
};

export default ListTripsPage;