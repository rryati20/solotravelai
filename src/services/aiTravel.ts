import axios from 'axios';
import { format } from 'date-fns';
import { Country, getCountryByCode } from './countryData';

interface TravelPlanRequest {
  destination: string;
  startDate: string;
  duration: string;
  travelStyle: string;
  budget: string;
}

export async function generateTravelInsights(planRequest: TravelPlanRequest) {
  try {
    if (!planRequest.destination) {
      throw new Error('Destination is required');
    }

    let startDate = new Date();
    try {
      startDate = planRequest.startDate ? new Date(planRequest.startDate) : new Date();
    } catch (err) {
      console.warn('Invalid date format, using current date');
    }

    const formattedDate = format(startDate, 'MMMM dd, yyyy');

    // Get current season based on date
    const month = startDate.getMonth();
    let currentSeason = '';
    if (month >= 2 && month <= 4) currentSeason = 'spring';
    else if (month >= 5 && month <= 7) currentSeason = 'summer';
    else if (month >= 8 && month <= 10) currentSeason = 'autumn';
    else currentSeason = 'winter';

    return {
      destination: planRequest.destination,
      currency: {
        paymentTips: [
          'Major credit cards widely accepted in urban areas',
          'Always carry some cash for local markets and rural areas',
          'Check exchange rates before your trip',
          'Inform your bank about travel plans'
        ]
      },
      language: {
        usefulPhrases: [
          { phrase: 'Hello', pronunciation: 'Check local language' },
          { phrase: 'Thank you', pronunciation: 'Check local language' },
          { phrase: 'Please', pronunciation: 'Check local language' },
          { phrase: 'Excuse me', pronunciation: 'Check local language' }
        ]
      },
      weather: {
        forecast: `Expected conditions for ${currentSeason}`,
        temperature: 'Check local weather forecast',
        bestTimeToVisit: 'Research best seasons for your activities'
      },
      safety: {
        tips: [
          'Keep important documents secure',
          'Stay aware of your surroundings',
          'Register with your embassy',
          'Have travel insurance',
          'Research local emergency numbers'
        ]
      },
      culture: {
        customs: [
          'Respect local traditions',
          'Research appropriate dress codes',
          'Learn basic greetings',
          'Be mindful of religious sites'
        ]
      },
      events: {
        upcoming: [
          {
            name: 'Seasonal Activities',
            date: formattedDate,
            description: `Current season: ${currentSeason}`
          }
        ]
      }
    };
  } catch (error) {
    console.error('Error generating travel insights:', error);
    throw error;
  }
}