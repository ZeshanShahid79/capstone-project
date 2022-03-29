import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import RestaurantCard from './RestaurantCard';

describe('RestaurantCard', () => {
  it('renders a Card with Name, Description and a Link', () => {
    render(<RestaurantCard />);

    const restaurantName = screen.getByText('Green Papaya', { exact: false });
    const restaurantAddress = screen.getByText('Grandweg 120, 22529 Hamburg', {
      exact: false,
    });
    const restaurantDescriptionHeader = screen.getByText(/description/i);
    const restaurantDescription = screen.getByText(
      'Bistro-Spezialitäten für den Hunger zwischendurch',
      { exact: false }
    );
    const restaurantLink = screen.getByRole('a', { name: /Link/i });
    const randomButton = screen.getByRole('button', { name: /random/i });

    expect(restaurantAddress).toBeInTheDocument();
    expect(restaurantName).toBeInTheDocument();
    expect(restaurantDescriptionHeader).toBeInTheDocument();
    expect(restaurantDescription).toBeInTheDocument();
    expect(restaurantLink).toBeInTheDocument();
    expect(randomButton).toBeInTheDocument();
  });
});
