import { useState } from 'react';
import Button from '../../components/Button/Button';
import FormInput from '../../components/FormInput/FormInput';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Navigation from '../../components/Navigation/Navigation';
import { toast } from 'react-toastify';

const inputs = [
  {
    id: 1,
    name: 'restaurantname',
    type: 'text',
    errorMessage: 'Should not include any special characters',
    label: 'Restaurantname',
    required: true,
    pattern: /[^A-Za-z0-9\- .]/g,
  },
  {
    id: 2,
    name: 'address',
    type: 'text',
    errorMessage: 'Address should include Street and Number',
    label: 'Address',
    required: true,
    pattern: /[^A-Za-z\- . [0-9]$]/g,
  },
  {
    id: 3,
    name: 'email',
    type: 'email',
    errorMessage: 'It should be a valid email address',
    label: 'E-Mail',
    required: true,
    pattern:
      /[^a-zA-Z0-9][-.+!#$%&'*/=?^`{|]{0,1}([a-zA-Z0-9][-.+!#$%&'*/=?^`{|]{0,1})[a-zA-Z0-9]@[a-zA-Z0-9][-.]{0,1}([a-zA-Z][-.]{0,1})[a-zA-Z0-9].[a-zA-Z0-9]{1,}([.-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i,
  },
  {
    id: 4,
    name: 'telephone',
    type: 'text',
    errorMessage: 'Telephonenumber should include only Numbers',
    label: 'Telephone',
    required: true,
    pattern: /[^0-9]/g,
  },
];

export default function ContactForm() {
  const [values, setValues] = useState({
    restaurantname: '',
    address: '',
    email: '',
    telephone: '',
  });

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Bubble>
          Are you not listed? No Problem just fill out the Form and we will
          contact you
        </Bubble>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <label htmlFor="message">Message</label>
        <MessageInput id="message" name="message" rows="4" />

        <SubmitButton type="submit" value="Send">
          Send
        </SubmitButton>
      </StyledForm>
      <Navigation />
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_API,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        event.target,
        process.env.REACT_APP_EMAIL_KEY
      )

      .catch(err => console.log(err));
    setValues({
      restaurantname: '',
      address: '',
      email: '',
      telephone: '',
    });
    event.target.reset();

    toast.success('Your Mail was sent successfully!');
  }

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
}

const StyledForm = styled.form`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const SubmitButton = styled(Button)`
  margin-top: 12px;
`;
const MessageInput = styled.textarea`
  width: 285px;
`;
const Bubble = styled.div`
  position: relative;
  background: #000000;
  color: gold;
  font-family: Arial;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  width: 250px;
  height: 60px;
  border-radius: 10px;
  padding: 3px;
  border: goldenrod solid 1px;
  margin-bottom: 40px;
  p {
    font-size: 16px;
    margin-top: 4px;
    margin-bottom: 5px;
  }

  :after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width: 29px 32px 0 0;
    border-color: #000000 transparent transparent transparent;
    bottom: -29px;
    left: 23%;
    margin-left: -16px;
  }
  :before {
    content: '';
    position: absolute;
    width: 0;
    z-index: 0;
    border-style: solid;
    border-width: 30px 33px 0 0;
    border-color: goldenrod transparent transparent transparent;
    bottom: -31px;
    left: 23%;
    margin-left: -17px;
    display: block;
  }
`;
