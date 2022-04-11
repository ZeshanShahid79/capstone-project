import styled from 'styled-components';
import Button from '../../Button/Button';
import { restaurants } from '../../../restaurants';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function RestaurantCard() {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];

  return (
    <main>
      <SytledRestaurantCard>
        <h2>{randomRestaurant.restaurant}</h2>
        <p>{randomRestaurant.address}</p>
        <h4>Description:</h4>
        <article>{randomRestaurant.description}</article>
        <a href={randomRestaurant.url}>Link</a>
        <ul>
          {randomRestaurant.categories.map((category, index) => (
            <StyledListItem key={index}>{category}</StyledListItem>
          ))}
        </ul>
        <Button onClick={refreshPage}>Random</Button>
      </SytledRestaurantCard>
      <Link to="/">
        <AiOutlineArrowLeft size={30} color="white" />
      </Link>
    </main>
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
  border: solid 12px;

  border-image: linear-gradient(
    180deg,
    #fcd263 0%,
    rgba(194, 131, 23, 0.92549) 9.9%,
    rgba(240, 179, 40, 0.956863) 18.23%,
    #ffc72b 34.9%,
    #fddd81 53.65%,
    rgba(240, 182, 40, 0.956863) 72.92%,
    #fddd81 93.75%
  );
  border-image-slice: 1;

  ul {
    display: flex;
    flex-direction: row;
    padding-left: 0;
  }
  a {
    color: white;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  font-size: smaller;
  border: solid 1px;
  border-radius: 5px;
  padding: 2px;
`;
