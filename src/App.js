import RestaurantCard from './components/RestaurantCard';
import { restaurants } from './components/restaurants';
import Button from './components/Button';

export default function App() {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  return (
    <>
      <RestaurantCard randomRestaurant={randomRestaurant} />
      <Button onClick={refreshPage}>Random</Button>
    </>
  );
  function refreshPage() {
    window.location.reload(false);
  }
}
