import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Map from '../../components/Map/Map';

export default function RestaurantCard({ entries }) {
  const randomRestaurant = entries[Math.floor(Math.random() * entries.length)];

  return (
    <RandomPage>
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
      </SytledRestaurantCard>
      <Button onClick={refreshPage}>Random</Button>
      <Link to="/">
        <AiOutlineArrowLeft size={60} color="white" />
      </Link>
      <Map />
    </RandomPage>
  );
}
function refreshPage() {
  window.location.reload(false);
}

const RandomPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

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
