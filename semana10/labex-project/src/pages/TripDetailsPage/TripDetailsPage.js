import React from 'react';
import { useHistory } from 'react-router-dom';

function TripDetailsPage() {
  const history = useHistory();

  const backToAdminHome = () => {
    history.goBack();
  };

  return (
    <div>
      <div>
        <h2>Informações detalhadas da viagem</h2>
      </div>
      <button onClick={backToAdminHome}>Voltar</button>
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