import React from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  duration: string;
  description?: string;
}

export default function DestinationCard({
  image,
  title,
  location,
  rating,
  price,
  duration,
  description
}: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-900">
          ${price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {duration}
          </div>
        </div>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </div>
    </div>
  );
}