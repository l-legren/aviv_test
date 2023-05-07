import { render, screen } from '@testing-library/react';

import ListingForm from '.';

describe('<ListingForm />', () => {
  it('Should render the listing form component', () => {
    render(<ListingForm />);
  });

  it('form fields exist', () => {
    render(<ListingForm />);
    const nameInput = screen.getByRole('button', { name: /Create/i });
    const optionInput = screen.getByRole('option', {
      name: /STUDIO/i,
    });
    expect(nameInput).toBeInTheDocument();
    expect(optionInput).toBeInTheDocument();
  });
});
