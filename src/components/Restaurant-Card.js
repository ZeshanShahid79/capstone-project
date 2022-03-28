import { Restaurant } from './restaurant';
import styled from 'styled-components';

export default function RestaurantCard() {
  return (
    <SytledRestaurant>
      <h2>{Restaurant[0].restaurant}</h2>
      <p>{Restaurant[0].address}</p>
      <StyledSpan>Beschreibung:</StyledSpan>
      <p>{Restaurant[0].description}</p>
      <a href={Restaurant[0].url}>Link</a>
    </SytledRestaurant>
  );
}

//function randomRestaurants(Restaurant) {
// return Restaurant[Math.floor(Math.random() * Restaurant.length)];
//}

const SytledRestaurant = styled.div`
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
