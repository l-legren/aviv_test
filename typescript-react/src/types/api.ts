/*=============================================
=            TYPES COMING FROM API            =
=============================================*/

/**
 *
 * Ideally we should generate models automatically with some type generation tool like codegen
 * Here the models are being added manually
 *
 */

/*=============================================
=            Listings                         =
=============================================*/

// {
//   "bedrooms_count": 2,
//   "building_type": "STUDIO",
//   "contact_phone_number": "+219779210354",
//   "created_date": "2023-01-17T14:19:22.808738",
//   "description": "",
//   "id": 1,
//   "latest_price_eur": 710000.0,
//   "name": "Mikhail Schmiedt",
//   "postal_address": {
//     "city": "Berchtesgaden",
//     "country": "DE",
//     "postal_code": "21810",
//     "street_address": "Johan-Ernst-Ring 7"
//   },
//   "rooms_count": 6,
//   "surface_area_m2": 167.0,
//   "updated_date": "2023-01-17T14:20:47.707666"
// }

export interface PostalAddressProps {
  city: string;
  country: string;
  postalCode: string;
  streetAddress: string;
}

export interface ListingCardProps {
  bedroomsCount: number;
  buildingType: string;
  contactPhoneNumber: string;
  createdDate: Date;
  description: string;
  id: number;
  latestPriceEur: number;
  name: string;
  postalAddress: PostalAddressProps;
  roomsCount: number;
  surfaceAreaM2: number;
  updatedDate: Date;
}

/*=====  End Listings Types  ======*/
