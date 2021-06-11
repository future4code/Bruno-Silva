import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import useProtectedPage from '../../hooks/useProtectedPage';
import { previousPage } from '../../routes/Coordinator';
import allPlanets from '../../constants/planetsOfSolarSystem';
import useForm from '../../hooks/useForm';
import useActualDateToString from '../../hooks/useActualDateToString';
import baseURL from '../../constants/baseURL';
import { FormContainer, CoordinatorButton, InputForm, SelectForm } from '../../GlobalStyles';
import { AppFormContainer, AlienSmile, AppFormSendButton } from './CreateTripPageStyles';
import alienSmile from '../../img/alien-smile.svg';

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
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response.data)
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
      <h1>CRIAR VIAGEM <AlienSmile src={alienSmile} alt={"imagem de alien sorrindo"}></AlienSmile></h1>
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