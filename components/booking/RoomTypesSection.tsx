
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const RoomTypesSection: React.FC = () => (
  <div>
    <h2 className="text-2xl font-anton font-normal text-[#101010] uppercase mb-4">ROOM TYPES</h2>
    <div>
      <p className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2">Select Your Room</p>
      <Select defaultValue="1-adult">
        <SelectTrigger
          className="w-full h-14 px-6 rounded-md border border-gray-300 bg-white text-left text-lg font-medium text-[#101010] focus:outline-none focus:ring-2 focus:ring-[#E0C469] focus:border-[#E0C469] transition shadow-none"
        >
          <SelectValue placeholder="1 Room for 1 Adult" />
        </SelectTrigger>
        <SelectContent
          className="rounded-xl border border-gray-300 bg-white shadow-none mt-2"
        >
          <SelectItem value="1-adult" className="text-[#101010] text-lg px-6 py-3 hover:bg-gray-100 cursor-pointer">
            1 Room for 1 Adult
          </SelectItem>
          <SelectItem value="2-adults" className="text-[#101010] text-lg px-6 py-3 hover:bg-gray-100 cursor-pointer">
            1 Room for 2 Adults
          </SelectItem>
          <SelectItem value="family" className="text-[#101010] text-lg px-6 py-3 hover:bg-gray-100 cursor-pointer">
            Family Room
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
);

export default RoomTypesSection;
