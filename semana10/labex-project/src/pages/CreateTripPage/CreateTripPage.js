import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

import { previousPage } from '../../routes/Coordinator';
import useActualDateToString from '../../hooks/useActualDateToString';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import baseURL from '../../constants/baseURL';
import allPlanets from '../../constants/planetsOfSolarSystem';

import { FormContainer, CoordinatorButton, InputForm, SelectForm } from '../../GlobalStyles';
import { AppFormContainer, TravelIcon, AppFormSendButton } from './CreateTripPageStyles';

import travel from '../../img/travel-icon.svg';

function CreateTripPage() {
  useProtectedPage();

  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });
  const actualDate = useActualDateToString();

  useEffect(() => {
    document.title="Create Trip";
  }, [])

  const formToCreateTrip = (event) => {
    event.preventDefault();
    if (form.planet === "") {
      alert("Favor, selecionar planeta da viagem! :)")
    } else if (actualDate >= form.date) {
      alert("Favor, inserir data maior que a atual! :)")
    } else {

      const url = `${baseURL}/trips`;

      const body = {
        name: form.name,
        planet: form.planet,
        date: form.date,
        description: form.description,
        durationInDays: Number(form.durationInDays)
      }

      const header = {
        headers: {
          auth: localStorage.getItem("token")
        }
      }

      axios
        .post(url, body, header)
        .then(() => {
          alert("Viagem criada com sucesso! :)")
        })
        .catch(() => {
          alert("Ops, ocorreu um erro! Tente novamente :)")
        });
    };

    cleanFields();
  };



  const renderAllPlanets = allPlanets.map((planet) => {
    return (
      <option value={planet} key={planet}>{planet}</option>
    );
  });

  return (
    <FormContainer>
      <h1>CRIAR VIAGEM <TravelIcon src={travel} alt={"imagem de alien sorrindo"}></TravelIcon></h1>
      <AppFormContainer>
        <form onSubmit={formToCreateTrip}>
          <InputForm
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder={"Nome da viagem"}
            required
            pattern={"^.{5,}"}
            title={"Nome da viagem deve ter no mínimo 5 letras"}
          />
          <SelectForm
            name={"planet"}
            value={form.planet}
            onChange={onChange}
          >
            <option value="">Escolha um planeta...</option>
            {renderAllPlanets}
          </SelectForm>
          <InputForm
            name={"date"}
            value={form.date}
            onChange={onChange}
            required
            type={"date"}
          />
          <InputForm
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder={"Descrição da viagem"}
            required
            minLength={30}
          />
          <InputForm
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            placeholder={"Duração da viagem (dias)"}
            required
            type={"number"}
            min={50}
          />
          <AppFormSendButton>Criar</AppFormSendButton>
        </form>
      </AppFormContainer>
      <div>
        <CoordinatorButton onClick={() => { previousPage(history) }}>Voltar</CoordinatorButton>
      </div>
    </FormContainer>
  );
}

export default CreateTripPage;