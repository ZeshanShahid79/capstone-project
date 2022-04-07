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
      <h3>{randomRestaurant.restaurant}</h3>
      <p>{randomRestaurant.address}</p>
      <h4>Description:</h4>
      <p>{randomRestaurant.description}</p>
      <a href={randomRestaurant.url}>Link</a>
      {randomRestaurant.categories.map((category, index) => (
        <div>
          <StyledListItem key={category.index}>{category}</StyledListItem>
        </div>
      ))}

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
  margin: 20px;
  padding: 10px;
  h4 {
    margin-bottom: -10px;
    margin-top: -5px;
  }

  div {
    background-color: yellow;
    display: flex;
    flex-direction: row;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  font-size: smaller;
  border: solid 1px;
  border-radius: 5px;
  padding: 2px;
`;
