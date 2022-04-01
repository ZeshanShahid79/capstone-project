import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import { restaurants } from './components/RestaurantCard/restaurants';
import Button from './components/Button/Button';
import ContactForm from './components/ContactForm/ContactForm';
import emailjs from 'emailjs-com';

export default function App() {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  return (
    <>
      <RestaurantCard randomRestaurant={randomRestaurant} />
      <Button onClick={refreshPage}>Random</Button>
      <ContactForm onSubmit={sendEmail} />
    </>
  );
  function refreshPage() {
    window.location.reload(false);
  }
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
