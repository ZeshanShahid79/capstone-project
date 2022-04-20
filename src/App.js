import RestaurantCard from './Pages/RestaurantCard/RestaurantCard';
import ContactForm from './Pages/ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import styled from 'styled-components';
import Categories from './Pages/Categories/Categories';
import useSWR from 'swr';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import GeoMap from './components/Map/GeoMap';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App({ randomRestaurant }) {
  const [address, setAddress] = useState('');
  const { data: entries, error: entriesError } = useSWR(
    '/api/entries',
    fetcher
  );
  if (entriesError) return <h1>Sorry, could not fetch</h1>;
  if (!entries) return <LoadingSpinner />;
  console.log(address);
  return (
    <Homepage>
      <Header>
        <h1>W. D. W. E.</h1>
        <p>"What Do We Eat"</p>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/RestaurantCard"
          element={
            <RestaurantCard
              entries={entries}
              randomRestaurant={randomRestaurant}
              setAddress={handleSetAddress}
            />
          }
        />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Categories" element={<Categories entries={entries} />} />
        <Route path="/GeoMap" element={<GeoMap address={address} />}></Route>
      </Routes>
    </Homepage>
  );
  function handleSetAddress(address) {
    setAddress(address);
  }
}
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px goldenrod;
  font-family: 'Noto Serif Display', 'serif';
  font-weight: lighter;
  color: gold;
  border-left: none;
  border-right: none;
  margin: 20px 0;

  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const Homepage = styled.main`
  background-color: black;
  color: white;
`;
