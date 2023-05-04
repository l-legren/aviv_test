import React from 'react';

import styles from './listing-card.module.scss';

import { ListingCardProps } from '@/types/api';
import { dateConverter, priceConverter } from '@/utils/mappers';

const ListingCard: React.FC<ListingCardProps> = ({ ...listings }) => {
  return (
    <article className={styles['listing-card']}>
      <span className={styles['listing-card__price']}>
        {priceConverter(listings.latest_price_eur)}
      </span>
      <ul className={styles['listing-card__properties']}>
        <li className={styles['listing-card__properties-item']}>Studio</li>
        <li className={styles['listing-card__properties-item']}>
          {`${listings.surface_area_m2}m`}
          <sup>2</sup>
        </li>
        <li
          className={styles['listing-card__properties-item']}
        >{`${listings.rooms_count} rooms`}</li>
      </ul>
      <section className={styles['listing-card__address']}>
        <address>{`${listings.postal_address.street_address}, ${listings.postal_address.postal_code}, ${listings.postal_address.city}`}</address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>
          {listings.description.length > 0
            ? listings.description.length
            : 'No description available'}
        </p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          {`Ref: ${listings.id}`} <br />
          {`Last update: ${dateConverter(listings.updated_date)}`}
        </p>
        <a
          href={`/${listings.id}/prices`}
          className={styles['listing-card__link']}
        >
          See history &rarr;
        </a>
      </div>
    </article>
  );
};

export default ListingCard;
