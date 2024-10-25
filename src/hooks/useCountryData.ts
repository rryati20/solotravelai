import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { Country } from '../services/countryData';

interface UseCountryDataProps {
  country: Country;
}

export function useCountryData({ country }: UseCountryDataProps) {
  // Get real-time weather data
  const weatherQuery = useQuery({
    queryKey: ['weather', country.code],
    queryFn: () => api.getWeather(
      parseFloat(country.coordinates.lat),
      parseFloat(country.coordinates.lon)
    ),
    enabled: !!country.coordinates
  });

  // Get current exchange rates
  const exchangeRateQuery = useQuery({
    queryKey: ['exchangeRate', country.currency.code],
    queryFn: () => api.getExchangeRate('USD', country.currency.code),
    enabled: !!country.currency.code
  });

  // Get accurate time zone data
  const timeZoneQuery = useQuery({
    queryKey: ['timeZone', country.code],
    queryFn: () => api.getTimeZone(
      parseFloat(country.coordinates.lat),
      parseFloat(country.coordinates.lon)
    ),
    enabled: !!country.coordinates
  });

  // Get travel advisory information
  const travelAdvisoryQuery = useQuery({
    queryKey: ['travelAdvisory', country.code],
    queryFn: () => api.getTravelAdvisory(country.code),
    enabled: !!country.code
  });

  return {
    weather: weatherQuery.data,
    exchangeRate: exchangeRateQuery.data,
    timeZone: timeZoneQuery.data,
    travelAdvisory: travelAdvisoryQuery.data,
    isLoading: 
      weatherQuery.isLoading || 
      exchangeRateQuery.isLoading || 
      timeZoneQuery.isLoading || 
      travelAdvisoryQuery.isLoading,
    isError:
      weatherQuery.isError ||
      exchangeRateQuery.isError ||
      timeZoneQuery.isError ||
      travelAdvisoryQuery.isError
  };
}