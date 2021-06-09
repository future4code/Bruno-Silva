import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

import useGetAllTrips from '../../hooks/useGetAllTrips';
import useProtectedPage from '../../hooks/useProtectedPage';

function AdminHomePage() {
  useProtectedPage();

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToCreateTrip = () => {
    history.push("/admin/trips/create");
  };

  const backToLogin = () => {
    history.goBack();
    localStorage.removeItem("token");
  };

  const goToTripDetails = (id) => {
    localStorage.setItem("tripId", id);
    history.push(`/admin/trips/${id}`);
  };

  const deleteTrip = (id) => {
    if (window.confirm("Tem certeza que deseja deletar viagem?")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips/${id}`;

      const header = {
        headers: {
          auth: localStorage.getItem("token")
        }
      };

      axios
        .delete(url, header)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response.data)
        });
    };
  };

  const getTrips = useGetAllTrips("https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips", []);

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
      <button onClick={goToHome}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={backToLogin}>Logout</button>
      <h2>AdminHomePage</h2>
      {renderAllSimplifyTrips}
    </div>
  );
}

export default AdminHomePage;