import React from 'react';
import { useHistory } from 'react-router-dom';

function ListTripsPage() {
  const history = useHistory();

  const backToHome = () => {
    history.goBack();
  };

  const goToAppForm = () => {
    history.push("/trips/application");
  };

  return (
    <div>
      <button onClick={backToHome}>Voltar</button>
      <button onClick={goToAppForm}>Inscrever-se</button>
      <h2>ListTripsPage</h2>
    </div>
  );
};

export default ListTripsPage;