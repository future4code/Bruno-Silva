import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApplicationFormPage(props) {
  const [allTrips, setAllTrips] = useState([]);
  const [tripId, setTripId] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueAge, setValueAge] = useState("");
  const [valueText, setValueText] = useState("");
  const [valueJob, setValueJob] = useState("");
  const [valueCountry, setValueCountry] = useState("");

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

  const renderTripOptions = allTrips.map((info)=> {
    return <option value={info.id} key={info.id}>{info.name}</option>
  });

  const captureTripId = (event) => {
    setTripId(event.target.value);
  }

  const handleName = (event) => {
    setValueName(event.target.value);
  }

  const handleAge = (event) => {
    setValueAge(event.target.value);
  }

  const handleText = (event) => {
    setValueText(event.target.value);
  }

  const handleJob = (event) => {
    setValueJob(event.target.value);
  }

  const handleCountry = (event) => {
    setValueCountry(event.target.value);
  }

  const applyToTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-silva-paiva/trips/${tripId}/apply`
    
    const body = {
      name: valueName,
      age: valueAge,
      applicationText: valueText,
      profession: valueJob,
      country: valueCountry
    }
  
    axios
    .post(url, body)
    .then((res) => {
      alert(res.data.message)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div>
        <h2>Inscreva-se para uma viagem</h2>
        <form action={"#"}>
          <select onChange={captureTripId}>
            <option value="default">Escolha uma viagem...</option>
            {renderTripOptions}
          </select>
          <input onChange={handleName} placeholder={"Nome"} required/>
          <input type={"number"} onChange={handleAge} placeholder={"Idade"} required/>
          <input onChange={handleText} placeholder={"Texto de candidatura"} required/>
          <input onChange={handleJob} placeholder={"Profissão"} required/>
          <input onChange={handleCountry} placeholder={"País de origem"} required/>
        </form>
      </div>
      <div>
        <button onClick={props.goToListTrips}>Voltar</button>
        <button onClick={applyToTrip}>Enviar</button>
      </div>
    </div>
  );
}

export default ApplicationFormPage;