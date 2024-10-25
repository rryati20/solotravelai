import React, { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Country } from '../services/countryData';
import { City, getPopularDestinations } from '../services/destinationData';

interface CitySelectorProps {
  selectedCountry: Country | null;
  onCitySelect: (city: City) => void;
}

export default function CitySelector({ selectedCountry, onCitySelect }: CitySelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedCountry) {
      const destinations = getPopularDestinations(selectedCountry.code);
      setCities(destinations);
      setFilteredCities(destinations);
      setSearchQuery('');
    } else {
      setCities([]);
      setFilteredCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    const filtered = cities.filter(city => 
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [searchQuery, cities]);

  if (!selectedCountry) {
    return null;
  }

  return (
    <div className="mt-4">
      <label className="block text-lg font-medium text-gray-900 mb-3">
        Popular Destinations in {selectedCountry.name}
      </label>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search destinations..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="mt-2 space-y-2">
        {filteredCities.map((city) => (
          <button
            key={city.id}
            onClick={() => {
              onCitySelect(city);
              setSearchQuery(city.name);
            }}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
          >
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900">{city.name}</div>
                <div className="text-sm text-gray-500 mt-1">{city.description}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {city.highlights.slice(0, 3).join(' • ')}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}