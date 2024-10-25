export interface CountryData {
  name: string;
  code: string;
  capital: string;
  population: number;
  region: string;
  languages: string[];
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  flagUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timezones: string[];
}