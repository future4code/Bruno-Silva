import React from 'react';
import { useHistory } from 'react-router-dom';

import useGetAllTrips from '../../hooks/useGetAllTrips'

function AdminHomePage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToCreateTrip = () => {
    history.push("/admin/trips/create");
  };

  const backToLogin = () => {
    history.goBack();
  };

  const goToTripDetails = (id) => {
    history.push(`/admin/trips/${id}`);
  };

  const getTrips = useGetAllTrips("https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips", []);

  const renderAllSimplifyTrips = getTrips && getTrips.map((info) => {
    return (
      <div onClick={() => {goToTripDetails(info.id)}}>
        <p>{info.name}</p>
        <button>deletar</button>
      </div>
    );
  });

  return (
    <div>
      <button onClick={goToHome}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={backToLogin}>Logout</button>
      <h2>AdminHomePage</h2>
      {renderAllSimplifyTrips}
    </div>
  );
}

export default AdminHomePage;