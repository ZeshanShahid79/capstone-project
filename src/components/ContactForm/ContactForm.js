import styled from 'styled-components';
import Input from '../Input/Input';
import emailjs from 'emailjs-com';
import Button from '../Button/Button';

export default function ContactForm() {
  return (
    <StyledContactForm aria-labelledby="formHeader" onSubmit={handleSubmit}>
      <h2 id="formHeader">Contact Us</h2>

      <Input
        labelText="Restaurantname"
        id="restaurantname"
        name="restaurantname"
        type="text"
        required
      />
      <Input
        labelText="Address"
        id="address"
        name="address"
        type="text"
        required
      />
      <Input labelText="E-Mail" id="email" name="email" type="email" required />
      <Input
        labelText="Telephone"
        id="telephone"
        name="telephone"
        type="number"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" />

      <Button data-testid="message" type="submit" value="Send">
        Send
      </Button>
    </StyledContactForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const success = '';
    emailjs
      .sendForm(
        'service_hgexx04',
        'template_db85ugq',
        event.target,
        'SHU7y_FFmZng3tHx3'
      )
      .then(() => {
        return success;
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
