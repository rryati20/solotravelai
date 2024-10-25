import { db } from './firebase';
import { collection, doc, setDoc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  duration: string;
  createdBy: string;
  isPublished: boolean;
  price?: number;
  rating?: number;
  reviews: Review[];
  collaborators: string[];
  shareableLink?: string;
  emergencyContacts: EmergencyContact[];
  safetyAlerts: SafetyAlert[];
  localTips: LocalTip[];
  days: ItineraryDay[];
}

interface Review {
  userId: string;
  rating: number;
  comment: string;
  date: Date;
}

interface EmergencyContact {
  name: string;
  phone: string;
  email: string;
  relationship: string;
}

interface SafetyAlert {
  type: 'warning' | 'danger' | 'info';
  message: string;
  date: Date;
  location?: string;
}

interface LocalTip {
  userId: string;
  tip: string;
  category: string;
  votes: number;
  isVerifiedLocal: boolean;
}

interface ItineraryDay {
  date: string;
  activities: Activity[];
}

interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  cost?: number;
  bookingUrl?: string;
}

export async function createItinerary(itinerary: Omit<Itinerary, 'id'>): Promise<string> {
  const id = uuidv4();
  const itineraryRef = doc(db, 'itineraries', id);
  await setDoc(itineraryRef, {
    ...itinerary,
    id,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  return id;
}

export async function getItinerary(id: string): Promise<Itinerary | null> {
  const docRef = doc(db, 'itineraries', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() as Itinerary : null;
}

export async function updateItinerary(id: string, updates: Partial<Itinerary>): Promise<void> {
  const itineraryRef = doc(db, 'itineraries', id);
  await updateDoc(itineraryRef, {
    ...updates,
    updatedAt: new Date()
  });
}

export async function addCollaborator(itineraryId: string, userId: string): Promise<void> {
  const itineraryRef = doc(db, 'itineraries', itineraryId);
  const itinerary = await getDoc(itineraryRef);
  
  if (!itinerary.exists()) {
    throw new Error('Itinerary not found');
  }

  const collaborators = itinerary.data().collaborators || [];
  if (!collaborators.includes(userId)) {
    await updateDoc(itineraryRef, {
      collaborators: [...collaborators, userId]
    });
  }
}

export async function addReview(itineraryId: string, review: Omit<Review, 'date'>): Promise<void> {
  const itineraryRef = doc(db, 'itineraries', itineraryId);
  const itinerary = await getDoc(itineraryRef);
  
  if (!itinerary.exists()) {
    throw new Error('Itinerary not found');
  }

  const reviews = itinerary.data().reviews || [];
  const newReview = { ...review, date: new Date() };
  
  await updateDoc(itineraryRef, {
    reviews: [...reviews, newReview],
    rating: calculateAverageRating([...reviews, newReview])
  });
}

function calculateAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

export async function addSafetyAlert(itineraryId: string, alert: Omit<SafetyAlert, 'date'>): Promise<void> {
  const itineraryRef = doc(db, 'itineraries', itineraryId);
  await updateDoc(itineraryRef, {
    safetyAlerts: [
      { ...alert, date: new Date() }
    ]
  });
}

export async function addLocalTip(itineraryId: string, tip: Omit<LocalTip, 'votes'>): Promise<void> {
  const itineraryRef = doc(db, 'itineraries', itineraryId);
  await updateDoc(itineraryRef, {
    localTips: [
      { ...tip, votes: 0 }
    ]
  });
}

export async function generateShareableLink(itineraryId: string): Promise<string> {
  const shareableLink = `${window.location.origin}/itinerary/${itineraryId}`;
  await updateDoc(doc(db, 'itineraries', itineraryId), {
    shareableLink
  });
  return shareableLink;
}