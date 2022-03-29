import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
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
    expect(card).toHaveTextContent(
      'Green Papaya',
      'Grandweg 120, 22529 Hamburg',
      'Bistro-Spezialitäten für den Hunger zwischendurch'
    );
  });
});
