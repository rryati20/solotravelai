import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Globe, DollarSign, Languages, Shield, Thermometer, Calendar } from 'lucide-react';
import BookingOptions from './BookingOptions';

interface TravelInsightsProps {
  insights: any;
  isLoading: boolean;
}

export default function TravelInsights({ insights, isLoading }: TravelInsightsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton height={200} />
        <Skeleton height={150} count={3} />
      </div>
    );
  }

  if (!insights) {
    return null;
  }

  return (
    <div ref={ref} className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Insights for {insights.destination}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Currency Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Currency</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">{insights.currency?.name} ({insights.currency?.code})</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                {insights.currency?.paymentTips?.map((tip: string, index: number) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Language Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Languages className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Language</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">{insights.language?.primary}</p>
              <div className="mt-2 space-y-2">
                {insights.language?.usefulPhrases?.map((phrase: any, index: number) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium">{phrase.phrase}:</span> {phrase.pronunciation}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weather Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Thermometer className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Weather</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">{insights.weather?.forecast}</p>
              <p className="text-sm text-gray-600 mt-2">Temperature: {insights.weather?.temperature}</p>
              <p className="text-sm text-gray-600">Best time to visit: {insights.weather?.bestTimeToVisit}</p>
            </div>
          </div>

          {/* Safety Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Safety</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-gray-600">
                {insights.safety?.tips?.map((tip: string, index: number) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Options */}
        {insights && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Book Your Trip</h3>
            <BookingOptions tripDetails={insights} />
          </div>
        )}
      </motion.div>
    </div>
  );
}