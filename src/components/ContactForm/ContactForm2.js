import { useState } from 'react';
import Button from '../Button/Button';
import FormInput from './FormInput';
import styled from 'styled-components';

export default function ContactForm2() {
  const [values, setValues] = useState({
    restaurantname: '',
    address: '',
    email: '',
    telephone: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'restaurantname',
      type: 'text',
      errorMessage: 'Should not include any special characters',
      label: 'Restaurantname',
      required: true,
      pattern: '[A-za-z0–9_]',
    },
    {
      id: 2,
      name: 'address',
      type: 'text',
      errorMessage: 'Address should include Street and Number',
      label: 'Address',
      required: true,
      pattern: '[A-za-z0–9_]',
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      errorMessage: 'It should be a valid email address',
      label: 'E-Mail',
      required: true,
    },
    {
      id: 4,
      name: 'telephone',
      type: 'text',
      errorMessage: 'Telephonenumber should include only Numbers',
      label: 'Telephone',
      required: true,
      pattern: '^[0-9]*$',
    },
  ];
  return (
    <StyledForm onSubmit={handleSubmit}>
      {inputs.map(input => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={handleChange}
        />
      ))}
      <Button>Submit</Button>
    </StyledForm>
  );
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
}

const StyledForm = styled.form`
  padding: 0px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
