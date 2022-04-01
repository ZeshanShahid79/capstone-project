import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders a label and an input', () => {
    render(<Input labelText="E-mail" name="E-mail" />);

    const input = screen.getByLabelText('E-mail');

    expect(input).toBeInTheDocument();
  });
});
