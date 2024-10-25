import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { db } from './firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PaymentIntent {
  clientSecret: string;
  amount: number;
  currency: string;
}

export async function createPaymentIntent(amount: number, currency: string = 'usd'): Promise<PaymentIntent> {
  try {
    const response = await axios.post('/api/create-payment-intent', {
      amount,
      currency
    });
    return response.data;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw new Error('Failed to create payment');
  }
}

export async function processPayment(paymentMethodId: string, paymentIntentId: string): Promise<void> {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to load');

    const { paymentIntent } = await stripe.confirmCardPayment(paymentIntentId, {
      payment_method: paymentMethodId
    });

    if (paymentIntent?.status === 'succeeded') {
      // Payment successful
      return;
    } else {
      throw new Error('Payment failed');
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    throw error;
  }
}

export async function calculateCommission(amount: number): number {
  const commissionRate = 0.10; // 10% commission
  return Math.round(amount * commissionRate);
}

export async function distributePayment(paymentId: string, sellerId: string, amount: number): Promise<void> {
  try {
    const commission = await calculateCommission(amount);
    const sellerAmount = amount - commission;

    // Update seller's balance
    const sellerRef = doc(db, 'users', sellerId);
    const sellerDoc = await getDoc(sellerRef);
    const currentBalance = sellerDoc.data()?.balance || 0;

    await updateDoc(sellerRef, {
      balance: currentBalance + sellerAmount
    });

    // Log transaction
    await logTransaction(paymentId, {
      sellerId,
      amount,
      commission,
      sellerAmount,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error distributing payment:', error);
    throw new Error('Failed to distribute payment');
  }
}

async function logTransaction(paymentId: string, transactionData: any): Promise<void> {
  try {
    const transactionRef = doc(db, 'transactions', paymentId);
    await updateDoc(transactionRef, transactionData);
  } catch (error) {
    console.error('Error logging transaction:', error);
    throw new Error('Failed to log transaction');
  }
}