import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('renders a label and input with Name of input and a span with a conditional errormesasage', () => {
    render(<FormInput label="Restaurantname" />);

    const nameOfContactFormInput = screen.getByLabelText(/restaurantname/i);

    expect(nameOfContactFormInput).toBeInTheDocument();
  });
});
