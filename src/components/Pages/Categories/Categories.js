import { useState } from 'react';
import { restaurants } from '../../../restaurants';
import Button from '../../Button/Button';

export default function Categories() {
  const [currentCategory, setCurrentCategory] = useState('');

  const filteredRestaurants = currentCategory
    ? restaurants?.filter(restaurant =>
        restaurant.categories.includes(currentCategory)
      )
    : restaurants;

  return (
    <main>
      <ul>
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
      </ul>
      <ul>
        {filteredRestaurants.map((restaurant, index) => (
          <li key={index}>
            <h2>{restaurant.restaurant}</h2>
            <p> {restaurant.address}</p>
            <article>{restaurant.description}</article>
            <a href={restaurant.url}>Link</a>

            <ul>
              {restaurant.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
  // beim clicken soll der namem in einem state gespeichert werden
  // dann restaraunt.categories.filter(category => category === currentCategrory),map.....
  function handleSetCurrentCategory(category) {
    setCurrentCategory(category);
  }
}
