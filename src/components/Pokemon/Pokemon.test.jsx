import Pokemon from './Pokemon.jsx';
import { data } from '../../data/data.js';
import { render } from '@testing-library/react';

it('should match the screenshot of the single pokemon', () => {
  const { container } = render(<Pokemon poke={data[0]} />);

  expect(container).toMatchSnapshot();
});
