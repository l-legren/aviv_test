import styles from './listings.module.scss';

import { ListingCard, ListingForm } from '@/components';
import { useListings } from '@/hooks/api';
import { ListingCardProps } from '@/types/api';

function Listings() {
  const {
    listings,
    isError,
    isLoading,
  }: { listings: ListingCardProps[]; isError: boolean; isLoading: boolean } =
    useListings();

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <ListingForm />
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          {isLoading && <div>Loading...</div>}
          {!isLoading &&
            !isError &&
            listings.map((el: ListingCardProps) => {
              return <ListingCard key={el.id} {...el} />;
            })}
          {isError && <div>An error occured fetching data...</div>}
        </section>
      </div>
    </main>
  );
}

export default Listings;
