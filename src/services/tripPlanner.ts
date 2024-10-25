import axios from 'axios';

export interface TripPreferences {
  destination: string;
  startDate: string;
  duration: string;
  travelStyle: string;
}

export async function generateItinerary(preferences: TripPreferences) {
  try {
    // In a real application, this would call your backend API
    // For now, we'll return a mock response
    return {
      destination: preferences.destination,
      duration: preferences.duration,
      startDate: preferences.startDate,
      style: preferences.travelStyle,
      days: [
        {
          date: preferences.startDate,
          activities: [
            {
              time: '09:00',
              activity: 'City Tour',
              description: 'Explore the city highlights'
            }
          ]
        }
      ]
    };
  } catch (error) {
    console.error('Error generating itinerary:', error);
    throw error;
  }
}