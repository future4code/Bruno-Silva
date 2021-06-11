import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import useGetTripDetails from '../../hooks/useGetTripDetails';
import axios from 'axios';
import baseURL from '../../constants/baseURL';

function TripDetailsPage() {
  useProtectedPage();

  const tripId = localStorage.getItem("tripId");
  const history = useHistory();
  const tripDetails = useGetTripDetails(`${baseURL}/trip/${tripId}`, []);

  const backToAdminHome = () => {
    history.goBack();
    localStorage.removeItem("tripId");
  };

  const approvedOrNot = (candidateId, trueOrFalse) => {
    const url = `${baseURL}/trips/${tripId}/candidates/${candidateId}/decide`;
    
    const body = {
      approve: trueOrFalse
    };

    const header = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };

    axios
    .put(url, body, header)
    .then(() => {
      if (body.approve) {
        alert("Candidato aprovado com sucesso! :)");
      } else {
        alert ("Que pena! O candidato foi reprovado :(");
      }; 
    })
    .catch(() => {
      alert("Ops, ocorreu um erro! Tente novamente :)")
    });
  };

  const renderCandidates = tripDetails.candidates && tripDetails.candidates.map((info) => {
    return (
      <div key={info.id}>
        <p>Nome: {info.name}</p>
        <p>Profissão: {info.profession}</p>
        <p>Idade: {info.age}</p>
        <p>País: {info.country}</p>
        <p>Texto de candidatura: {info.applicationText}</p>
        <button onClick={() => {approvedOrNot(info.id, true)}}>Aprovar</button>
        <button onClick={() => {approvedOrNot(info.id, false)}}>Reprovar</button>
      </div>
    );
  });

  const renderApproved = tripDetails.approved && tripDetails.approved.map((info) => {
    return (
      <ul key={info.id}>
        <li>{info.name}</li>
      </ul>
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
        {renderApproved}
      </div>
    </div>
  );
}

export default TripDetailsPage;