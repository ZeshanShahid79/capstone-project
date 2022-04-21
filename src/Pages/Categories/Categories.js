import { useState } from 'react';
import Button from '../../components/Button/Button';
import { GoGlobe } from 'react-icons/go';
import styled from 'styled-components';
import CopyButton from '../../components/Button/CopyButton';
import Navigation from '../../components/Navigation/Navigation';

export default function Categories({ entries, setAddress }) {
  const [currentCategory, setCurrentCategory] = useState('');

  const filteredRestaurants = currentCategory
    ? entries?.filter(restaurant =>
        restaurant.categories.includes(currentCategory)
      )
    : entries;

  return (
    <main>
      <ButtonSlideBar>
        <Button onClick={() => handleSetCurrentCategory('Pizza')}>Pizza</Button>
        <Button onClick={() => handleSetCurrentCategory('Mediterranean')}>
          Mediterranean
        </Button>
        <Button onClick={() => handleSetCurrentCategory('Asian')}>Asian</Button>
        <Button onClick={() => handleSetCurrentCategory('Fine Dining')}>
          Fine Dining
        </Button>
        <Button onClick={() => handleSetCurrentCategory('Fish')}>Fish</Button>
        <Button onClick={() => handleSetCurrentCategory('Vegetarian')}>
          Vegetarian
        </Button>
        <Button onClick={() => handleSetCurrentCategory('Indian')}>
          Indian
        </Button>
        <Button onClick={() => handleSetCurrentCategory('Burger')}>
          Burger
        </Button>
        <Button onClick={() => handleSetCurrentCategory('Cafe')}>Cafe</Button>
        <Button onClick={() => handleSetCurrentCategory('Breakfast')}>
          Breakfast
        </Button>
        <Button onClick={() => handleSetCurrentCategory('Sushi')}>Sushi</Button>
        <Button onClick={() => handleSetCurrentCategory('German')}>
          German
        </Button>
        <Button onClick={() => handleSetCurrentCategory('Vegan')}>Vegan</Button>
      </ButtonSlideBar>

      <RestaurantList>
        {filteredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant._id}>
            <h2>{restaurant.restaurant}</h2>
            <p> {restaurant.address}</p>
            <CopyButton copytext={restaurant.address} />
            <h4>Description:</h4>
            <article>{restaurant.description}</article>
            <a href={restaurant.url}>
              <GoGlobe /> Link
            </a>

            <CategoryTagList>
              {restaurant.categories.map((category, index) => (
                <CatgegoryTags key={index}>{category}</CatgegoryTags>
              ))}
            </CategoryTagList>
          </RestaurantCard>
        ))}
      </RestaurantList>

      <Navigation />
    </main>
  );

  function handleSetCurrentCategory(category) {
    setCurrentCategory(category);
  }
}

const RestaurantList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-bottom: 100px;
`;
const RestaurantCard = styled.li`
  border: solid 12px;
  list-style: none;
  padding: 20px;
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

  a {
    text-decoration: none;
    color: gold;
  }
  article {
    margin-bottom: 12px;
  }
`;

const CategoryTagList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 1fr;
  padding: 0;
  margin: 10px;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  width: auto;
  height: auto;
`;

const CatgegoryTags = styled.li`
  list-style: none;
  justify-self: start;
  font-size: smaller;
  border: solid 1px;
  border-radius: 5px;
  padding: 5px;
  white-space: nowrap;
  background: transparent;
  color: gold;
  border-color: goldenrod;
`;

const ButtonSlideBar = styled.ul`
  display: grid;
  margin: 0;
  padding: 20px;
  grid-template-columns: repeat(13, auto);
  grid-template-rows: 1fr;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
`;
