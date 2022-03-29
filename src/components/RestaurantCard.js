import { restaurants } from './restaurants';
import styled from 'styled-components';

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
      <button onClick={refreshPage}>Random</button>
    </SytledRestaurantCard>
  );
  function refreshPage() {
    window.location.reload(false);
  }
}

const SytledRestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 10px;
  margin: 20px;
`;
const StyledDescription = styled.span`
  font-weight: bold;
`;
