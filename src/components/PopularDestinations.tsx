import React from 'react';
import DestinationCard from './DestinationCard';
import { City, getPopularDestinations } from '../services/destinationData';
import { Country } from '../services/countryData';

interface PopularDestinationsProps {
  selectedCountry?: Country | null;
}

export default function PopularDestinations({ selectedCountry }: PopularDestinationsProps) {
  const destinations = selectedCountry ? getPopularDestinations(selectedCountry.code) : [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedCountry 
              ? `Popular Destinations in ${selectedCountry.name}`
              : 'Popular Destinations'}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover trending destinations loved by solo travelers
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.imageUrl}
              title={destination.name}
              location={destination.country}
              rating={destination.popularity / 20}
              price="Contact"
              duration="Flexible"
              description={destination.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}