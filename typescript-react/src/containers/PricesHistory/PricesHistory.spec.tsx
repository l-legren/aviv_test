import React from 'react';
import { render, screen } from '@testing-library/react';

import PricesHistory from './PricesHistory';

import { usePriceHistory } from '@/hooks/api';
import { dateConverter, priceConverter } from '@/utils/mappers';

jest.mock('@/hooks/api');

describe('<PricesHistory />', () => {
  const mockedData = [
    {
      created_date: '2022-10-20T12:56:33.078282',
      price_eur: 150000,
    },
    {
      created_date: '2022-11-22T13:56:33.078282',
      price_eur: 160000,
    },
  ];

  beforeEach(() => {
    (usePriceHistory as jest.Mock).mockReturnValueOnce({
      priceHistory: mockedData,
      isError: false,
      isLoading: false,
    });
  });

  it('renders the component with mocked prices and dates', () => {
    render(<PricesHistory />);

    const datesList = screen.getAllByTestId('date');
    expect(datesList).toHaveLength(2);
    expect(datesList[0].textContent).toContain(
      dateConverter(mockedData[0].created_date),
    );

    const pricesList = screen.getAllByTestId('price');
    expect(pricesList).toHaveLength(2);
    expect(pricesList[0].textContent).toContain(
      priceConverter(mockedData[0].price_eur),
    );
  });
});
