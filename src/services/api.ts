import axios from 'axios';

// OpenWeatherMap API for weather data
const WEATHER_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// ExchangeRate-API for currency conversion
const EXCHANGE_API_KEY = 'YOUR_EXCHANGERATE_API_KEY';
const EXCHANGE_BASE_URL = 'https://v6.exchangerate-api.com/v6';

// TimeZoneDB API for accurate time zone data
const TIMEZONE_API_KEY = 'YOUR_TIMEZONEDB_API_KEY';
const TIMEZONE_BASE_URL = 'http://api.timezonedb.com/v2.1';

// Travel Advisory API for safety information
const TRAVEL_ADVISORY_API_KEY = 'YOUR_TRAVEL_ADVISORY_API_KEY';
const TRAVEL_ADVISORY_BASE_URL = 'https://www.travel-advisory.info/api';

export const api = {
  async getWeather(lat: number, lon: number) {
    try {
      const response = await axios.get(`${WEATHER_BASE_URL}/forecast`, {
        params: {
          lat,
          lon,
          appid: WEATHER_API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Weather API error:', error);
      throw error;
    }
  },

  async getExchangeRate(baseCurrency: string, targetCurrency: string) {
    try {
      const response = await axios.get(
        `${EXCHANGE_BASE_URL}/${EXCHANGE_API_KEY}/pair/${baseCurrency}/${targetCurrency}`
      );
      return response.data;
    } catch (error) {
      console.error('Exchange rate API error:', error);
      throw error;
    }
  },

  async getTimeZone(lat: number, lon: number) {
    try {
      const response = await axios.get(`${TIMEZONE_BASE_URL}/get-time-zone`, {
        params: {
          key: TIMEZONE_API_KEY,
          format: 'json',
          by: 'position',
          lat,
          lng: lon
        }
      });
      return response.data;
    } catch (error) {
      console.error('TimeZone API error:', error);
      throw error;
    }
  },

  async getTravelAdvisory(countryCode: string) {
    try {
      const response = await axios.get(`${TRAVEL_ADVISORY_BASE_URL}/all`);
      return response.data.data[countryCode];
    } catch (error) {
      console.error('Travel Advisory API error:', error);
      throw error;
    }
  }
};