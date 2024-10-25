import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Compass, DollarSign, Bed, Utensils } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { motion } from 'framer-motion';
import CountrySearch from '../components/CountrySearch';
import CitySelector from '../components/CitySelector';
import { Country } from '../services/countryData';
import { City } from '../services/destinationData';

export default function PlanTrip() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState({ value: '', unit: 'days' });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [travelStyle, setTravelStyle] = useState('');
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [accommodation, setAccommodation] = useState('');
  const [dining, setDining] = useState('');
  const [socialPreference, setSocialPreference] = useState('');

  // Calculate min and max dates for the calendar
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  const interestOptions = [
    { value: 'culture', label: 'Culture & History' },
    { value: 'nature', label: 'Nature & Outdoors' },
    { value: 'food', label: 'Food & Cuisine' },
    { value: 'adventure', label: 'Adventure Activities' },
    { value: 'relaxation', label: 'Relaxation & Wellness' },
    { value: 'photography', label: 'Photography' },
    { value: 'nightlife', label: 'Nightlife' },
    { value: 'shopping', label: 'Shopping' }
  ];

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setSelectedCity(null);
  };

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Perfect Solo Adventure</h1>
              <p className="text-lg text-gray-600">Tell us about your dream trip and let AI craft your ideal itinerary</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

              {/* Destination Selection */}
              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-900">
                  Where would you like to go?
                </label>
                <CountrySearch onCountrySelect={handleCountrySelect} />
                
                {selectedCountry && (
                  <CitySelector
                    selectedCountry={selectedCountry}
                    onCitySelect={handleCitySelect}
                  />
                )}
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  When do you want to start your adventure?
                </label>
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select your start date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                    wrapperClassName="w-full"
                  />
                  <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-indigo-600" />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  How long is your trip?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    min="1"
                    max={duration.unit === 'days' ? 90 : duration.unit === 'months' ? 24 : 2}
                    value={duration.value}
                    onChange={(e) => setDuration({ ...duration, value: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                    placeholder="Duration"
                  />
                  <select
                    value={duration.unit}
                    onChange={(e) => setDuration({ ...duration, unit: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  >
                    <option value="days">Days</option>
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  What's your travel style?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['backpacker', 'comfort', 'luxury', 'adventure'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setTravelStyle(style)}
                      className={`px-6 py-4 rounded-lg text-lg transition-all ${
                        travelStyle === style
                          ? 'bg-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Compass className={`h-6 w-6 mx-auto mb-2 ${
                        travelStyle === style ? 'text-white' : 'text-indigo-600'
                      }`} />
                      <span className="capitalize">{style}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  What's your budget level?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['budget', 'moderate', 'luxury'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setBudget(level)}
                      className={`px-6 py-4 rounded-lg text-lg transition-all ${
                        budget === level
                          ? 'bg-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <DollarSign className={`h-6 w-6 mx-auto mb-2 ${
                        budget === level ? 'text-white' : 'text-indigo-600'
                      }`} />
                      <span className="capitalize">{level}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  What are your interests?
                </label>
                <Select
                  isMulti
                  options={interestOptions}
                  className="text-lg"
                  classNamePrefix="react-select"
                  onChange={(selected) => 
                    setInterests(selected ? selected.map(option => option.value) : [])
                  }
                  placeholder="Select your interests..."
                />
              </div>

              {/* Accommodation Preference */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  Where would you like to stay?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['hostel', 'hotel', 'apartment', 'resort'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setAccommodation(type)}
                      className={`px-6 py-4 rounded-lg text-lg transition-all ${
                        accommodation === type
                          ? 'bg-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Bed className={`h-6 w-6 mx-auto mb-2 ${
                        accommodation === type ? 'text-white' : 'text-indigo-600'
                      }`} />
                      <span className="capitalize">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dining Preference */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  How do you prefer to dine?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['street-food', 'casual', 'fine-dining', 'mix'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setDining(style)}
                      className={`px-6 py-4 rounded-lg text-lg transition-all ${
                        dining === style
                          ? 'bg-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Utensils className={`h-6 w-6 mx-auto mb-2 ${
                        dining === style ? 'text-white' : 'text-indigo-600'
                      }`} />
                      <span className="capitalize">{style.replace('-', ' ')}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Social Preference */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  How social would you like to be?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['solo', 'mix', 'social'].map((pref) => (
                    <button
                      key={pref}
                      onClick={() => setSocialPreference(pref)}
                      className={`px-6 py-4 rounded-lg text-lg transition-all ${
                        socialPreference === pref
                          ? 'bg-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Users className={`h-6 w-6 mx-auto mb-2 ${
                        socialPreference === pref ? 'text-white' : 'text-indigo-600'
                      }`} />
                      <span className="capitalize">{pref}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                disabled={!selectedCountry || !startDate || !duration.value || !travelStyle || !budget || interests.length === 0}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                Generate Your Perfect Itinerary
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}