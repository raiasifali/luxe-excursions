
import React from "react";
import { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";
import GuestsSection from "./GuestsSection";
import TripDatesSection from "./TripDatesSection";
import RoomTypesSection from "./RoomTypesSection";
import PaymentMethodSection from "./PaymentMethodSection";
import { BookingFormData, BookingFormLeftCardProps } from "@/types/booking";

const BookingFormLeftCard: React.FC<BookingFormLeftCardProps> = ({
  register,
  setValue,
  errors,
  adults,
  children,
  selectedDate,
  promoCode,
  visibleDates,
}) => (
  <div className="w-full lg:w-[737px]">
    <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6 space-y-6">
      <GuestsSection
        register={register}
        setValue={setValue}
        errors={errors}
        adults={adults}
        children={children}
      />

      <TripDatesSection
        register={register}
        setValue={setValue}
        errors={errors}
        selectedDate={selectedDate}
        visibleDates={visibleDates}
      />

      <RoomTypesSection />

      <PaymentMethodSection
        register={register}
        errors={errors}
      />
    </div>
  </div>
);

export default BookingFormLeftCard;
