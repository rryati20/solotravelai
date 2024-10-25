import React from 'react';
import { Shield, Users, Map, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About SoloTravel.ai</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering solo travelers with AI-driven planning tools and a supportive community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Shield className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Safe Travel</h3>
          <p className="text-gray-600">Prioritizing your safety with real-time updates and local insights</p>
        </div>
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Community</h3>
          <p className="text-gray-600">Connect with fellow travelers and share experiences</p>
        </div>
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Map className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Smart Planning</h3>
          <p className="text-gray-600">AI-powered itineraries tailored to your preferences</p>
        </div>
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Globe className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-600">Access to destinations and experiences worldwide</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          At SoloTravel.ai, we believe that traveling solo should be an empowering and enriching experience. 
          Our mission is to make solo travel more accessible, safer, and more enjoyable for everyone through 
          the power of artificial intelligence and community support.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Join Our Community
        </button>
      </div>
    </div>
  );
}