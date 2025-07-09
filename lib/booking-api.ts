import apiClient from './axios';
import routes from './routes';

// API functions for bookingkit
export const bookingApi = {
  getAllExperiences: async (): Promise<any[]> => {
    try {
      const response = await apiClient.get(routes.api.experiences);
      return response.data;
    } catch (error) {
      console.error('Error fetching experiences:', error);
      throw error;
    }
  }
};

export const getAllExperiences = bookingApi.getAllExperiences;