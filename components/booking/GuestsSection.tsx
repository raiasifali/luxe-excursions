
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import React from "react";

type GuestsSectionProps = {
  adults: number;
  setAdults: (n: number) => void;
  children: number;
  setChildren: (n: number) => void;
};

const GuestsSection: React.FC<GuestsSectionProps> = ({
  adults,
  setAdults,
  children,
  setChildren,
}) => (
  <div>
    <h2 className="text-2xl font-anton font-normal text-[#101010] uppercase mb-4">GUESTS</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold font-inter text-md text-[#101010]">Adults</p>
          <p className="text-base font-inter font-medium text-[#878787]">Age 13+</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 rounded-full p-0 border-gray-300"
            onClick={() => setAdults(Math.max(1, adults - 1))}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-normal font-anton text-lg text-[#101010] w-8 text-center">{adults}</span>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 rounded-full p-0 border-gray-300"
            onClick={() => setAdults(adults + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold font-inter text-md text-[#101010]">Children</p>
          <p className="text-base font-inter font-medium text-[#878787]">Age 2-12</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 rounded-full p-0 border-gray-300"
            onClick={() => setChildren(Math.max(0, children - 1))}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-normal font-anton text-lg text-[#101010] w-8 text-center">{children}</span>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 rounded-full p-0 border-gray-300"
            onClick={() => setChildren(children + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default GuestsSection;
