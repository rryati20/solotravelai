import React, { useState } from 'react';
import { Calendar, DollarSign, Compass, Bed, Utensils, Users } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface TripPreferencesProps {
  onSubmit: (preferences: any) => void;
}

export default function TripPreferences({ onSubmit }: TripPreferencesProps) {
  const [preferences, setPreferences] = useState({
    startDate: null as Date | null,
    duration: {
      value: '',
      unit: 'days'
    },
    budget: 'medium',
    travelStyle: '',
    interests: [] as string[],
    accommodation: '',
    dining: '',
    socialPreference: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  // Calculate min and max dates
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  const getDurationLabel = (value: string, unit: string) => {
    if (!value) return '';
    const num = parseInt(value);
    const unitLabel = unit.slice(0, -1); // Remove 's' from the end
    return `${value} ${num === 1 ? unitLabel : unit}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Dates and Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <div className="relative">
            <DatePicker
              selected={preferences.startDate}
              onChange={(date: Date) => setPreferences(prev => ({ ...prev, startDate: date }))}
              minDate={minDate}
              maxDate={maxDate}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select start date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              wrapperClassName="w-full"
              required
              showPopperArrow={false}
              popperClassName="react-datepicker-modern"
              popperPlacement="bottom-start"
            />
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Duration
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              min="1"
              max={
                preferences.duration.unit === 'days' ? 90 :
                preferences.duration.unit === 'months' ? 24 : 2
              }
              value={preferences.duration.value}
              onChange={(e) => setPreferences(prev => ({
                ...prev,
                duration: { ...prev.duration, value: e.target.value }
              }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Duration"
              required
            />
            <select
              value={preferences.duration.unit}
              onChange={(e) => setPreferences(prev => ({
                ...prev,
                duration: { ...prev.duration, unit: e.target.value }
              }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="days">Days</option>
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
          {preferences.duration.value && (
            <p className="text-sm text-gray-600">
              {getDurationLabel(preferences.duration.value, preferences.duration.unit)}
            </p>
          )}
        </div>
      </div>

      {/* Rest of the form remains unchanged */}
      {/* ... */}
    </form>
  );
}