import RestaurantCard from './Pages/RestaurantCard/RestaurantCard';
import ContactForm from './Pages/ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import styled from 'styled-components';
import Categories from './Pages/Categories/Categories';

export default function App({ randomRestaurant }) {
  return (
    <Homepage>
      <Header>Restaurant Randomizer</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/RestaurantCard"
          element={<RestaurantCard randomRestaurant={randomRestaurant} />}
        />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Homepage>
  );
}
const Header = styled.h1`
  background-color: rgb(225, 161, 7);
`;
const Homepage = styled.main`
  background-color: black;
  color: white;
`;
