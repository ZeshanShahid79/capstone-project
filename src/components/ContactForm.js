import styled from 'styled-components';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  return (
    <StyledContactForm onSubmit={sendEmail}>
      <label>Restaurantname</label>
      <input type="text" name="name" />

      <label>Address</label>
      <input type="text" name="Address" />

      <label>E-Mail</label>
      <input type="email" name="user_email" />

      <label>Telephone</label>
      <input type="number" name="Telephonenumber" />

      <label>Message</label>
      <textarea name="message" rows="4" />
      <input type="submit" value="Send" />
    </StyledContactForm>
  );
  function sendEmail(event) {
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
