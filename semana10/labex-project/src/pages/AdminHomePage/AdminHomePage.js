import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

import useGetAllTrips from '../../hooks/useGetAllTrips';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goToCreateTrip, goToHome } from '../../routes/Coordinator';
import baseURL from '../../constants/baseURL';

function AdminHomePage() {
  useProtectedPage();

  const history = useHistory();

  const logoutAdmin = () => {
    alert("Até a próxima! :)");
    history.goBack();
    localStorage.removeItem("token");
  };

  const goToTripDetails = (id) => {
    localStorage.setItem("tripId", id);
    history.push(`/admin/trips/${id}`);
  };

  const deleteTrip = (id) => {
    if (window.confirm("Tem certeza que deseja deletar viagem?")) {
      const url = `${baseURL}/trips/${id}`;

      const header = {
        headers: {
          auth: localStorage.getItem("token")
        }
      };

      axios
        .delete(url, header)
        .then(() => {
          alert("Viagem deletada com sucesso! :)")
          window.location.reload();
        })
        .catch(() => {
          alert("Ops, ocorreu um erro! Tente novamente :)")
        });
    };
  };

  const getTrips = useGetAllTrips(`${baseURL}/trips`, []);

  const renderAllSimplifyTrips = getTrips && getTrips.map((info) => {
    return (
      <div key={info.id}>
        <p onClick={() => { goToTripDetails(info.id) }}>{info.name}</p>
        <button onClick={() => { deleteTrip(info.id) }}>deletar</button>
      </div>
    );
  });

  return (
    <div>
      <button onClick={() => {goToHome(history)}}>Voltar</button>
      <button onClick={() => {goToCreateTrip(history)}}>Criar Viagem</button>
      <button onClick={logoutAdmin}>Logout</button>
      <h2>AdminHomePage</h2>
      {renderAllSimplifyTrips}
    </div>
  );
}

export default AdminHomePage;