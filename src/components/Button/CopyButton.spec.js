import { render, screen } from '@testing-library/react';
import CopyButton from './CopyButton';

describe('CopyButton', () => {
  it('renders a Button which copies a text', () => {
    const handleCopyClick = jest.fn();
    render(<CopyButton onClick={handleCopyClick} copyText={'copyText'} />);
    const copyButton = screen.getByRole('button', { name: '' });

    expect(copyButton).toBeInTheDocument();
  });
});
