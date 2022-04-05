import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('renders a label and input with Name of input and a span with a conditional error mesasage', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        id="1"
        name="Restaurantname"
        type="text"
        errorMessage="Should not include any special characters"
        label="restaurantname"
        required={true}
        value="pattern"
        onChange={handleChange}
      />
    );

    const nameOfContactFormInput = screen.getByLabelText(/restaurantname/i);
    const errorSpan = screen.getByText(
      /Should not include any special characters/i
    );

    expect(nameOfContactFormInput).toBeInTheDocument();
    expect(errorSpan).toBeInTheDocument();
  });

  it('renders a section', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        id="1"
        name="Restaurantname"
        type="text"
        errorMessage="Should not include any special characters"
        label="restaurantname"
        required={true}
        value="pattern"
        onChange={handleChange}
      />
    );

    const section = screen.getByRole('textbox', { name: 'restaurantname' });

    expect(section).toBeInTheDocument();
  });
});
