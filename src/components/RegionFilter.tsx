import React from 'react';
import { Globe } from 'lucide-react';

interface RegionFilterProps {
  selectedRegion: string;
  onChange: (region: string) => void;
}

export default function RegionFilter({ selectedRegion, onChange }: RegionFilterProps) {
  const regions = [
    { id: 'all', name: 'All Regions', icon: Globe },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'americas', name: 'Americas' },
    { id: 'africa', name: 'Africa' },
    { id: 'oceania', name: 'Oceania' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => onChange(region.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedRegion === region.id
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {region.name}
        </button>
      ))}
    </div>
  );
}