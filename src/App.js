import RestaurantCard from './components/Pages/RestaurantCard/RestaurantCard';
import ContactForm from './components/Pages/ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

export default function App({ randomRestaurant }) {
  return (
    <main>
      <h1>Restaurant Randomizer</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/RestaurantCard"
          element={<RestaurantCard randomRestaurant={randomRestaurant} />}
        />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </main>
  );
}
