import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminHome, goToListTrips } from '../../routes/Coordinator';

function HomePage() {
  const history = useHistory();

  return (
    <div>
      <h1>Bem-vindo à LabeX! :D</h1>
      <div>
        <button onClick={() => {goToListTrips(history)}}>Ver viagens</button>
        <button onClick={() => {goToAdminHome(history)}}>Área de Admin</button>
      </div>
    </div>
  );
};

export default HomePage;