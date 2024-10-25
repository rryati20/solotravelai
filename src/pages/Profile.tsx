import React from 'react';
import { Settings, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-32 bg-indigo-600">
            <img
              className="absolute bottom-0 left-8 -mb-8 h-32 w-32 rounded-full border-4 border-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
          </div>
          
          <div className="pt-12 pb-6 px-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                <p className="text-gray-600">Adventure Enthusiast</p>
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Settings className="h-5 w-5 mr-2" />
                Edit Profile
              </button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                New York, USA
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Joined March 2024
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                12 Trips Planned
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold mb-4">Upcoming Trips</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">Tokyo Adventure</h3>
                      <p className="text-sm text-gray-600">April 15 - April 22, 2024</p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}