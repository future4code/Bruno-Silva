import React from 'react';
import { RegisterFormContainer, FormInput, FormButton } from './styled';

import useForm from "../../hooks/useForm";
import { register } from '../../services/participant';

const RegisterForm = () => {
  const [form, onChange, clear] = useForm({firstName: "", lastName: "", participation: ""});

  const onSubmitRegister = (event) => {
    event.preventDefault();
    register(form, clear);
  }

  return (
    <RegisterFormContainer>
      <form onSubmit={onSubmitRegister}>
        <FormInput
          type={"text"}
          name={"firstName"}
          value={form.firstName}
          onChange={onChange}
          placeholder={"First Name"}
          required
        />
        <FormInput
          type={"text"}
          name={"lastName"}
          value={form.lastName}
          onChange={onChange}
          placeholder={"Last Name"}
          required
        />
        <FormInput
          type={"number"}
          name={"participation"}
          value={form.participation}
          onChange={onChange}
          placeholder={"Participation"}
          required
        />
        <FormButton
          type={"submit"}
        >
          SEND
        </FormButton>
      </form>
    </RegisterFormContainer>
  );
}

export default RegisterForm;