import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import useGetTripDetails from '../../hooks/useGetTripDetails';

function TripDetailsPage() {
  useProtectedPage();

  const tripId = localStorage.getItem("tripId");
  const history = useHistory();
  const tripDetails = useGetTripDetails(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trip/${tripId}`, []);

  const backToAdminHome = () => {
    history.goBack();
    localStorage.removeItem("tripId");
  };

  const renderCandidates = tripDetails.candidates && tripDetails.candidates.map((info) => {
    return (
      <div key={info.id}>
        <p>Nome: {info.name}</p>
        <p>Profissão: {info.profession}</p>
        <p>Idade: {info.age}</p>
        <p>País: {info.country}</p>
        <p>Texto de candidatura: {info.applicationText}</p>
        <button>Aprovar</button>
        <button>Reprovar</button>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h2>{tripDetails.name}</h2>
        <div>
          <p>Nome: {tripDetails.name}</p>
          <p>Descrição: {tripDetails.description}</p>
          <p>Planeta: {tripDetails.planet}</p>
          <p>Duração: {tripDetails.durationInDays}</p>
          <p>Data: {tripDetails.date}</p>
        </div>
      </div>
      <button onClick={backToAdminHome}>Voltar</button>
      <div>
        <h3>Candidatos Pendentes</h3>
        {renderCandidates}
      </div>
      <div>
        <h3>Candidatos Aprovados</h3>
      </div>
    </div>
  );
}

export default TripDetailsPage;