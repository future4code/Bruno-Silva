import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';

function ListTripsPage(props) {
  const [actualPage, setActualPage] = useState("lists");
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

  const goToListTrips = () => {
    setActualPage("lists");
  }

  const goToAppForm = () => {
    setActualPage("application-page");
  }

  const cardTrips = allTrips.map((info) => {
      return(
        <div key={info.id}>
          <p>{info.name}</p>
          <p>{info.description}</p>
          <p>{info.planet}</p>
          <p>{info.durationInDays}</p>
          <p>{info.date}</p>
        </div>
      )
    });

  const renderListTripPage = () => {
    switch (actualPage) {
      case "lists":
        return (
          <div>
            <div>
              <button onClick={props.backToHomePage}>Voltar</button>
              <button onClick={goToAppForm}>Inscrever-se</button>
            </div>
            <div>
              <h2>Lista de Viagens</h2>
              {cardTrips}
            </div>
          </div>
        );
      case "application-page":
        return (
          <ApplicationFormPage
            goToListTrips={goToListTrips}
          />);
      default:
        return;
    };
  }

  console.log(allTrips)

  return (
    <div>
      {renderListTripPage()}
    </div>
  );
}

export default ListTripsPage;