import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import { restaurants } from './components/RestaurantCard/restaurants';
import Button from './components/Button/Button';
import ContactForm from './components/ContactForm/ContactForm';
import styled from 'styled-components';

export default function App() {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  return (
    <RandomRestaurantPage>
      <RestaurantCard randomRestaurant={randomRestaurant} />
      <Button onClick={refreshPage}>Random</Button>
      <ContactForm />
    </RandomRestaurantPage>
  );
  function refreshPage() {
    window.location.reload(false);
  }
}

const RandomRestaurantPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
