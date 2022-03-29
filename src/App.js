import RestaurantCard from './components/RestaurantCard';
import { restaurants } from './components/restaurants';

export default function App() {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  return (
    <>
      <RestaurantCard randomRestaurant={randomRestaurant} />
      <button onClick={refreshPage}>Random</button>
    </>
  );
  function refreshPage() {
    window.location.reload(false);
  }
}
