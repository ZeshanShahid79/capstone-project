import RestaurantCard from './Pages/RestaurantCard/RestaurantCard';
import ContactForm from './Pages/ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import styled from 'styled-components';
import Categories from './Pages/Categories/Categories';
import useSWR from 'swr';
import { PushSpinner } from 'react-spinners-kit';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App({ randomRestaurant }) {
  const { data: entries, error: entriesError } = useSWR(
    '/api/entries',
    fetcher
  );
  if (entriesError) return <h1>Sorry, could not fetch</h1>;
  if (!entries) return <PushSpinner size={30} color="#daa520" />;

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
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #fcd263 0%,
    rgba(194, 131, 23, 0.92549) 9.9%,
    rgba(240, 179, 40, 0.956863) 18.23%,
    #ffc72b 34.9%,
    #fddd81 53.65%,
    rgba(240, 182, 40, 0.956863) 72.92%,
    #fddd81 93.75%
  );
`;

const Homepage = styled.main`
  background-color: black;
  color: white;
`;
