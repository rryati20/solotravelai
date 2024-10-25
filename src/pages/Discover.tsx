import React from 'react';
import { Search, Filter } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';

export default function Discover() {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80",
      title: "Tokyo Adventure",
      location: "Japan",
      rating: 4.8,
      price: "1,299",
      duration: "7 days"
    },
    {
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80",
      title: "Paris Explorer",
      location: "France",
      rating: 4.7,
      price: "1,499",
      duration: "6 days"
    },
    {
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
      title: "Bali Retreat",
      location: "Indonesia",
      rating: 4.9,
      price: "899",
      duration: "8 days"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Discover Adventures</h1>
        <div className="flex space-x-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
}