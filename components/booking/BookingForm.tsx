import { useState } from "react";
import BookingFormLeftCard from "./BookingFormLeftCard";
import BookingFormRightCards from "./BookingFormRightCards";

const BookingForm = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [showMoreDates, setShowMoreDates] = useState(false);

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
  const visibleDates = showMoreDates ? tripDates : tripDates.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-[24px] justify-center items-start">
        <BookingFormLeftCard
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          showMoreDates={showMoreDates}
          setShowMoreDates={setShowMoreDates}
          visibleDates={visibleDates}
        />

        <BookingFormRightCards
          promoCode={promoCode}
          setPromoCode={setPromoCode}
        />
      </div>
    </div>
  );
};

export default BookingForm;

