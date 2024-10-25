import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-600/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Globe className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Solo Adventure?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of solo travelers discovering the world with confidence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => navigate('/plan-trip')}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all flex items-center justify-center"
            >
              Plan Your Trip Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => window.alert('Demo coming soon!')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg backdrop-blur-sm"
            >
              Watch How It Works
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}