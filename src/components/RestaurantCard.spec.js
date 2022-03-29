import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import RestaurantCard from './RestaurantCard';

describe('RestaurantCard', () => {
  it('renders a Card with Name, Description and a Link', () => {
    render(
      <RestaurantCard
        name="Green Papaya"
        restaurantAddress="Grandweg 120, 22529 Hamburg"
        restaurantDescription="Bistro-Spezialitäten für den Hunger zwischendurch"
      />
    );

    const name = screen.getByRole('heading', /Green Papaya/i);
    const restaurantAddress = screen.getByRole(/Grandweg 120, 22529 Hamburg/i);
    const restaurantDescriptionHeader = screen.getByText(/description/i);
    const restaurantDescription = screen.getByText(
      'Bistro-Spezialitäten für den Hunger zwischendurch',
      { exact: false }
    );
    const restaurantLink = screen.getByRole('a', { name: /Link/i });
    const randomButton = screen.getByRole('button', { name: /random/i });

    expect(restaurantAddress).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(restaurantDescriptionHeader).toBeInTheDocument();
    expect(restaurantDescription).toBeInTheDocument();
    expect(restaurantLink).toBeInTheDocument();
    expect(randomButton).toBeInTheDocument();
  });
});
