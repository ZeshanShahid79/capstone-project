import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('renders a label and input with Name of input and a span with a conditional errormesasage', () => {
    render(
      <FormInput
        id="1"
        name="Restaurantname"
        type="text"
        errorMessage="Should not include any special characters"
        label="restaurantname"
        required={true}
        value="pattern"
      />
    );

    const nameOfContactFormInput = screen.getByLabelText(/restaurantname/i);

    expect(nameOfContactFormInput).toBeInTheDocument();
  });
});
