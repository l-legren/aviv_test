import { render, screen } from '@testing-library/react';

import Listings from './Listings';

describe('<Listings /> test suite', () => {
  it('Should render the <Listings /> and find the form button inside', async () => {
    render(<Listings />);
    const nameInput = screen.getByRole('button', { name: /Create/i });
    expect(nameInput).toBeInTheDocument();
  });

  // TODO mock fetch behaviour
});
