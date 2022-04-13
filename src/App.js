import RestaurantCard from './Pages/RestaurantCard/RestaurantCard';
import ContactForm from './Pages/ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import styled from 'styled-components';
import Categories from './Pages/Categories/Categories';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App({ randomRestaurant }) {
  const { data: entries, error: entriesError } = useSWR(
    '/api/entries',
    fetcher
  );
  if (entriesError) return <h1>Sorry, could not fetch</h1>;
  if (!entries) return <em>... loading ...</em>;

  return (
    <Homepage>
      <Header>Restaurant Randomizer</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/RestaurantCard"
          element={
            <RestaurantCard
              entries={entries}
              randomRestaurant={randomRestaurant}
            />
          }
        />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Categories" element={<Categories entries={entries} />} />
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
