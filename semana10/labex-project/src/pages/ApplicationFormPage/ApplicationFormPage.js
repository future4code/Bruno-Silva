import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useGetAllTrips from '../../hooks/useGetAllTrips';
import useForm from '../../hooks/useForm';
import allCountries from '../../constants/listOfCountries';
import { previousPage } from '../../routes/Coordinator';
import baseURL from '../../constants/baseURL';

function ApplicationFormPage() {
  const history = useHistory();
  const getTrips = useGetAllTrips(`${baseURL}/trips`, []);
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  });
  const [tripIdChoosen, setTripIdChoosen] = useState("");

  const captureTripIdChoosen = (event) => {
    setTripIdChoosen(event.target.value)
  }

  const sendApplicationForm = (event) => {
    event.preventDefault();
    if (!tripIdChoosen) {
      alert("Favor, escolher viagem!");
    } else if (!form.country) {
      alert("Favor, preencher país de origem!");
    } else {

      const url = `${baseURL}/trips/${tripIdChoosen}/apply`

      const body = {
        name: form.name,
        age: Number(form.age),
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
      }

      axios
        .post(url, body)
        .then(() => {
          alert("Aplicação realizada com sucesso! :)")
        })
        .catch((err) => {
          alert(err.response)
        });
      cleanFields();
    };
  };

  const renderTripsOptions = getTrips && getTrips.map((info) => {
    return (
      <option value={info.id} key={info.id}>{info.name}</option>
    );
  });

  const renderCountriesOptions = allCountries.map((country) => {
    return (
      <option value={country} key={country}>{country}</option>
    );
  });

  return (
    <div>
      <div>
        <h2>Inscreva-se para uma viagem</h2>
        <select onChange={captureTripIdChoosen} >
          <option value="">Escolha uma viagem...</option>
          {renderTripsOptions}
        </select>
        <form onSubmit={sendApplicationForm}>
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
            pattern={"^.{3,}"}
            title={"Nome deve ter no mínimo 3 letras"}
          />
          <input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder={"Idade"}
            required
            type={"number"}
            min={18}
          />
          <input
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder={"Texto de candidatura"}
            required
            minLength={30}
          />
          <input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder={"Profissão"}
            required
            minLength={10}
          />
          <select
            name={"country"}
            value={form.country}
            onChange={onChange}
          >
            <option value="">País de origem</option>
            {renderCountriesOptions}
          </select>
          <button>Enviar</button>
        </form>
      </div>
      <div>
        <button onClick={() => { previousPage(history)}}>Voltar</button>
      </div>
    </div>
  );
}

export default ApplicationFormPage;