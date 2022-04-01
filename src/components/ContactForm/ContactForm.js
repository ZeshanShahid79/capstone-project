import styled from 'styled-components';
import Input from '../Input/Input';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  return (
    <StyledContactForm aria-labelledby="formHeader" onSubmit={onSubmit}>
      <h2 id="formHeader">Contact Us</h2>
      <Input
        labelText="Restaurantname"
        id="restaurantname"
        name="restaurantname"
        type="text"
        required={true}
      />
      <Input
        labelText="Address"
        id="address"
        name="address"
        type="text"
        required={true}
      />
      <Input
        labelText="E-Mail"
        id="email"
        name="email"
        type="email"
        required={true}
      />
      <Input
        labelText="Telephone"
        id="telephone"
        name="telephone"
        type="number"
        required={true}
      />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" />
      <input data-testid="message" type="submit" value="Send" />
    </StyledContactForm>
  );

  function onSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_hgexx04',
        'template_db85ugq',
        event.target,
        'SHU7y_FFmZng3tHx3'
      )
      .then(res => {
        console.log(res);
      })

      .catch(err => console.log(err));
    event.target.reset();
  }
}
const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px;
`;
