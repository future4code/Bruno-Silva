import React from 'react';

function HomePage(props) {
  return (
    <div>
      <h1>Bem-vindo à LabeX! :D</h1>
      <div>
        <button onClick={props.listTrip}>Ver viagens</button>
        <button onClick={props.adminOrLogin}>Área de Admin</button>
      </div>
    </div>
  );
}

export default HomePage;