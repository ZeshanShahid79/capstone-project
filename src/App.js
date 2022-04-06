import RestaurantCard from './components/Pages/RestaurantCard/RestaurantCard';
import ContactForm from './components/Pages/ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import styled from 'styled-components';

export default function App({ randomRestaurant }) {
  return (
    <main>
      <Header>Restaurant Randomizer</Header>
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
const Header = styled.h1`
  background-color: blue;
`;
