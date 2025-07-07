import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';


const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.bookingkit.de/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});


apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const apiKey = process.env.BOOKINGKIT_API_KEY;
    
    if (apiKey && config.headers) {
      config.headers.Authorization = `Bearer ${apiKey}`;
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
      console.error('Unauthorized: Please check your API key');
    } else if (error.response?.status === 429) {
      console.error('Rate limit exceeded');
    } else if (error.response?.status && error.response.status >= 500) {
      console.error('Server error occurred');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient; 