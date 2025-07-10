import { useForm } from "react-hook-form";
import { useId, useState } from "react";
import BookingFormLeftCard from "./BookingFormLeftCard";
import BookingFormRightCards from "./BookingFormRightCards";
import { bookingApi } from "@/lib/booking-api";
import type { BookingData, BookingFormData } from "@/types";


const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    defaultValues: {
      adults: 1,
      children: 0,
      selectedDate: -1, // -1 means no date selected
      promoCode: "",
      cardholderName: "",
      cardType: "visa",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    mode: "onChange", // Validate on change for better UX
  });

  const tripDates = [
    { departure: "Sunday, Jun 1, 2025", arrival: "Thursday, Jun 5, 2025" },
    { departure: "Monday, Jun 9, 2025", arrival: "Friday, Jun 13, 2025" },
    { departure: "Saturday, Jun 21, 2025", arrival: "Wednesday, Jun 25, 2025" },
    { departure: "Monday, Jun 30, 2025", arrival: "Friday, Jul 4, 2025" },
    { departure: "Sunday, Jul 13, 2025", arrival: "Thursday, Jul 17, 2025" },
    { departure: "Monday, Jul 21, 2025", arrival: "Friday, Jul 25, 2025" },
    { departure: "Saturday, Aug 2, 2025", arrival: "Wednesday, Aug 6, 2025" },
    { departure: "Monday, Aug 11, 2025", arrival: "Friday, Aug 15, 2025" },
    { departure: "Saturday, Aug 23, 2025", arrival: "Wednesday, Aug 27, 2025" },
    { departure: "Monday, Sep 1, 2025", arrival: "Friday, Sep 5, 2025" },
  ];

  const visibleDates = tripDates.slice(0, 4);

  // Watch form values
  const watchedAdults = watch("adults");
  const watchedChildren = watch("children");
  const watchedSelectedDate = watch("selectedDate");
  const watchedPromoCode = watch("promoCode");

  // Handle form submission
  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      console.log("Form submitted:", data);
      
      // Transform form data to match BookingData interface
      const bookingData: BookingData = {
        excursionId: useId(), // You might want to get this from props or context
        adults: data.adults,
        children: data.children,
        selectedDate: data.selectedDate.toString(), // Convert to string as per interface
        promoCode: data.promoCode || undefined,
        contactInfo: {
          name: data.cardholderName,
          email: "user@example.com", // You might want to add email field to form
          phone: "+1234567890", // You might want to add phone field to form
        },
      };

      // Call the API to create booking
      // const response = await bookingApi.createBooking(bookingData);
      
      
      // Handle success - you might want to redirect or show success message
      // For example, redirect to booking details page
      // router.push(`/booking-details/${response.data.id}`);
      
    } catch (error) {
      console.error("Error creating booking:", error);
      
      // Handle error - show error message to user
      setSubmitError("Failed to create booking. Please try again.");
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-[24px] justify-center items-start">
        <BookingFormLeftCard
          register={register}
          errors={errors}
          setValue={setValue}
          adults={watchedAdults}
          children={watchedChildren}
          selectedDate={watchedSelectedDate}
          promoCode={watchedPromoCode}
          visibleDates={visibleDates}
        />

        <BookingFormRightCards
          register={register}
          errors={errors}
          promoCode={watchedPromoCode}
          setValue={setValue}
          isValid={isValid}
          isSubmitting={isSubmitting}
          submitError={submitError}
        />
      </div>
    </form>
  );
};

export default BookingForm;

