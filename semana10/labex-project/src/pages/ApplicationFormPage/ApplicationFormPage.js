import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { previousPage } from '../../routes/Coordinator';
import useGetAllTrips from '../../hooks/useGetAllTrips';
import useForm from '../../hooks/useForm';
import allCountries from '../../constants/listOfCountries';
import baseURL from '../../constants/baseURL';

import { FormContainer, CoordinatorButton, InputForm, SelectForm } from '../../GlobalStyles';
import { AppFormContainer, AlienSmile, AppFormSendButton } from './ApplicationFormPageStyles';

import alienSmile from '../../img/alien-smile.svg';

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

  useEffect(() => {
    document.title="Application Form";
  }, [])

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
    <FormContainer>
      <h1>INSCREVA-SE PARA UMA VIAGEM <AlienSmile src={alienSmile} alt={"imagem de alien sorrindo"}></AlienSmile></h1>
      <AppFormContainer>
        <SelectForm onChange={captureTripIdChoosen} >
          <option value="">Escolha uma viagem...</option>
          {renderTripsOptions}
        </SelectForm>
        <form onSubmit={sendApplicationForm}>
          <InputForm
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
            pattern={"^.{3,}"}
            title={"Nome deve ter no mínimo 3 letras"}
          />
          <InputForm
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder={"Idade"}
            required
            type={"number"}
            min={18}
          />
          <InputForm
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder={"Texto de candidatura"}
            required
            minLength={30}
          />
          <InputForm
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder={"Profissão"}
            required
            minLength={10}
          />
          <SelectForm
            name={"country"}
            value={form.country}
            onChange={onChange}
          >
            <option value="">País de origem</option>
            {renderCountriesOptions}
          </SelectForm>
          <AppFormSendButton>Enviar</AppFormSendButton>
        </form>
      </AppFormContainer>
      <div>
        <CoordinatorButton onClick={() => { previousPage(history) }}>Voltar</CoordinatorButton>
      </div>
    </FormContainer>
  );
}

export default ApplicationFormPage;