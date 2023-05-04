import { useParams } from 'react-router-dom';

import styles from './price-history-card.module.scss';

import { usePriceHistory } from '@/hooks/api';

const PriceHistoryCard = () => {
  const { listingId } = useParams();
  const { priceHistory, isError, isLoading } = usePriceHistory(
    Number(listingId),
  );

  return (
    <div className={styles['container']}>
      <table className={styles['price-card']}>
        <tbody>
          <tr className={styles['price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>500 000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
