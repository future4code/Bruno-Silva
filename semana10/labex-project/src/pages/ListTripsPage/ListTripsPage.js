import React, { useState } from 'react';
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';

function ListTripsPage(props) {
  const [actualPage, setActualPage] = useState("lists");

  const goToAppForm = () => {
    setActualPage("application-page");
  }

  const renderListTripPage = () => {
    switch (actualPage) {
      case "lists":
        return (
          <div>
            <button onClick={props.backToHomePage}>Voltar</button>
            <button onClick={goToAppForm}>Inscrever-se</button>
          </div>
        );
      case "application-page":
        return <ApplicationFormPage />
    };
  }

  return (
    <div>
      {renderListTripPage()}
    </div>
  );
}

export default ListTripsPage;