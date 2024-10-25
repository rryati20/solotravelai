import axios from 'axios';
import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

interface EmergencyContact {
  name: string;
  phone: string;
  email: string;
  relationship: string;
}

interface Location {
  latitude: number;
  longitude: number;
  accuracy?: number;
}

interface EmergencyService {
  name: string;
  type: 'hospital' | 'police' | 'embassy';
  address: string;
  phone: string;
  coordinates: Location;
  distance: number;
}

export async function sendSOS(userId: string, location: Location, emergencyContacts: EmergencyContact[]): Promise<void> {
  try {
    // Log SOS event
    await addDoc(collection(db, 'sos_events'), {
      userId,
      location,
      timestamp: new Date(),
      status: 'active'
    });

    // Notify emergency contacts
    for (const contact of emergencyContacts) {
      await notifyEmergencyContact(contact, location);
    }

    // Get nearby emergency services
    const services = await findNearbyEmergencyServices(location);
    
    return services;
  } catch (error) {
    console.error('Error sending SOS:', error);
    throw new Error('Failed to send SOS alert');
  }
}

async function notifyEmergencyContact(contact: EmergencyContact, location: Location): Promise<void> {
  // In a real application, this would integrate with SMS/email service providers
  console.log(`Notifying ${contact.name} of emergency at location:`, location);
}

export async function findNearbyEmergencyServices(location: Location): Promise<EmergencyService[]> {
  try {
    // This would typically use a mapping service API to find nearby emergency services
    const response = await axios.get(`/api/emergency-services`, {
      params: {
        lat: location.latitude,
        lng: location.longitude,
        radius: 5000 // 5km radius
      }
    });

    return response.data.map((service: any) => ({
      ...service,
      distance: calculateDistance(location, service.coordinates)
    }));
  } catch (error) {
    console.error('Error finding emergency services:', error);
    throw new Error('Failed to find nearby emergency services');
  }
}

function calculateDistance(point1: Location, point2: Location): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(point2.latitude - point1.latitude);
  const dLon = toRad(point2.longitude - point1.longitude);
  const lat1 = toRad(point1.latitude);
  const lat2 = toRad(point2.latitude);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function toRad(value: number): number {
  return value * Math.PI / 180;
}

export async function checkVisaRequirements(nationality: string, destination: string): Promise<any> {
  try {
    const response = await axios.get(`/api/visa-requirements`, {
      params: { nationality, destination }
    });
    return response.data;
  } catch (error) {
    console.error('Error checking visa requirements:', error);
    throw new Error('Failed to check visa requirements');
  }
}