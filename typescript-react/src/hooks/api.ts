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

export const usePriceHistory = (id: string) => {
  const { data, error, isLoading } = useSWR(
    () => API.PRICE_HISTORY(id),
    fetcher,
  );

  return {
    priceHistory: data,
    isLoading,
    isError: error,
  };
};
