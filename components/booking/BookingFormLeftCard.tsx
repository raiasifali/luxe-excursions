
import React from "react";
import GuestsSection from "./GuestsSection";
import TripDatesSection from "./TripDatesSection";
import RoomTypesSection from "./RoomTypesSection";
import PaymentMethodSection from "./PaymentMethodSection";

type BookingFormLeftCardProps = {
  adults: number;
  setAdults: (n: number) => void;
  children: number;
  setChildren: (n: number) => void;
  selectedDate: number;
  setSelectedDate: (n: number) => void;
  promoCode: string;
  setPromoCode: (v: string) => void;
  showMoreDates: boolean;
  setShowMoreDates: (v: boolean) => void;
  visibleDates: { departure: string; arrival: string }[];
};

const BookingFormLeftCard: React.FC<BookingFormLeftCardProps> = ({
  adults,
  setAdults,
  children,
  setChildren,
  selectedDate,
  setSelectedDate,
  showMoreDates,
  setShowMoreDates,
  visibleDates,
}) => (
  <div className="w-full lg:w-[737px]">
    <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6 space-y-6">
      <GuestsSection
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
      />

      <TripDatesSection
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        showMoreDates={showMoreDates}
        setShowMoreDates={setShowMoreDates}
        visibleDates={visibleDates}
      />

      <RoomTypesSection />

      <PaymentMethodSection />
    </div>
  </div>
);

export default BookingFormLeftCard;
