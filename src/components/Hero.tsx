import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Map, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-500">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80"
          alt="Travel background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-blue-500/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Your Solo Adventure
            <span className="block text-yellow-300">Starts Here</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
          >
            Plan your perfect solo journey with AI-powered insights, connect with fellow travelers, 
            and explore the world safely.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => navigate('/plan-trip')}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => navigate('/discover')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg backdrop-blur-sm flex items-center justify-center"
            >
              Explore Destinations
              <Map className="ml-2 h-5 w-5" />
            </button>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <Map className="h-8 w-8 text-yellow-300 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Smart Planning</h3>
              <p className="text-white/80">AI-powered itineraries tailored to your travel style</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <Shield className="h-8 w-8 text-yellow-300 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Travel Safely</h3>
              <p className="text-white/80">Real-time safety updates and local insights</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <Users className="h-8 w-8 text-yellow-300 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <p className="text-white/80">Meet fellow travelers and share experiences</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}