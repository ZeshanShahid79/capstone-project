import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { GoGlobe } from 'react-icons/go';
import CopyButton from '../../components/Button/CopyButton';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import Navigation from '../../components/Navigation/Navigation';
import { useState } from 'react';

export default function RestaurantCard({ entries, setAddress }) {
  const randomRestaurant = entries[Math.floor(Math.random() * entries.length)];
  const [newRestaurant, setNewRestaurant] = useState(randomRestaurant);
  function handleGetNewRestaurant() {
    setNewRestaurant(randomRestaurant);
  }
  return (
    <>
      <RandomPage>
        <SytledRestaurantCard>
          <h2>{newRestaurant.restaurant}</h2>
          <p id="text">
            {newRestaurant.address}{' '}
            <CopyButton copytext={newRestaurant.address} />
          </p>
          <h4>Description:</h4>
          <article>{newRestaurant.description}</article>
          <a href={newRestaurant.url}>
            <GoGlobe />
            Book your table here
          </a>
          <ul>
            {newRestaurant.categories.map((category, index) => (
              <StyledListItem key={index}>{category}</StyledListItem>
            ))}
          </ul>
        </SytledRestaurantCard>
        <Button onClick={handleGetNewRestaurant}>
          <GiPerspectiveDiceSixFacesRandom size={30} />
        </Button>
        <Link
          to="/GeoMap"
          onClick={() => setAddress(newRestaurant.address)}
        ></Link>
      </RandomPage>
      <Navigation />
    </>
  );
}

const RandomPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
`;

const SytledRestaurantCard = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  margin: 20px;
  padding: 10px;
  padding-left: 20px;
  border: solid 12px;
  @media screen and (min-width: 700px) {
    width: 800px;
  }
  @media screen and (min-width: 375px) {
    width: 320px;
  }

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
    gap: 12px;
  }
  a {
    color: gold;
  }
  article {
    margin-bottom: 12px;
  }
  h4 {
    margin-bottom: 12px;
  }
  p {
    margin: 0;
  }
  h2 {
    color: gold;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  font-size: smaller;
  border: solid 1px goldenrod;
  border-radius: 5px;
  padding: 2px;
  background: transparent;
  color: gold;
`;
