import useSWR from 'swr';

import { API_LISTINGS } from '@/utils/api';
import { fetcher } from '@/utils/fetch';

export const useListings = () => {
  const { data, error, isLoading } = useSWR(API_LISTINGS, fetcher);

  return {
    listings: data,
    isLoading,
    isError: error,
  };
};
