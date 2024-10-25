import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExchangeRateCardProps {
  exchangeRate: any; // Replace with proper type from Exchange Rate API
  isLoading: boolean;
}

export default function ExchangeRateCard({ exchangeRate, isLoading }: ExchangeRateCardProps) {
  if (isLoading) {
    return <Skeleton height={150} />;
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Exchange Rate</h3>
        <DollarSign className="h-6 w-6 text-indigo-600" />
      </div>
      
      <div className="flex items-center space-x-2">
        <p className="text-2xl font-bold text-gray-900">
          1 USD = {exchangeRate.conversion_rate} {exchangeRate.target_code}
        </p>
        <TrendingUp className="h-5 w-5 text-green-500" />
      </div>
      
      <p className="mt-2 text-sm text-gray-500">
        Last updated: {new Date(exchangeRate.time_last_update_utc).toLocaleDateString()}
      </p>
    </motion.div>
  );
}