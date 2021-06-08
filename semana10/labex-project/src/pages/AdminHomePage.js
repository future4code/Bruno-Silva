import React from 'react';
import { useHistory } from 'react-router-dom';

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

    const goToTripDetails = () => {
      history.push("/admin/trips/:id");
    };

    return (
    <div>
      <button onClick={goToHome}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={backToLogin}>Logout</button>
      <h2>AdminHomePage</h2>
      <div onClick={goToTripDetails}>Cards</div>
    </div>
  );
}

export default AdminHomePage;