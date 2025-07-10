'use client'
import BookingHero from "@/components/booking/BookingHero";
import BookingForm from "@/components/booking/BookingForm";
import ExcursionBanner from "@/components/home/ExcursionBanner";

const Booking = () => {
  return (
    <div className="min-h-screen white">
      <BookingHero title="Confirm and trip detail" />
      <BookingForm />
      <div className="px-5">
        <ExcursionBanner />
      </div>
    </div>
  );
};

export default Booking; 