import apiClient from './axios';
import routes from './routes';
import type { BookingData, Excursion, ExcursionSearchParams, Booking, ApiResponse } from '@/types';

// API functions for booking
export const bookingApi = {
  // Get available excursions
  getExcursions: async (): Promise<Excursion[]> => {
    try {
      const response = await apiClient.get(routes.api.excursions);
      return response.data;
    } catch (error) {
      console.error('Error fetching excursions:', error);
      throw error;
    }
  },

  // Search excursions with filters
  searchExcursions: async (params: ExcursionSearchParams): Promise<Excursion[]> => {
    try {
      const response = await apiClient.get(routes.api.searchExcursions, { params });
      return response.data;
    } catch (error) {
      console.error('Error searching excursions:', error);
      throw error;
    }
  },

  // Get excursion details
  getExcursionDetails: async (excursionId: string): Promise<Excursion> => {
    try {
      const response = await apiClient.get(routes.api.excursionDetails(excursionId));
      return response.data;
    } catch (error) {
      console.error('Error fetching excursion details:', error);
      throw error;
    }
  },

  // Create a new booking
  createBooking: async (bookingData: BookingData): Promise<ApiResponse<Booking>> => {
    try {
      const response = await apiClient.post(routes.api.bookings, bookingData);
      return response.data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },

  // Get booking details
  getBookingDetails: async (bookingId: string): Promise<ApiResponse<Booking>> => {
    try {
      const response = await apiClient.get(routes.api.bookingById(bookingId));
      return response.data;
    } catch (error) {
      console.error('Error fetching booking details:', error);
      throw error;
    }
  },

  // Update booking
  updateBooking: async (bookingId: string, updateData: Partial<BookingData>): Promise<ApiResponse<Booking>> => {
    try {
      const response = await apiClient.put(routes.api.bookingById(bookingId), updateData);
      return response.data;
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  },

  // Cancel booking
  cancelBooking: async (bookingId: string): Promise<ApiResponse<{ message: string }>> => {
    try {
      const response = await apiClient.delete(routes.api.bookingById(bookingId));
      return response.data;
    } catch (error) {
      console.error('Error canceling booking:', error);
      throw error;
    }
  },

  // Validate promo code
  validatePromoCode: async (promoCode: string): Promise<ApiResponse<{ valid: boolean; discount?: number }>> => {
    try {
      const response = await apiClient.get(routes.api.validatePromoCode, {
        params: { code: promoCode }
      });
      return response.data;
    } catch (error) {
      console.error('Error validating promo code:', error);
      throw error;
    }
  },

  // Get available dates for an excursion
  getAvailableDates: async (excursionId: string, guests: number): Promise<string[]> => {
    try {
      const response = await apiClient.get(routes.api.availableDates(excursionId), {
        params: { guests }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching available dates:', error);
      throw error;
    }
  }
}; 