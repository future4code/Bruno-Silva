import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { goToCreateTrip, goToHome } from '../../routes/Coordinator';
import useGetAllTrips from '../../hooks/useGetAllTrips';
import useProtectedPage from '../../hooks/useProtectedPage';
import baseURL from '../../constants/baseURL';

import { CoordinatorButton } from '../../GlobalStyles';
import { AdminContainer, HeaderAdminContainer, LogoContainer, SectionSimplifyTripsContainer, ListSimplifyTripsContainer, TripsDetailContainer } from './AdminHomePageStyles';

import logo from '../../img/logo-labex.svg';
import deleteIcon from '../../img/delete-icon.svg';

function AdminHomePage() {
  useProtectedPage();

  const history = useHistory();

  const logoutAdmin = () => {
    alert("Até a próxima! :)");
    history.push("/");
    localStorage.removeItem("token");
  };

  const goToTripDetails = (id) => {
    localStorage.setItem("tripId", id);
    history.push(`/admin/trips/${id}`);
  };

  const deleteTrip = (id) => {
    if (window.confirm("Tem certeza que deseja deletar viagem?")) {
      const url = `${baseURL}/trips/${id}`;

      const header = {
        headers: {
          auth: localStorage.getItem("token")
        }
      };

      axios
        .delete(url, header)
        .then(() => {
          alert("Viagem deletada com sucesso! :)")
          window.location.reload();
        })
        .catch(() => {
          alert("Ops, ocorreu um erro! Tente novamente :)")
        });
    };
  };

  const getTrips = useGetAllTrips(`${baseURL}/trips`, []);

  const renderAllSimplifyTrips = getTrips && getTrips.map((info) => {
    return (
      <TripsDetailContainer key={info.id}>
        <p onClick={() => { goToTripDetails(info.id) }}>{info.name}</p>
        <img src={deleteIcon} onClick={() => { deleteTrip(info.id) }}></img>
      </TripsDetailContainer>
    );
  });

  return (
    <AdminContainer>
      <HeaderAdminContainer>
        <LogoContainer onClick={() => { goToHome(history) }}>
          <img src={logo} alt={"logo da LabeX"}></img>
          <h1><b><em>LabeX</em></b></h1>
        </LogoContainer>
        <div>
          <CoordinatorButton onClick={() => { goToHome(history) }}>Voltar</CoordinatorButton>
          <CoordinatorButton onClick={() => { goToCreateTrip(history) }}>Criar Viagem</CoordinatorButton>
          <CoordinatorButton onClick={() => { logoutAdmin(history) }}>Logout</CoordinatorButton>
        </div>
      </HeaderAdminContainer>
      <SectionSimplifyTripsContainer>
        <h1>ÁREA DE ACESSO - ADMINISTRADOR</h1>
        <Scrollbars>
          <ListSimplifyTripsContainer>
            {renderAllSimplifyTrips}
          </ListSimplifyTripsContainer>
        </Scrollbars>
      </SectionSimplifyTripsContainer>
    </AdminContainer>

  );
}

export default AdminHomePage;