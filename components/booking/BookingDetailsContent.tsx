import { Button } from "@/components/ui/button";
import BookingTourCard from "./BookingTourCard";
import { useMemo, useState } from "react";
import { staticExperiences } from "@/components/experiences/static-experiences";

import { useSearchParams } from "next/navigation";

const BookingDetailsContent = () => {
  const search = useSearchParams();
  const selected = (search.get('selected') || '').split(',').filter(Boolean);
  const people = Number(search.get('people') || '0');
  const experienceId = search.get('experienceId') || '';
  const priceId = search.get('priceId') || '';

  const { title, unitAmount, currency } = useMemo(() => {
    const exp = staticExperiences.find(e => e.id === experienceId);
    const p = exp?.prices?.find(pr => String(pr.id) === String(priceId));
    const unit = p ? Math.round(parseFloat(p.value) * 100) : 0; // convert to minor units
    const curr = (p?.currency || '£').replace('£','GBP');
    return { title: exp?.title || 'Booking', unitAmount: unit, currency: curr };
  }, [experienceId, priceId]);

  const [loadingPay, setLoadingPay] = useState(false);

  const payWithStripe = async () => {
    try {
      setLoadingPay(true);
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currency,
          amount: unitAmount,
          metadata: {
            title,
            people: String(people || ''),
            selected: selected.join(','),
            experienceId,
            priceId,
          },
        }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url as string;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPay(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-[24px] justify-center items-stretch">
        {/* Left Column - Trip Details */}
        <div className="w-full lg:w-[737px] space-y-6">
          {/* Top Card: BookingTourCard */}
          <BookingTourCard
            image="/assets/images/private-tour.svg"
            alt="London Gourmet Food Tour"
            title="London Gourmet Food Tour"
            days="4 Days"
            location="London, Borough Market"
            type="Culinary"
            buttonText="View Itinerary and Map"
            buttonIcon="/assets/images/map-itin.svg"
          />
          {/* Trip Details */}
          <div className="w-full h-auto min-h-[541px] bg-white border-2 border-[#0A1805] rounded-[12px] shadow-lg p-6 flex flex-col items-start gap-6">
            <h4 className="font-anton text-[24px] leading-[29px] text-[#101010] font-normal uppercase mb-0">Trip Details</h4>
            <div className="flex flex-col gap-4 w-full">
              {selected.length > 0 && (
                <div className="flex flex-col gap-2 w-full">
                  <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Selected Options</span>
                  <ul className="list-disc pl-5 text-[#101010] font-inter text-[16px] leading-[24px]">
                    {selected.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {people > 0 && (
                <div className="flex flex-col gap-2 w-full">
                  <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">People</span>
                  <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">{people}</span>
                </div>
              )}
              {/* Trip Start/End Row */}
              <div className="flex flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-1/2">
                  <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Trip Start</span>
                  <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">Sun, Jun 24, 2024</span>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Trip End</span>
                  <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">Wed, Jun 28, 2024</span>
                </div>
              </div>
              {/* Guest */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Guest</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">1 Adult + 1 Child</span>
              </div>
              {/* Reservation Room Type */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Reservation Room Type</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">1 Room for 1 Adult</span>
              </div>
              {/* Meeting Point */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Meeting Point</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">Gatwick Airport (LGW), South of Central London</span>
              </div>
              {/* Contact */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Contact</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">+6285287564872 or robbidarwis@flowforge.com</span>
              </div>
              {/* Cancellation cost */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Cancellation cost</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#F14141]">This booking is non-refundable. Changing the dates of your stay isn't possible.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Confirmation & Payment */}
        <div className="w-full lg:w-[519px] space-y-6">
          {/* Booking Confirmed Section */}
          <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6">
            <h2 className="text-2xl font-anton font-normal text-[#101010] uppercase mb-2">YOUR BOOKING IS CONFIRMED.</h2>
            <p className="text-base font-inter text-[#878787] tracking-normal leading-normal mb-4">Your payment was verified, you can use your booking trips in your dashboard now!</p>
            <div className="flex flex-col gap-4 text-base mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[#101010] text-base font-inter font-medium leading-normal tracking-normal">Date</span>
                <span className="text-[#101010] text-base font-inter font-semibold leading-normal tracking-normal">24 Jun 2024 - 28 Jun 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#101010] text-base font-inter font-medium leading-normal tracking-normal">Payment Method</span>
                <span className="text-[#101010] text-base font-inter font-semibold leading-normal tracking-normal">Visa</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#101010] text-base font-inter font-medium leading-normal tracking-normal">Payment amount</span>
                <span className="text-[#101010] text-base font-inter font-semibold leading-normal tracking-normal">{currency} {(unitAmount/100).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
            <p className="text-base font-normal font-inter text-[#101010] mb-4">We sent your confirmation email to <span className="text-[#101010] font-medium">robbidarwis@flowforge.com</span></p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button variant="outline" className="flex-1 border-[#E0C469] font-inter text-base h-14 rounded-md flex items-center justify-center gap-2">
                <img src="/assets/images/printer.svg" alt="printer" />
                Print Full Version
              </Button>
              <Button onClick={payWithStripe} disabled={loadingPay || !unitAmount} className="flex-1 bg-[#E0C469] text-[#101010] hover:bg-[#E0C469]/90 font-inter text-base h-14 rounded-md flex items-center justify-center gap-2">
                <img src="/assets/images/booking.svg" alt="printer" />
                {loadingPay ? 'Processing…' : 'Pay with Stripe'}
              </Button>
            </div>
          </div>

          {/* Contact Host Section */}
          <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="lg:max-w-[500px] max-w-auto">
                <h3 className="text-xl font-anton text-[#101010] uppercase mb-2">Contact Your Host</h3>
                <p className="text-base font-inter text-[#878787]">Have a question or special request? Chat with your host</p>
              </div>
              <Button variant="outline" className="border-[#0A1805] font-inter text-base h-14 rounded-md px-6">Contact Host</Button>
            </div>
          </div>

          {/* Travel with Peace of Mind Section */}
          <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="lg:max-w-[500px] max-w-auto">
                <h3 className="text-xl font-anton text-[#101010] uppercase mb-2">Travel With Peace of Mind</h3>
                <p className="text-base font-inter text-[#878787]">Find info about traveling safely in our Safety Resource Center</p>
              </div>
              <Button variant="outline" className="border-[#0A1805] font-inter text-base h-14 rounded-md px-6">Resource Center</Button>
            </div>
          </div>

          
        </div>
      </div>
      
    </div>
  );
};

export default BookingDetailsContent;
