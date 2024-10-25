import React from 'react';
import { Globe, DollarSign, Languages, MapPin, Clock } from 'lucide-react';
import { Country } from '../services/countryData';

interface CountryDetailsProps {
  country: Country;
}

export default function CountryDetails({ country }: CountryDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <span className="text-2xl">{country.emoji}</span>
        <h2 className="text-xl font-semibold">{country.name}</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-gray-600">Capital: {country.capital}</p>
            <p className="text-gray-600">Region: {country.region}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Languages className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h3 className="font-medium">Language</h3>
            <p className="text-gray-600">{country.language.name}</p>
            {country.language.commonPhrases && (
              <div className="mt-2">
                <p className="text-sm font-medium">Common Phrases:</p>
                <ul className="text-sm text-gray-600">
                  {Object.entries(country.language.commonPhrases).map(([key, value]) => (
                    <li key={key} className="mt-1">
                      <span className="font-medium">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <DollarSign className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h3 className="font-medium">Currency</h3>
            <p className="text-gray-600">
              {country.currency.name} ({country.currency.symbol})
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Tipping custom: {country.tipping || 'Information not available'}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h3 className="font-medium">Practical Information</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Time Zone: {country.timeZone}</li>
              <li>Voltage: {country.voltage}</li>
              <li>Driving Side: {country.drivingSide}</li>
              <li>Water Safety: {country.waterSafety}</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Globe className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h3 className="font-medium">Weather</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Best time to visit: {country.weather.bestTimeToVisit}</p>
              <p>Rainy period: {country.weather.rainyPeriod}</p>
              {country.weather.seasons.summer && (
                <p>Summer: {country.weather.seasons.summer.temp}</p>
              )}
              {country.weather.seasons.winter && (
                <p>Winter: {country.weather.seasons.winter.temp}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}