import { render, screen } from '@testing-library/react';

import Listings from './Listings';

import { useListings } from '@/hooks/api';
import { BuildingType } from '@/types/api';

jest.mock('@/hooks/api');

describe('<Listings /> test suite', () => {
  const mockedEntry = [
    {
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
    },
  ];
  beforeEach(() => {
    (useListings as jest.Mock).mockReturnValueOnce({
      listings: mockedEntry,
      isLoading: false,
      isError: false,
    });
  });

  it('Should render the <Listings /> and find a post and a form button', () => {
    render(<Listings />);

    const listing = screen.getByTestId('mocked-description');
    expect(listing).toBeInTheDocument();

    const nameInput = screen.getByRole('button', { name: /Create/i });
    expect(nameInput).toBeInTheDocument();
  });
});
