import useSWR from 'swr';

import { API } from '@/services/api';
import { fetcher } from '@/utils/fetch';

export const useListings = () => {
  const { data, error, isLoading } = useSWR(API.LISTINGS, fetcher);

  return {
    listings: data,
    isLoading,
    isError: error,
  };
};

export const usePriceHistory = (id: number) => {
  const { data, error, isLoading } = useSWR(
    () => (id ? API.PRICE_HISTORY(id) : null),
    fetcher,
  );

  return {
    priceHistory: data,
    isLoading,
    isError: error,
  };
};
