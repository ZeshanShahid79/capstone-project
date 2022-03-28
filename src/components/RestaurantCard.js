import { Restaurants } from './restaurants';
import styled from 'styled-components';

export default function RestaurantCard() {
  const randomRestaurant =
    Restaurants[Math.floor(Math.random() * Restaurants.length)];

  return (
    <SytledRestaurantCard>
      <h2>{randomRestaurant.restaurant}</h2>
      <p>{randomRestaurant.address}</p>
      <StyledSpan>Beschreibung:</StyledSpan>
      <p>{randomRestaurant.description}</p>
      <a href={randomRestaurant.url}>Link</a>
    </SytledRestaurantCard>
  );
}

const SytledRestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 10px;
  margin: 20px;
`;
const StyledSpan = styled.span`
  font-weight: bold;
`;
