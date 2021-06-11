import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import useGetTripDetails from '../../hooks/useGetTripDetails';
import { goToHome } from '../../routes/Coordinator';
import axios from 'axios';
import baseURL from '../../constants/baseURL';

import { TripDetailsContainer, HeaderDetailsContainer, LogoContainer, TripInfoBox, TripInfoContainer, CandidatesContainer, CandidatesBox, CardCandidateContainer, ApprovedContainer, ApprovedList } from './TripDetailsPageStyles';
import { CoordinatorButton } from '../../GlobalStyles';
import logo from '../../img/logo-labex.svg';

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
          window.location.reload();
        } else {
          alert("Que pena! O candidato foi reprovado :(");
        };
      })
      .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente :)")
      });
  };

  const renderCandidates = tripDetails.candidates && tripDetails.candidates.map((info) => {
    return (
      <CardCandidateContainer key={info.id}>
        <div>
          <p>Nome: {info.name}</p>
          <p>Profissão: {info.profession}</p>
          <p>Idade: {info.age}</p>
          <p>País: {info.country}</p>
          <p>Texto de candidatura: {info.applicationText}</p>
        </div>
        <div>
          <button onClick={() => { approvedOrNot(info.id, true) }}>Aprovar</button>
          <button onClick={() => { approvedOrNot(info.id, false) }}>Reprovar</button>
        </div>
      </CardCandidateContainer>
    );
  });

  const renderApproved = tripDetails.approved && tripDetails.approved.map((info) => {
    return (

      <li key={info.id}>{info.name}</li>
    );
});

return (
  <TripDetailsContainer>
    <HeaderDetailsContainer>
      <LogoContainer onClick={() => { goToHome(history) }}>
        <img src={logo} alt={"logo da LabeX"}></img>
        <h1><b><em>LabeX</em></b></h1>
      </LogoContainer>
      <CoordinatorButton onClick={backToAdminHome}>Voltar</CoordinatorButton>
    </HeaderDetailsContainer>
    <TripInfoContainer>
      <TripInfoBox>
        <h2>{tripDetails.name}</h2>
        <div>
          <p>Nome: {tripDetails.name}</p>
          <p>Descrição: {tripDetails.description}</p>
          <p>Planeta: {tripDetails.planet}</p>
          <p>Duração: {tripDetails.durationInDays}</p>
          <p>Data: {tripDetails.date}</p>
        </div>
      </TripInfoBox>
    </TripInfoContainer>
    <CandidatesContainer>
      <h3>CANDIDATOS PENDENTES</h3>
      <CandidatesBox>
        {renderCandidates}
      </CandidatesBox>
    </CandidatesContainer>
    <ApprovedContainer>
      <h3>CANDIDATOS APROVADOS</h3>
      <ApprovedList>
        {renderApproved}
      </ApprovedList>
    </ApprovedContainer>
  </TripDetailsContainer>
);
}

export default TripDetailsPage;