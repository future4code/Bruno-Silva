import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { goToHome } from '../../routes/Coordinator';
import useGetTripDetails from '../../hooks/useGetTripDetails';
import useProtectedPage from '../../hooks/useProtectedPage';
import baseURL from '../../constants/baseURL';

import { CoordinatorButton } from '../../GlobalStyles';
import { TripDetailsContainer, HeaderDetailsContainer, LogoContainer, TripInfoBox, TripInfoContainer, CandidatesContainer, CandidatesBox, CardCandidateContainer, ApprovedContainer, ApprovedList, ApprovedOrNoTButton } from './TripDetailsPageStyles';

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
          window.location.reload();
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
          <p><b>Nome: </b>{info.name}</p>
          <p><b>Profissão: </b> {info.profession}</p>
          <p><b>Idade: </b> {info.age}</p>
          <p><b>País: </b> {info.country}</p>
          <p><b>Texto de candidatura: </b> {info.applicationText}</p>
        </div>
        <div>
          <ApprovedOrNoTButton onClick={() => { approvedOrNot(info.id, true) }}>Aprovar</ApprovedOrNoTButton>
          <ApprovedOrNoTButton onClick={() => { approvedOrNot(info.id, false) }}>Reprovar</ApprovedOrNoTButton>
        </div>
      </CardCandidateContainer>
    );
  });

  const renderApproved = tripDetails.approved && tripDetails.approved.map((info) => {
    return (
      <ApprovedList key={info.id}>
        <Scrollbars>
          <li>{info.name}</li>
        </Scrollbars>
      </ApprovedList>

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
            <p><b>Nome: </b>{tripDetails.name}</p>
            <p><b>Descrição: </b>{tripDetails.description}</p>
            <p><b>Planeta: </b>{tripDetails.planet}</p>
            <p><b>Duração: </b>{tripDetails.durationInDays}</p>
            <p><b>Data: </b>{tripDetails.date}</p>
          </div>
        </TripInfoBox>
      </TripInfoContainer>
      <CandidatesContainer>
        <h3>CANDIDATOS PENDENTES</h3>
        <Scrollbars>
          <CandidatesBox>
            {renderCandidates}
          </CandidatesBox>
        </Scrollbars>
      </CandidatesContainer>
      <ApprovedContainer>
        <h3>CANDIDATOS APROVADOS</h3>
        {renderApproved}
      </ApprovedContainer>
    </TripDetailsContainer>
  );
}

export default TripDetailsPage;