import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const goToListTrips = () => {
    history.push("/trips/list")
  }

  const goToLogin = () => {
    history.push("/login")
  }

  return (
    <div>
      <h1>Bem-vindo à LabeX! :D</h1>
      <div>
        <button onClick={goToListTrips}>Ver viagens</button>
        <button onClick={goToLogin}>Área de Admin</button>
      </div>
    </div>
  );
};

export default HomePage;