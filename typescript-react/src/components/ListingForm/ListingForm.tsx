import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import styles from './listing-form.module.scss';

const ListingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (form: any) => {
    console.log('Registered form', form);
  };

  useEffect(() => {
    console.log('errors', errors);
  }, [errors]);

  return (
    <form className={styles['listing-form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['listing-form__card']}>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Price:</label>
          <input
            type="number"
            className={styles['listing-form__input-text']}
            {...register('latest_price_eur', {
              required: true,
              min: {
                value: 1,
                message: 'Please enter a valid number',
              },
            })}
          />
          {errors.latest_price_eur && (
            <span style={{ color: 'red' }}>
              {errors.latest_price_eur.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">Area:</label>
          <input
            type="number"
            className={styles['listing-form__input-text']}
            {...register('surface_area_m2', {
              required: true,
              min: {
                value: 1,
                message: 'Please enter a valid number',
              },
            })}
          />
          {errors.surface_area_m2 && (
            <span style={{ color: 'red' }}>
              {errors.surface_area_m2.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="street_address">Street address:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            {...register('street_address', {
              required: true,
              minLength: {
                value: 3,
                message: 'Enter the complete address please',
              },
            })}
          />
          {errors.street_address && (
            <span style={{ color: 'red' }}>
              {errors.street_address.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="building_type">Building type:</label>
          <select
            className={styles['listing-form__select']}
            {...register('building_type', { required: true })}
          >
            <option value="STUDIO">Studio</option>
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
          </select>
        </div>
        <button
          type="submit"
          className={styles['listing-form__button--submit']}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ListingForm;
