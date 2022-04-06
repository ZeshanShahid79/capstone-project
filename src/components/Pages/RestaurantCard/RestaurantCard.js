import styled from 'styled-components';
import Button from '../../Button/Button';
import { restaurants } from '../../../restaurants';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function RestaurantCard() {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];

  return (
    <SytledRestaurantCard>
      <h2>{randomRestaurant.restaurant}</h2>
      <p>{randomRestaurant.address}</p>
      <StyledDescription>Description:</StyledDescription>
      <p>{randomRestaurant.description}</p>
      <a href={randomRestaurant.url}>Link</a>
      <Button onClick={refreshPage}>Random</Button>
      <Link to="/">
        <AiOutlineArrowLeft />
      </Link>
    </SytledRestaurantCard>
  );
}
function refreshPage() {
  window.location.reload(false);
}
const SytledRestaurantCard = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 10px;
  margin: 20px;
`;
const StyledDescription = styled.h3`
  font-weight: bold;
`;
