import React from 'react';

function TripDetailsPage(props) {
  return (
    <div>
      <div>
        <h2>Informações detalhadas da viagem</h2>
      </div>
      <button onClick={props.goToAdminPage}>Voltar</button>
      <div>
        <h3>Candidatos Pendentes</h3>
      </div>
      <div>
        <h3>Candidatos Aprovados</h3>
      </div>
    </div>
  );
}

export default TripDetailsPage;