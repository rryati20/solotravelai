import React, { useState } from 'react';
import { Calendar, Clock, MapPin, DollarSign, Shield, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface ItineraryDisplayProps {
  itinerary: any;
  country: any;
  preferences: any;
}

export default function ItineraryDisplay({ itinerary, country, preferences }: ItineraryDisplayProps) {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <div className="bg-indigo-50 rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-2">Trip Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Duration</p>
            <p className="font-medium">{preferences.duration}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Budget Level</p>
            <p className="font-medium capitalize">{preferences.budget}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Travel Style</p>
            <p className="font-medium capitalize">{preferences.travelStyle}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Accommodation</p>
            <p className="font-medium capitalize">{preferences.accommodation.replace(/-/g, ' ')}</p>
          </div>
        </div>
      </div>

      {/* Day Selection */}
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {itinerary.days.map((day: any, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedDay === index
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Day {index + 1}
          </button>
        ))}
      </div>

      {/* Daily Itinerary */}
      <motion.div
        key={selectedDay}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {itinerary.days[selectedDay].activities.map((activity: any, index: number) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 rounded-lg p-2">
                <Clock className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activity.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {activity.duration}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Safety Information */}
      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="h-5 w-5 text-green-600" />
          <h3 className="font-semibold">Safety Information</h3>
        </div>
        <div className="space-y-2 text-sm">
          <p><strong>Emergency Numbers:</strong> {itinerary.safetyInfo.emergencyNumbers}</p>
          <p><strong>Tourist Police:</strong> {itinerary.safetyInfo.touristPolice}</p>
          <p><strong>Nearest Hospital:</strong> {itinerary.safetyInfo.nearestHospital}</p>
          <p className="text-green-700">{itinerary.safetyInfo.generalAdvice}</p>
        </div>
      </div>

      {/* Local Tips */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold mb-2">Local Tips</h3>
        <ul className="space-y-2 text-sm">
          {itinerary.localTips.map((tip: string, index: number) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-blue-600">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}