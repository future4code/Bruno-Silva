import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTripPage from '../CreateTripPage/CreateTripPage';
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage';

function AdminHomePage(props) {
  const [actualPage, setActualPage] = useState("admin-page");
  const [allTrips, setAllTrips] = useState([]);

  useEffect(() => {
    getAllTrips()
  }, []);

  const getAllTrips = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips"

    axios
    .get(url)
    .then((res) => {
      setAllTrips(res.data.trips)
    })
    .catch((err) => {
      console.log(err)
    }) 
  };

  const goToAdminPage = () => {
    setActualPage("admin-page");
  };

  const goToCreateTrip = () => {
    setActualPage("create-trip")
  };

  const goToTripDetails = () => {
    setActualPage("trip-detail")
  };

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips/${id}`;
  
    axios
    .delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const cardTrip = allTrips.map((info) => {
    return (
      <div onClick={goToTripDetails}>
        <p>{info.name}</p>
        <button onClick={() => {deleteTrip(info.id)}}>Remover</button>
      </div> 
    );
  });

  const renderAdminPage = () => {
    switch (actualPage) {
      case "admin-page":
        return (
          <div>
            <h2>Painel Administrativo</h2>
            <div>
              <button onClick={props.backToHomePage}>Voltar</button>
              <button onClick={goToCreateTrip}>Criar Viagem</button>
              <button onClick={props.logging}>Logout</button>
            </div>
            {cardTrip}
          </div>
        );
      case "create-trip":
        return (
          <CreateTripPage 
            goToAdminPage={goToAdminPage}
        />);
      case "trip-detail":
        return (
          <TripDetailsPage 
            goToAdminPage={goToAdminPage}
        />);
      default:
        return;
    }
  }

  return (
    <div>
      {renderAdminPage()}
    </div>
  );
}

export default AdminHomePage;