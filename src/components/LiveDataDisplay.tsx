import React from 'react';
import { Clock, Thermometer, DollarSign, Globe } from 'lucide-react';
import LiveClock from 'react-live-clock';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useCountryData } from '../hooks/useCountryData';

interface LiveDataDisplayProps {
  country: {
    name: string;
    timezone: string;
    currency: {
      code: string;
      symbol: string;
    };
  };
}

export default function LiveDataDisplay({ country }: LiveDataDisplayProps) {
  const { weather, exchangeRate, timeZone, isLoading } = useCountryData({ country });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {/* Local Time */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="h-5 w-5 text-indigo-600" />
          <h3 className="text-sm font-medium text-gray-700">Local Time</h3>
        </div>
        <div className="text-2xl font-bold">
          <LiveClock format="HH:mm:ss" ticking timezone={country.timezone} />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {format(new Date(), 'EEEE, MMMM do')}
        </p>
      </div>

      {/* Weather */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <Thermometer className="h-5 w-5 text-indigo-600" />
          <h3 className="text-sm font-medium text-gray-700">Current Weather</h3>
        </div>
        {isLoading ? (
          <div className="animate-pulse h-8 bg-gray-200 rounded" />
        ) : weather ? (
          <>
            <div className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</div>
            <p className="text-sm text-gray-500 capitalize">{weather.weather[0].description}</p>
          </>
        ) : (
          <p className="text-sm text-gray-500">Weather data unavailable</p>
        )}
      </div>

      {/* Exchange Rate */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <DollarSign className="h-5 w-5 text-indigo-600" />
          <h3 className="text-sm font-medium text-gray-700">Exchange Rate</h3>
        </div>
        {isLoading ? (
          <div className="animate-pulse h-8 bg-gray-200 rounded" />
        ) : exchangeRate ? (
          <>
            <div className="text-2xl font-bold">
              1 USD = {exchangeRate.rate} {country.currency.code}
            </div>
            <p className="text-sm text-gray-500">Updated live</p>
          </>
        ) : (
          <p className="text-sm text-gray-500">Exchange rate unavailable</p>
        )}
      </div>

      {/* Language and Emergency */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <Globe className="h-5 w-5 text-indigo-600" />
          <h3 className="text-sm font-medium text-gray-700">Quick Info</h3>
        </div>
        <div className="space-y-1">
          <p className="text-sm">
            <span className="font-medium">Emergency:</span> {country.emergency || '112/911'}
          </p>
          <p className="text-sm">
            <span className="font-medium">Currency:</span> {country.currency.symbol}
          </p>
        </div>
      </div>
    </motion.div>
  );
}