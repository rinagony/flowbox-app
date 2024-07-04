import { render, fireEvent, screen } from '@testing-library/react';
import CustomButton from './index';

describe('CustomButton', () => {
  it('renders with provided text', () => {
    const onClick = jest.fn();
    render(<CustomButton text="Click me" onClick={onClick} />);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<CustomButton text="Click me" onClick={onClick} />);
    const button = screen.getByRole('button', { name: /Click me/i });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with default styles', () => {
    const onClick = jest.fn();
    render(<CustomButton text="Click me" onClick={onClick} />);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toHaveStyle('margin: 1rem');
    expect(button).toHaveStyle('font-size: 1rem');
  });
});