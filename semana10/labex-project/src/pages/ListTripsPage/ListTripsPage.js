import React from 'react';
import { useHistory } from 'react-router-dom';
import { previousPage, goToAppForm } from '../../routes/Coordinator';

import useGetAllTrips from '../../hooks/useGetAllTrips';
import baseURL from '../../constants/baseURL';
import { CardTripContainer } from './ListTripsPageStyles';

function ListTripsPage() {
  const history = useHistory();

  const getTrips = useGetAllTrips(`${baseURL}/trips`, []);
  
  const renderAllTrips = getTrips && getTrips.map((info) => {
    return (
      <CardTripContainer key={info.id}>
        <p>Nome: {info.name}</p>
        <p>Descrição: {info.description}</p>
        <p>Planeta: {info.planet}</p>
        <p>Duração: {info.durationInDays}</p>
        <p>Data: {info.date}</p>
      </CardTripContainer>
    );
  });

  return (
    <div>
      <div>
        <button onClick={() => {previousPage(history)}}>Voltar</button>
        <button onClick={() => {goToAppForm(history)}}>Inscrever-se</button>
      </div>
      <div>
        <h2>ListTripsPage</h2>
        {renderAllTrips}
      </div>
    </div>
  );
};

export default ListTripsPage;