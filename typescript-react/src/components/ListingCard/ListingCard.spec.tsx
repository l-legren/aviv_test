import { render, screen } from '@testing-library/react';

import ListingCard from './ListingCard';

import { BuildingType } from '@/types/api';

const mockedEntry = {
  bedrooms_count: 2,
  building_type: BuildingType.House,
  contact_phone_number: '+219779210354',
  created_date: '2023-01-17T14:19:22.808738',
  description: '',
  id: 1,
  latest_price_eur: 710000.0,
  name: 'Mikhail Schmiedt',
  postal_address: {
    city: 'Berchtesgaden',
    country: 'DE',
    postal_code: '21810',
    street_address: 'Johan-Ernst-Ring 7',
  },
  rooms_count: 6,
  surface_area_m2: 167.0,
  updated_date: '2023-01-17T14:20:47.707666',
};

describe('<ListingCard /> test suite', () => {
  it('Should render the <ListingCard /> component', () => {
    render(<ListingCard {...mockedEntry} />);
  });

  it('Should have a clickable element to the history', () => {
    render(<ListingCard {...mockedEntry} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/1/prices');
  });

  it('Should display that description is not available', () => {
    render(<ListingCard {...mockedEntry} />);
    expect(screen.getByText('No description available')).toBeInTheDocument();
  });
});
