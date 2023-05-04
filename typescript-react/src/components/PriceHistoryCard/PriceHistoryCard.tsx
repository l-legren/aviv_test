import styles from './price-history-card.module.scss';

import { PriceHistoryCardProps } from '@/containers/PricesHistory/PricesHistory';
import { dateConverter, priceConverter } from '@/utils/mappers';

const PriceHistoryCard = ({
  price_eur,
  created_date,
}: PriceHistoryCardProps) => {
  return (
    <div className={styles['container']}>
      <table className={styles['price-card']}>
        <tbody>
          <tr className={styles['price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          <tr>
            <td>{dateConverter(created_date)}</td>
            <td>{priceConverter(price_eur)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
