import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './listing-form.module.scss';

import { API } from '@/services/api';
import { BuildingType, NewListingEntryPostRequest } from '@/types/api';

const ListingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bedrooms_count: 1,
      building_type: BuildingType.Studio,
      contact_phone_number: '',
      created_date: '',
      description: '',
      id: 0,
      latest_price_eur: 0,
      name: '',
      postal_address: {
        city: '',
        country: '',
        postal_code: '',
        street_address: '',
      },
      rooms_count: 1,
      surface_area_m2: 1,
      updated_date: '',
    } as NewListingEntryPostRequest,
    mode: 'onSubmit',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = (form: NewListingEntryPostRequest) => {
    fetch(API.NEW_ENTRY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        console.log('Form submitted successfully', response);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting form', error);
      });
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 5000);
    }
  }, [isSubmitted]);

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
            {...register('postal_address.street_address', {
              required: true,
              minLength: {
                value: 3,
                message: 'Enter the complete address please',
              },
            })}
          />
          {errors.postal_address?.street_address && (
            <span style={{ color: 'red' }}>
              {errors.postal_address?.street_address.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="building_type">Building type:</label>
          <select
            className={styles['listing-form__select']}
            {...register('building_type', { required: true })}
          >
            <option value={BuildingType.Studio}>Studio</option>
            <option value={BuildingType.Apartment}>Apartment</option>
            <option value={BuildingType.House}>House</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitted}
          className={styles['listing-form__button--submit']}
        >
          Create
        </button>
        {isSubmitted && <p>Post has been submitted successfully</p>}
      </div>
    </form>
  );
};

export default ListingForm;
