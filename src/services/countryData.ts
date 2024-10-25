import axios from 'axios';

export interface Country {
  name: string;
  code: string;
  capital: string;
  population: number;
  region: string;
  languages: string[];
  currency: {
    code: string;
    name: string;
    symbol: string;
  };
  flagUrl: string;
  coordinates: {
    lat: string;
    lon: string;
  };
  timezones: string[];
}

export async function fetchCountryData(query: string): Promise<Country[]> {
  if (!query.trim()) {
    return [];
  }

  try {
    // First try exact name match
    const exactMatchUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(query)}?fullText=true`;
    try {
      const exactResponse = await axios.get(exactMatchUrl);
      return transformCountryData(exactResponse.data);
    } catch (exactError) {
      // If exact match fails, try partial match
      const partialMatchUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`;
      const partialResponse = await axios.get(partialMatchUrl);
      return transformCountryData(partialResponse.data);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        // No results found
        return [];
      }
      console.error('API Error:', error.message);
    } else {
      console.error('Error fetching country data:', error);
    }
    return [];
  }
}

function transformCountryData(data: any[]): Country[] {
  return data.map((country: any): Country => {
    const currencyEntries = Object.entries(country.currencies || {});
    const firstCurrency = currencyEntries.length > 0 ? currencyEntries[0] : ['USD', { name: 'US Dollar', symbol: '$' }];
    
    return {
      name: country.name.common || '',
      code: country.cca3 || '',
      capital: Array.isArray(country.capital) ? country.capital[0] : 'N/A',
      population: typeof country.population === 'number' ? country.population : 0,
      region: country.region || '',
      languages: Object.values(country.languages || {}).map(lang => String(lang)),
      currency: {
        code: firstCurrency[0],
        name: firstCurrency[1].name || 'Unknown',
        symbol: firstCurrency[1].symbol || ''
      },
      flagUrl: country.flags?.svg || country.flags?.png || '',
      coordinates: {
        lat: country.latlng?.[0]?.toString() || '0',
        lon: country.latlng?.[1]?.toString() || '0'
      },
      timezones: Array.isArray(country.timezones) ? country.timezones : []
    };
  });
}

export async function searchCountries(query: string): Promise<Country[]> {
  return fetchCountryData(query);
}

export async function getCountryByCode(code: string): Promise<Country | null> {
  if (!code) {
    return null;
  }

  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`);
    const transformedData = transformCountryData(response.data);
    return transformedData[0] || null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return null;
      }
      console.error('API Error:', error.message);
    } else {
      console.error('Error fetching country data:', error);
    }
    return null;
  }
}