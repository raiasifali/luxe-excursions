import apiClient from './axios';

// Example usage of the configured axios client

// GET request example
export const getExcursions = async () => {
  try {
    const response = await apiClient.get('/excursions');
    return response.data;
  } catch (error) {
    console.error('Error fetching excursions:', error);
    throw error;
  }
};

// POST request example
export const createBooking = async (bookingData: any) => {
  try {
    const response = await apiClient.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

// PUT request example
export const updateBooking = async (bookingId: string, updateData: any) => {
  try {
    const response = await apiClient.put(`/bookings/${bookingId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

// DELETE request example
export const deleteBooking = async (bookingId: string) => {
  try {
    const response = await apiClient.delete(`/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

// Example with query parameters
export const searchExcursions = async (params: {
  location?: string;
  date?: string;
  guests?: number;
}) => {
  try {
    const response = await apiClient.get('/excursions/search', { params });
    return response.data;
  } catch (error) {
    console.error('Error searching excursions:', error);
    throw error;
  }
}; 