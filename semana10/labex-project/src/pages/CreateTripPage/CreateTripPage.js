import React, { useState } from 'react';
import axios from 'axios';

function CreateTripPage(props) {
  const [valueName, setValueName] = useState("");
  const [valuePlanet, setValuePlanet] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [valueToDueDate, setValueToDueDate] = useState(0);

  const handleName = (event) => {
    setValueName(event.target.value);
  }

  const handlePlanet = (event) => {
    setValuePlanet(event.target.value);
  }

  const handleDate = (event) => {
    setValueDate(event.target.value);
  }

  const handleDescription = (event) => {
    setValueDescription(event.target.value);
  }

  const handleToDueDate = (event) => {
    setValueToDueDate(event.target.value);
  }

  const createTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips`;

    const body = {
      name: valueName,
      planet: valuePlanet,
      date: valueDate,
      description: valueDescription,
      durationInDays: valueToDueDate
    };

    axios
    .post(url, body)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });
  };
  
  return (
    <div>
      <h2>Criar Viagem</h2>
      <form>
        <input onChange={handleName} placeholder={"Nome"}/>
        <select onChange={handlePlanet}>
          <option value={"default"}>Escolha um planeta</option>
          <option value={"Mercúrio"}>Mercúrio</option>
          <option value={"Vênus"}>Vênus</option>
          <option value={"Terra"}>Terra</option>
          <option value={"Marte"}>Marte</option>
          <option value={"Júpiter"}>Júpiter</option>
          <option value={"Saturno"}>Saturno</option>
          <option value={"Urano"}>Urano</option>
          <option value={"Netuno"}>Netuno</option>
          <option value={"Plutão"}>Plutão</option>
        </select>
        <input type={"date"} />
        <input placeholder={"Descrição"}/>
        <input type={"number"} placeholder={"Duração em dias"}/>
      </form>
      <div>
        <button onClick={props.goToAdminPage}>Voltar</button>
        <button onClick={createTrip}>Criar</button>
      </div>
    </div>
  );
}

export default CreateTripPage;