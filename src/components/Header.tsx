import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Menu, User, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">SoloTravel.ai</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/discover" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Discover
            </Link>
            <Link to="/plan-trip" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Plan Trip
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Community
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/plan-trip')}
              className="hidden md:flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Start Planning
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="p-2 rounded-full text-gray-600 hover:text-indigo-600"
            >
              <User className="h-6 w-6" />
            </button>
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full text-gray-600 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/discover"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Discover
              </Link>
              <Link
                to="/plan-trip"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Plan Trip
              </Link>
              <Link
                to="/community"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Community
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}