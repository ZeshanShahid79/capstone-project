import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import { restaurants } from './components/RestaurantCard/restaurants';
import Button from './components/Button/Button';
import ContactForm from './components/ContactForm/ContactForm';

export default function App() {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  return (
    <>
      <RestaurantCard randomRestaurant={randomRestaurant} />
      <Button onClick={refreshPage}>Random</Button>
      <ContactForm />
    </>
  );
  function refreshPage() {
    window.location.reload(false);
  }
}
