import React from 'react';
import { Country } from '../services/countryData';

interface CountryTooltipProps {
  country: Country;
  position: { x: number; y: number };
}

export default function CountryTooltip({ country, position }: CountryTooltipProps) {
  return (
    <div
      className="fixed z-50 bg-white rounded-lg shadow-lg p-4 max-w-sm pointer-events-none"
      style={{
        left: position.x + 10,
        top: position.y + 10,
      }}
    >
      <h3 className="text-lg font-semibold">{country.name}</h3>
      <div className="mt-2 space-y-1 text-sm">
        <p><span className="font-medium">Capital:</span> {country.capital}</p>
        <p><span className="font-medium">Language:</span> {country.language.name}</p>
        <p><span className="font-medium">Currency:</span> {country.currency.name} ({country.currency.symbol})</p>
        <p><span className="font-medium">Region:</span> {country.region}</p>
      </div>
    </div>
  );
}