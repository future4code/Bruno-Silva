import React from 'react';
import { useHistory } from 'react-router-dom';

function ApplicationFormPage() {
  const history = useHistory();

  const backToListTrips = () => {
    history.goBack();
  };

  return (
    <div>
      <div>
        <h2>Inscreva-se para uma viagem</h2>
        <form action={"#"}>
          <select>
            <option value="default">Escolha uma viagem...</option>
          </select>
          <input placeholder={"Nome"} required/>
          <input type={"number"} placeholder={"Idade"} required/>
          <input placeholder={"Texto de candidatura"} required/>
          <input placeholder={"Profissão"} required/>
          <input placeholder={"País de origem"} required/>
        </form>
      </div>
      <div>
        <button onClick={backToListTrips}>Voltar</button>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default ApplicationFormPage;