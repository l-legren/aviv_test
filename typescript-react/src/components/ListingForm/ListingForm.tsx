import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './listing-form.module.scss';

import { API } from '@/services/api';
import {
  BuildingType,
  CountryCode,
  NewListingEntryPostRequest,
} from '@/types/api';

const ListingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      postal_address: {
        city: '',
        country: CountryCode.Germany,
        postal_code: '',
        street_address: '',
      },
      description: '',
      building_type: BuildingType.Studio,
      latest_price_eur: 0,
      surface_area_m2: 0,
      rooms_count: 1,
      bedrooms_count: 0,
      contact_phone_number: '',
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            {...register('name', {
              required: true,
              minLength: {
                value: 1,
                message: 'Please enter a longer name',
              },
            })}
          />
          {errors.name && (
            <span style={{ color: 'red' }}>
              {errors.name.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            {...register('description', {
              required: true,
              minLength: {
                value: 10,
                message: 'Please consider a longer description',
              },
            })}
          />
          {errors.description && (
            <span style={{ color: 'red' }}>
              {errors.description.message as string}
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
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="bedrooms_count">Number of rooms:</label>
          <input
            type="number"
            className={styles['listing-form__input-text']}
            {...register('rooms_count', {
              required: true,
              min: {
                value: 1,
                message: 'Please enter a valid number of rooms',
              },
            })}
          />
          {errors.rooms_count && (
            <span style={{ color: 'red' }}>
              {errors.rooms_count.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="bedrooms_count">Number of bedrooms:</label>
          <input
            type="number"
            className={styles['listing-form__input-text']}
            {...register('bedrooms_count', {
              required: true,
              min: {
                value: 0,
                message: 'Please enter a valid number of bedrooms',
              },
            })}
          />
          {errors.bedrooms_count && (
            <span style={{ color: 'red' }}>
              {errors.bedrooms_count.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="contact_phone_number">Phone number:</label>
          <input
            type="phone"
            className={styles['listing-form__input-text']}
            {...register('contact_phone_number', {
              required: true,
              pattern: {
                value: /^\+[1-9]\d{1,14}$/,
                message: "The input doesn't match a phone number",
              },
            })}
          />
          {errors.contact_phone_number && (
            <span style={{ color: 'red' }}>
              {errors.contact_phone_number.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Price:</label>
          <input
            type="number"
            className={styles['listing-form__input-text']}
            {...register('latest_price_eur', {
              required: true,
              min: {
                value: 0,
                message: 'Please enter a valid price',
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
                value: 0,
                message: 'Please enter a valid area',
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
          <label htmlFor="postal_address.street_address">Street address:</label>
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
          <label htmlFor="postal_address.postal_code">Postal Code:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            {...register('postal_address.postal_code', {
              required: true,
              minLength: {
                value: 1,
                message: 'Please enter a valid postal code',
              },
            })}
          />
          {errors.postal_address?.postal_code && (
            <span style={{ color: 'red' }}>
              {errors.postal_address?.postal_code.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_address.city">City:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            {...register('postal_address.city', {
              required: true,
              minLength: {
                value: 1,
                message: 'Please enter a valid city',
              },
            })}
          />
          {errors.postal_address?.city && (
            <span style={{ color: 'red' }}>
              {errors.postal_address?.city.message as string}
            </span>
          )}
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_address.country">Country:</label>
          <select
            className={styles['listing-form__select']}
            {...register('postal_address.country', { required: true })}
          >
            <option value={CountryCode.Belgium}>Belgium</option>
            <option value={CountryCode.Germany}>Germany</option>
            <option value={CountryCode.France}>France</option>
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
