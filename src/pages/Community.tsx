import React from 'react';
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Travel Community</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Community Posts */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">Just completed my solo trip to Japan! Here are some tips for fellow travelers...</p>
            <img
              src="https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80"
              alt="Post image"
              className="rounded-lg mb-4"
            />
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <ThumbsUp className="h-5 w-5 mr-1" />
                <span>124</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <MessageSquare className="h-5 w-5 mr-1" />
                <span>23</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Community Sidebar */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Topics</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                #SoloTravel
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                #BudgetTips
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                #SafetyFirst
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                #LocalExperiences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}