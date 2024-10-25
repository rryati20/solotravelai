import React from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

interface WeatherCardProps {
  weather: any; // Replace with proper type from OpenWeatherMap API
  isLoading: boolean;
}

export default function WeatherCard({ weather, isLoading }: WeatherCardProps) {
  if (isLoading) {
    return <Skeleton height={200} />;
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className="h-12 w-12 text-yellow-400" />;
      case 'clouds':
        return <Cloud className="h-12 w-12 text-gray-400" />;
      case 'rain':
        return <CloudRain className="h-12 w-12 text-blue-400" />;
      case 'snow':
        return <Snowflake className="h-12 w-12 text-blue-200" />;
      default:
        return <Sun className="h-12 w-12 text-yellow-400" />;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-white"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</h3>
          <p className="text-lg opacity-90">{weather.weather[0].description}</p>
        </div>
        {getWeatherIcon(weather.weather[0].main)}
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm opacity-75">Humidity</p>
          <p className="text-lg font-semibold">{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="text-sm opacity-75">Wind</p>
          <p className="text-lg font-semibold">{Math.round(weather.wind.speed)} km/h</p>
        </div>
        <div>
          <p className="text-sm opacity-75">Feels Like</p>
          <p className="text-lg font-semibold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </motion.div>
  );
}