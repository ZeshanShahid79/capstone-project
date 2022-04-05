import { render, screen } from '@testing-library/react';
import RestaurantCard from './RestaurantCard';

describe('RestaurantCard', () => {
  it('renders a Card with Name, Address, Description and a Link', () => {
    const randomRestaurant = {
      restaurant: 'Green Papaya',
      address: 'Grandweg 120, 22529 Hamburg',
      description: 'Bistro-Spezialitäten für den Hunger zwischendurch',
      url: 'test',
    };

    render(<RestaurantCard randomRestaurant={randomRestaurant} />);

    const card = screen.getByRole('article');
    const link = screen.getByRole('link');

    expect(card).toContainElement(link);
    expect(card).toHaveTextContent('Green Papaya');
    expect(card).toHaveTextContent('Grandweg 120, 22529 Hamburg');
    expect(card).toHaveTextContent(
      'Bistro-Spezialitäten für den Hunger zwischendurch'
    );
  });
});
