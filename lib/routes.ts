// Centralized API endpoint definitions for maintainability

export const routes = {
  auth: {
    bookintKitToken: 'https://api.bookingkit.de/oauth/token',
  },
  api: {
    experiences: '/events',
  },
  ui: {
    register: '/register',
    experiences: 'experiences',
    booking: '/booking'
  },
  serverRoutes: {
    tokenApiRoute: '/api/bookingkit-token'
  }
};

export default routes; 