import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { getAccessToken } from './auth';


const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'https://api.bookingkit.de/v3',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});


apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
      const token = await getAccessToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response?.status === 401) {
      console.error('Unauthorized: Please check your API key or client credentials');
    } else if (error.response?.status === 429) {
      console.error('Rate limit exceeded');
    } else if (error.response?.status && error.response.status >= 500) {
      console.error('Server error occurred');
    }
    return Promise.reject(error);
  }
);

export default apiClient; 