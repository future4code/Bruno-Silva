import React from 'react';
import { useHistory } from 'react-router';

function CreateTripPage() {
  const history = useHistory()

  const backToAdminHome = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Criar Viagem</h2>
      <form>
        <input placeholder={"Nome"}/>
        <select>
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
        <button onClick={backToAdminHome}>Voltar</button>
        <button>Criar</button>
      </div>
    </div>
  );
}

export default CreateTripPage;