import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('renders a Form with inputs for Name, Address, Telephonenumber,Submitfunction and Email and a Textarea', () => {
    render(<ContactForm />);
    const contactForm = screen.getByRole('form');
    const restaurantNameInput = screen.getByLabelText(/restaurantname/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const emailInput = screen.getByLabelText(/E-Mail/i);
    const telephoneInput = screen.getByLabelText(/Telephone/i);
    const messageLabel = screen.getByText(/Message/i);
    const submitInput = screen.getByTestId(/Message/i);

    expect(restaurantNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(telephoneInput).toBeInTheDocument();
    expect(submitInput).toHaveAttribute('type', 'submit');
    expect(contactForm).toContainElement(messageLabel);
  });

  it('submits form data when every Input is filled out', () => {
    const handleSubmit = jest.fn();
    render(<ContactForm onSubmit={handleSubmit} />);

    const restaurantNameInput = screen.getByLabelText(/restaurantname/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const emailInput = screen.getByLabelText(/E-Mail/i);
    const telephoneInput = screen.getByLabelText(/Telephone/i);
    const submitInput = screen.getByTestId(/Message/i);

    userEvent.type(restaurantNameInput, 'Burger King');
    userEvent.type(addressInput, 'Grandweg 120');
    userEvent.type(emailInput, 'abc@hotmail.de');
    userEvent.type(telephoneInput, '1234567');
    userEvent.click(submitInput);

    expect(handleSubmit).toHaveBeenCalledWith({
      Restaurantname: 'Burger King',
      Address: 'Grandweg 154',
      EMail: 'acd@acd.de',
      Telephone: '123',
    });
  });
});
