'use client'
import BookingHero from "@/components/booking/BookingHero";
import BookingDetailsContent from "@/components/booking/BookingDetailsContent";
import ExcursionBanner from "@/components/home/ExcursionBanner";

const BookingDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      <BookingHero title="Booking Detail" backLink="/" />
      <BookingDetailsContent />
      <ExcursionBanner />
    </div>
  );
};

export default BookingDetails; 