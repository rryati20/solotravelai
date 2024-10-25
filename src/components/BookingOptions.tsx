import React, { useState } from 'react';
import { Plane, Hotel, Car, Ticket } from 'lucide-react';

interface BookingOptionsProps {
  tripDetails: {
    destination: string;
    startDate: string;
    duration: string;
    travelStyle: string;
    budget: string;
    accommodation: string;
    transportation: string;
  };
}

export default function BookingOptions({ tripDetails }: BookingOptionsProps) {
  const [activeTab, setActiveTab] = useState('flights');

  const tabs = [
    { id: 'flights', icon: Plane, label: 'Flights' },
    { id: 'accommodation', icon: Hotel, label: 'Accommodation' },
    { id: 'activities', icon: Ticket, label: 'Activities' },
    { id: 'transport', icon: Car, label: 'Transport' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'flights':
        return <FlightsTab tripDetails={tripDetails} />;
      case 'accommodation':
        return <AccommodationTab tripDetails={tripDetails} />;
      case 'activities':
        return <ActivitiesTab tripDetails={tripDetails} />;
      case 'transport':
        return <TransportTab tripDetails={tripDetails} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="border-b">
        <div className="flex">
          {tabs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 px-4 py-4 text-sm font-medium text-center ${
                activeTab === id
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="h-5 w-5 mx-auto mb-1" />
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">{renderTabContent()}</div>
    </div>
  );
}

function FlightsTab({ tripDetails }: BookingOptionsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Available Flights</h3>
      <div className="space-y-4">
        {['Expedia', 'Skyscanner', 'Kayak'].map((provider) => (
          <div key={provider} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{provider}</h4>
                <p className="text-sm text-gray-500">Best prices from multiple airlines</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Search
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccommodationTab({ tripDetails }: BookingOptionsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Places to Stay</h3>
      <div className="space-y-4">
        {['Booking.com', 'Agoda', 'Hostelworld'].map((provider) => (
          <div key={provider} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{provider}</h4>
                <p className="text-sm text-gray-500">Find your perfect stay</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Search
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivitiesTab({ tripDetails }: BookingOptionsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Local Experiences</h3>
      <div className="space-y-4">
        {['GetYourGuide', 'Viator', 'Klook'].map((provider) => (
          <div key={provider} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{provider}</h4>
                <p className="text-sm text-gray-500">Discover local experiences</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransportTab({ tripDetails }: BookingOptionsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Local Transportation</h3>
      <div className="space-y-4">
        {['Rental Cars', 'Public Transport', 'Rideshare'].map((option) => (
          <div key={option} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{option}</h4>
                <p className="text-sm text-gray-500">Get around easily</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}