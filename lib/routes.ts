// Centralized API endpoint definitions for maintainability

export const routes = {
  api: {
    bookings: '/bookings',
    bookingById: (bookingId: string) => `/bookings/${bookingId}`,
    excursions: '/excursions',
    excursionDetails: (excursionId: string) => `/excursions/${excursionId}`,
    searchExcursions: '/excursions/search',
    availableDates: (excursionId: string) => `/excursions/${excursionId}/available-dates`,
    validatePromoCode: '/promo-codes/validate',
  },
};

export default routes; 