import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search, X } from 'lucide-react';
import { fetchCountryData, type Country } from '../services/countryData';

interface CountrySearchProps {
  onCountrySelect: (country: Country) => void;
}

export default function CountrySearch({ onCountrySelect }: CountrySearchProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<number>();
  const currentQuery = useRef<string>('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const searchCountries = async () => {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
        setSuggestions([]);
        setIsOpen(false);
        setError(null);
        return;
      }

      // Store the current query to prevent race conditions
      currentQuery.current = trimmedQuery;

      try {
        setIsLoading(true);
        setError(null);
        const results = await fetchCountryData(trimmedQuery);
        
        // Only update if this is still the current query
        if (currentQuery.current === trimmedQuery) {
          setSuggestions(results);
          setIsOpen(true);
          
          if (results.length === 0) {
            setError(`No countries found matching "${trimmedQuery}"`);
          }
        }
      } catch (err) {
        if (currentQuery.current === trimmedQuery) {
          setError('Failed to fetch country data. Please try again.');
          setSuggestions([]);
        }
      } finally {
        if (currentQuery.current === trimmedQuery) {
          setIsLoading(false);
        }
      }
    };

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = window.setTimeout(searchCountries, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query]);

  const handleSelect = (country: Country) => {
    setQuery(country.name);
    onCountrySelect(country);
    setIsOpen(false);
    setError(null);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setError(null);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a country..."
          className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          onFocus={() => query && setIsOpen(true)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {error && (
        <div className="mt-2 text-sm text-red-500 bg-red-50 p-2 rounded-lg">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="mt-2 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg flex items-center">
          <div className="animate-spin h-4 w-4 border-2 border-indigo-500 rounded-full border-t-transparent mr-2"></div>
          Searching...
        </div>
      )}

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto border border-gray-200">
          {suggestions.map((country) => (
            <button
              key={country.code}
              onClick={() => handleSelect(country)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
            >
              <img
                src={country.flagUrl}
                alt={`${country.name} flag`}
                className="w-6 h-4 object-cover rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="flex-1">{country.name}</span>
              <span className="text-sm text-gray-500">{country.region}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}