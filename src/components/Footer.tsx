import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    window.alert(`${platform} integration coming soon!`);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">SoloTravel.ai</span>
            </Link>
            <p className="mt-4 text-sm">
              Empowering solo travelers with AI-driven planning tools and a supportive community.
            </p>
            <div className="mt-6 flex space-x-4">
              <button onClick={() => handleSocialClick('Facebook')} className="hover:text-indigo-500">
                <Facebook className="h-5 w-5" />
              </button>
              <button onClick={() => handleSocialClick('Twitter')} className="hover:text-indigo-500">
                <Twitter className="h-5 w-5" />
              </button>
              <button onClick={() => handleSocialClick('Instagram')} className="hover:text-indigo-500">
                <Instagram className="h-5 w-5" />
              </button>
              <button onClick={() => handleSocialClick('YouTube')} className="hover:text-indigo-500">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/plan-trip" className="hover:text-indigo-500">AI Trip Planning</Link></li>
              <li><Link to="/plan-trip" className="hover:text-indigo-500">Safety Tools</Link></li>
              <li><Link to="/community" className="hover:text-indigo-500">Community</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Local Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-500">About Us</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Careers</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Press</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-500">Help Center</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Safety Tips</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Terms of Service</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SoloTravel.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}