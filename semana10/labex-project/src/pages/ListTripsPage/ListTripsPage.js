import React from 'react';
import { useHistory } from 'react-router-dom';

import useGetAllTrips from '../../hooks/useGetAllTrips'
import { CardTripContainer } from './ListTripsPageStyles';

function ListTripsPage() {
  const history = useHistory();

  const backToHome = () => {
    history.goBack();
  };

  const goToAppForm = () => {
    history.push("/trips/application");
  };

  const getTrips = useGetAllTrips("https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips", []);
  
  const renderAllTrips = getTrips && getTrips.map((info) => {
    return (
      <CardTripContainer>
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
        <button onClick={backToHome}>Voltar</button>
        <button onClick={goToAppForm}>Inscrever-se</button>
      </div>
      <div>
        <h2>ListTripsPage</h2>
        {renderAllTrips}
      </div>
    </div>
  );
};

export default ListTripsPage;