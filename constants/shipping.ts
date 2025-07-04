export const TAPE_PRICE = 5;
export const SHIPPING_COST = 0; // Free shipping
export const SHIPPING_ORIGIN = {
  city: 'Orlando',
  state: 'Florida',
  country: 'USA',
};

// Address where customers should send their VHS tapes
export const CUSTOMER_SHIP_TO_ADDRESS = {
  name: "Atomedia Productions LLC",
  address: "1234 Digital Drive",
  city: "Winter Park",
  state: "FL",
  zipCode: "32789",
  country: "USA"
};

// Return address for shipping labels (where tapes get sent FROM customer TO us)
export const RETURN_ADDRESS = {
  name: 'Atomedia Productions LLC',
  street: 'Goin Postal',
  city: 'Winter Park',
  state: 'FL',
  zip: '32789',
  country: 'USA',
};

// Simplified shipping rate calculation based on zones
// In a real app, this would call the UPS API: https://www.ups.com/mobile/ratetnthome?loc=en_US
export const SHIPPING_RATES = {
  local: 5, // Within Florida
  regional: 8, // Southeast US
  national: 12, // Rest of US
  international: 25, // International
};

export const getShippingRate = (state: string, country: string): number => {
  if (country !== 'USA') return SHIPPING_RATES.international;
  if (state === 'FL') return SHIPPING_RATES.local;
  if (['GA', 'AL', 'SC', 'NC', 'TN', 'MS'].includes(state)) return SHIPPING_RATES.regional;
  return SHIPPING_RATES.national;
};

export const SHIPPING_LABEL_URL = "https://www.usps.com/ship/";