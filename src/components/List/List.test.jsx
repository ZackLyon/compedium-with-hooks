import List from './List.jsx';
import { render } from '@testing-library/react';
import { data } from '../../data/data.js';

it('should match the screenshot of the displayed list of pokemon', () => {
  const { container } = render(<List pokedex={data} />);

  expect(container).toMatchSnapshot();
});
