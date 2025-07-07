// Re-export all types from their respective modules
export * from './api';
export * from './booking';
export * from './excursion';
export * from './user';

// Payment types
export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'bank_transfer';
  last4?: string;
  brand?: string;
  isDefault: boolean;
}

// Review types
export interface Review {
  id: string;
  excursionId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  userName: string;
}

// Location types
export interface Location {
  id: string;
  name: string;
  country: string;
  region?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
} 