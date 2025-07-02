import BookingTourCard from "./BookingTourCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

type BookingFormRightCardsProps = {
  promoCode: string;
  setPromoCode: (v: string) => void;
};

const BookingFormRightCards: React.FC<BookingFormRightCardsProps> = ({ promoCode, setPromoCode }) => (
  <div className="w-full lg:w-[519px] flex flex-col gap-6">
    {/* Top Card: Private Tours */}
    <BookingTourCard
      image="/assets/images/private-tour.svg"
      alt="Private Tours"
      title="PRIVATE TOURS"
      days="4 Days"
      location="London, Borough Market"
      type="Culinary"
      buttonText="View Itinerary and Map"
      buttonIcon="/assets/images/map-itin.svg"
    />
    {/* Bottom Card: Booking Summary, Price, Policy, Confirm */}
    <div className="border-2 border-[#0A1805] rounded-xl p-6 bg-white flex flex-col gap-6">
      {/* Booking Summary */}
      <div>
        <h3 className="font-anton text-xl text-[#101010] uppercase mb-4">BOOKING SUMMARY</h3>
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <img
              src="/assets/images/promo-code.svg"
              alt="Promo Code"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none"
            />
            <Input
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="h-14 rounded-md border border-[#101010] pl-12 pr-4 bg-white text-left text-base font-inter font-medium text-[#101010] shadow-none focus-visible:!outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button className="bg-[#E0C469] text-[#101010] hover:bg-[#E0C469]/90 px-6 h-14 rounded-md font-inter font-medium text-base">
            Claim
          </Button>
        </div>
      </div>
      {/* Price Details */}
      <div>
        <h3 className="font-anton text-xl text-[#101010] uppercase mb-4">PRICE DETAILS</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-base font-inter text-[#101010]">
            <span>$82.00 × 2 person</span>
            <span className="font-semibold">$ 164.00</span>
          </div>
          <div className="flex justify-between text-base font-inter text-[#101010]">
            <span>Room</span>
            <span className="font-semibold">$ 20.00</span>
          </div>
          <div className="flex justify-between text-base font-inter text-[#101010]">
            <span>Genius Discount</span>
            <span className="font-semibold">$ 24.00</span>
          </div>
          <p className="text-base font-inter text-[#878787]">
            You're getting a reduced rate because you're a Genius Member
          </p>
          <div className="flex justify-between text-base font-inter text-[#101010]">
            <span>Includes taxes and fees</span>
            <span className="font-semibold">$ 10.00</span>
          </div>
          <div className="flex justify-between items-center font-anton text-lg bg-[#E0C469] p-3 rounded-md">
            <span className="uppercase text-[#101010]">TOTAL PRICE</span>
            <span className="font-bold text-[#101010]">$ 170.00</span>
          </div>
        </div>
      </div>
      <Separator className="my-3" />
      {/* Cancellation Policy */}
      <div>
        <h3 className="font-anton text-2xl font-bold text-[#101010] uppercase mb-4">Cancellation Policy</h3>
        <div>
          <p className="mb-4">
            <span className="font-semibold text-[#101010]">Free cancellation before Jun 20.</span>
            <span className="text-[#878787] font-normal"> Cancel before check-in on Jun 24 for a partial refund. </span>
            <span className="font-semibold text-[#101010] cursor-pointer">Learn More</span>
          </p>
          <Separator className="my-4" />
          <p className="text-base font-inter text-[#101010] mb-6">
            By selecting the button below, you agree to the
            <a href="#" className="underline text-[#101010] ml-1">Guest Release and Waiver</a>, the
            <a href="#" className="underline text-[#101010] ml-1">Cancellation Policy</a>, the
            <a href="#" className="underline text-[#101010] ml-1">Guest Refund Policy</a>.
          </p>
          <Button className="w-full bg-[#E0C469] text-[#2C2C2C] hover:bg-[#E0C469]/90 py-4 text-lg font-medium font-inter rounded-md">
            Confirm and Pay
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default BookingFormRightCards;
