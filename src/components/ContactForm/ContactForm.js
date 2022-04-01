import styled from 'styled-components';
import Input from '../Input/Input';

export default function ContactForm({ onSubmit }) {
  return (
    <StyledContactForm aria-labelledby="formHeader" onSubmit={onSubmit}>
      <h2 id="formHeader">Contact Us</h2>
      <Input
        labelText="Restaurantname"
        id="Restaurantname"
        name="Restaurantname"
        type="Text"
        required={true}
      />
      <Input
        labelText="Address"
        id="Address"
        name="Address"
        type="Text"
        required={true}
      />
      <Input
        labelText="E-Mail"
        id="E-Mail"
        name="E-Mail"
        type="E-Mail"
        required={true}
      />
      <Input
        labelText="Telephone"
        id="Telephone"
        name="Telephone"
        type="number"
        required={true}
      />
      <label htmlFor="Message">Message</label>
      <textarea name="message" rows="4" />
      <input data-testid="Message" type="submit" value="Send" />
    </StyledContactForm>
  );
}
const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px;
`;
