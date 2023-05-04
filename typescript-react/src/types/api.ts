/*=============================================
=            TYPES COMING FROM API            =
=============================================*/

/**
 *
 * Ideally we should generate models automatically with some type generation tool like codegen
 * Here the models are being added manually. Also models should camelcased from the BE
 *
 */

/*=============================================
=            Listings                         =
=============================================*/

export interface PostalAddressProps {
  city: string;
  country: string;
  postal_code: string;
  street_address: string;
}

export interface ApiResponseListingCard {
  bedrooms_count: number;
  building_type: string;
  contact_phone_number: string;
  created_date: string;
  description: string;
  id: number;
  latest_price_eur: number;
  name: string;
  postal_address: PostalAddressProps;
  rooms_count: number;
  surface_area_m2: number;
  updated_date: string;
}

export interface ApiResponsePriceHistory {
  created_date: string;
  price_eur: number;
}

/*=====  End Listings Types  ======*/
