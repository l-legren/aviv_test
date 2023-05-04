// Here should display some kind of ternary operator depending on the environment, assuming that consume different endpoints
const apiEndpoint = 'http://localhost:8080';

export const API = {
  LISTINGS: () => `${apiEndpoint}/listings`,
  PRICE_HISTORY: (id: number) => `${apiEndpoint}/listings/${id}/prices`,
};
