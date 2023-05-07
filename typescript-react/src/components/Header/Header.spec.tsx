import { render, screen } from '@testing-library/react';

import Header from '.';

describe('<Header />', () => {
  it('Should render the header component', () => {
    render(<Header />);
  });
  it('renders a logo', () => {
    render(<Header />);
    const imageAviv = screen.getByRole('img');
    expect(imageAviv).toBeInTheDocument();
  });

  it('it takes full width', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    const headerStyle = window.getComputedStyle(headerElement);
    expect(headerStyle.display).toBe('block');
  });
});
