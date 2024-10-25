import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Shield, Users, Calendar, Globe, MessageSquare, Map, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Smart Route Planning",
      description: "AI-powered itinerary creation based on your interests",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety First",
      description: "Real-time safety updates and emergency assistance",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Travel Community",
      description: "Connect with fellow adventurers worldwide",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Local Experiences",
      description: "Discover authentic local experiences and hidden gems",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Your Perfect Solo Journey Awaits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need for an unforgettable solo adventure
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              </div>
              
              <div className="relative p-6 h-full flex flex-col justify-end">
                <div className="w-12 h-12 mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}