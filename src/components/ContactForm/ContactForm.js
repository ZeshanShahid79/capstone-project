import styled from 'styled-components';

export default function ContactForm({ onSubmit }) {
  return (
    <StyledContactForm onSubmit={onSubmit}>
      <label>Restaurantname</label>
      <input type="text" name="name" required={true} />

      <label>Address</label>
      <input type="text" name="Address" required={true} />

      <label>E-Mail</label>
      <input type="email" name="user_email" required={true} />

      <label>Telephone</label>
      <input type="number" name="Telephonenumber" required={true} />

      <label>Message</label>
      <textarea name="message" rows="4" />
      <input type="submit" value="Send" />
    </StyledContactForm>
  );
}
const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px;
`;
