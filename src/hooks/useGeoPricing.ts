interface GeoPricingResult {
  price: number;
  currency: string;
  determinedRegion: string;
}

const USD_TO_EUR_RATE = 0.9;
const USD_TO_COP_RATE = 4000;
const DISCOUNT_PERCENTAGE = 0.30;

const EUROPEAN_COUNTRIES = [
  'AL', 'AD', 'AM', 'AT', 'BY', 'BE', 'BA', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK',
  'EE', 'ES', 'FO', 'FI', 'FR', 'GB', 'GE', 'GI', 'GR', 'HU', 'HR', 'IE', 'IS',
  'IT', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NO', 'NL', 'PL', 'PT', 'RO', 'RS',
  'SE', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA',
];

const LATIN_AMERICAN_COUNTRIES = [
  'AR', 'BO', 'BR', 'CL', 'CR', 'CU', 'DO', 'EC', 'SV', 'GT', 'HN', 'HT', 'MX',
  'NI', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE',
];

const useGeoPricing = (basePriceUSD: number, countryCode: string | null): GeoPricingResult => {
  let price = basePriceUSD;
  let currency = 'USD';
  let determinedRegion = 'Default';

  if (countryCode) {
    if (countryCode === 'US' || countryCode === 'CA') {
      determinedRegion = 'North America';
      // Price and currency remain USD
    } else if (EUROPEAN_COUNTRIES.includes(countryCode)) {
      determinedRegion = 'Europe';
      price = basePriceUSD * USD_TO_EUR_RATE;
      currency = 'EUR';
    } else if (countryCode === 'CO') {
      determinedRegion = 'Colombia';
      const discountedPriceUSD = basePriceUSD * (1 - DISCOUNT_PERCENTAGE);
      price = discountedPriceUSD * USD_TO_COP_RATE;
      currency = 'COP';
    } else if (LATIN_AMERICAN_COUNTRIES.includes(countryCode)) {
      determinedRegion = 'Latin America';
      price = basePriceUSD * (1 - DISCOUNT_PERCENTAGE);
      currency = 'USD'; // Discounted, but still USD
    }
    // If countryCode is not in any defined region, it defaults to basePriceUSD and 'USD'
  }

  return { price, currency, determinedRegion };
};

export default useGeoPricing;
