import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomePage>
      <Link to="/RestaurantCard">
        <Button>Random</Button>
      </Link>
      <Link to="/ContactForm">
        <Button>Contact Us</Button>
      </Link>
      <Link to="/Categories">
        <Button>Categories</Button>
      </Link>
    </HomePage>
  );
}

const HomePage = styled.main`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
`;
