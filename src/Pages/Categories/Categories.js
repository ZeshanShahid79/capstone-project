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
        <CategoryButton
          isActive={currentCategory === 'Pizza'}
          onClick={() => handleSetCurrentCategory('Pizza')}
        >
          Pizza
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Mediterranean'}
          onClick={() => handleSetCurrentCategory('Mediterranean')}
        >
          Mediterranean
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Asian'}
          onClick={() => handleSetCurrentCategory('Asian')}
        >
          Asian
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Fine Dining'}
          onClick={() => handleSetCurrentCategory('Fine Dining')}
        >
          Fine Dining
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Fish'}
          onClick={() => handleSetCurrentCategory('Fish')}
        >
          Fish
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Vegetarian'}
          onClick={() => handleSetCurrentCategory('Vegetarian')}
        >
          Vegetarian
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Indian'}
          onClick={() => handleSetCurrentCategory('Indian')}
        >
          Indian
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Burger'}
          onClick={() => handleSetCurrentCategory('Burger')}
        >
          Burger
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Cafe'}
          onClick={() => handleSetCurrentCategory('Cafe')}
        >
          Cafe
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Breakfast'}
          onClick={() => handleSetCurrentCategory('Breakfast')}
        >
          Breakfast
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Sushi'}
          onClick={() => handleSetCurrentCategory('Sushi')}
        >
          Sushi
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'German'}
          onClick={() => handleSetCurrentCategory('German')}
        >
          German
        </CategoryButton>
        <CategoryButton
          isActive={currentCategory === 'Vegan'}
          onClick={() => handleSetCurrentCategory('Vegan')}
        >
          Vegan
        </CategoryButton>
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
              <GoGlobe /> Book your table here
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
  gap: 40px;
  padding: 20px;
  margin-bottom: 100px;
  align-items: center;
`;
const RestaurantCard = styled.li`
  border: solid 12px;
  list-style: none;
  padding: 20px;
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

  a {
    color: gold;
    font-size: small;
  }
  article {
    margin-bottom: 12px;
  }
  p {
    margin: 0;
  }
  h4 {
    margin-bottom: 12px;
    font-size: small;
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

const CategoryButton = styled(Button)`
  color: ${({ isActive }) => (isActive ? `gold` : `white`)};
`;
