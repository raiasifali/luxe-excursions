import axios from 'axios';
import routes from './routes';

let accessToken: string = '';
let tokenExpiresAt: number | null = null;

const TOKEN_API_ROUTE = routes.serverRoutes.tokenApiRoute;

// Fetch a new access token from the Next.js API route
async function fetchAccessToken(): Promise<string> {
  const response = await axios.post(TOKEN_API_ROUTE);
  accessToken = response.data.access_token;
  // expires_in is in seconds
  tokenExpiresAt = Date.now() + (response.data.expires_in - 60) * 1000; // refresh 1 min before expiry
  return accessToken;
}

// Get a valid access token, refresh if needed
export async function getAccessToken(): Promise<string> {
  if (!accessToken || !tokenExpiresAt || Date.now() >= tokenExpiresAt) {
    return await fetchAccessToken();
  }
  return accessToken;
} 