import Compendium from './Compendium.jsx';
import { render, screen } from '@testing-library/react';

it('should have a loading screen', () => {
  render(<Compendium />);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});
