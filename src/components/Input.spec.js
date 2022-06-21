import { render, screen } from '@testing-library/react';
import Input from './Input';

it('has is-invalid class for input when help is set', () => {
  render(<Input id="test" label="Dummy" help="Error message" />);
  const input = screen.getByLabelText('Dummy');
  expect(input.classList).toContain('is-invalid');
});

it('has invalid-feedback class for span when help is set', () => {
  render(<Input help="Error message" />);
  const span = screen.getByText('Error message');
  expect(span.classList).toContain('invalid-feedback');
});

it('does not have is-invalid class for input when help is not set', () => {
  render(<Input id="test" label="Dummy"/>);
  const input = screen.getByLabelText('Dummy');
  expect(input.classList).not.toContain('is-invalid');
});
