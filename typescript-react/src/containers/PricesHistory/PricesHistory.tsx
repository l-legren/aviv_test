import { useEffect } from 'react';
import PricesHistoryCard from '@components/PriceHistoryCard';
import { useParams } from 'react-router-dom';

import styles from './prices-history.module.scss';

import { usePriceHistory } from '@/hooks/api';
import { ApiResponsePriceHistory } from '@/types/api';

export interface PriceHistoryCardProps extends ApiResponsePriceHistory {}

const PricesHistory = () => {
  const { listingId } = useParams();
  const {
    priceHistory,
    isError,
    isLoading,
  }: {
    priceHistory: PriceHistoryCardProps[];
    isError: boolean;
    isLoading: boolean;
  } = usePriceHistory(Number(listingId));

  useEffect(() => {
    console.log('listingsId', listingId);
  }, [listingId]);

  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      {isError && <div>An error occured while fetching data...</div>}
      {isLoading && <div>Loading...</div>}
      <ul className={styles['list']}>
        {!isLoading &&
          !isError &&
          priceHistory.map((el: PriceHistoryCardProps) => (
            <li key={listingId}>
              <PricesHistoryCard {...el} />
            </li>
          ))}
      </ul>

      <a href="/" className={styles['link']}>
        &larr; Back Home
      </a>
    </div>
  );
};
export default PricesHistory;
