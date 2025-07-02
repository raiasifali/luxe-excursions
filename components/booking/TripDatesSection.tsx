
import { Button } from "@/components/ui/button";
import React from "react";

type TripDatesSectionProps = {
  selectedDate: number;
  setSelectedDate: (n: number) => void;
  showMoreDates: boolean;
  setShowMoreDates: (v: boolean) => void;
  visibleDates: { departure: string; arrival: string }[];
};

const TripDatesSection: React.FC<TripDatesSectionProps> = ({
  selectedDate,
  setSelectedDate,
  showMoreDates,
  setShowMoreDates,
  visibleDates,
}) => (
  <div>
    <h2 className="text-2xl font-anton font-normal text-[#101010] uppercase mb-4">TRIP DATES</h2>
    <div className="space-y-3">
      {visibleDates.map((date, index) => (
        <div key={index} className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
          selectedDate === index ? 'border-black bg-[#F3FFEF]' : 'border-gray-200 hover:bg-[#F3FFEF]'
        }`}
          onClick={() => setSelectedDate(index)}
        >
          <div className="flex items-center space-x-4 relative">
            <input
              type="radio"
              name="tripDate"
              value={date.departure}
              checked={selectedDate === index}
              onChange={() => setSelectedDate(index)}
              className="sr-only"
              id={`tripDate-${index}`}
            />
            <span
              className={
                `w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center rounded-full transition shrink-0 ` +
                (selectedDate === index ? 'border-2 border-black' : 'border border-gray-300')
              }
            >
              {selectedDate === index && (
                <span className="w-3 h-3 min-w-[0.75rem] min-h-[0.75rem] bg-black rounded-full block"></span>
              )}
            </span>
            <label htmlFor={`tripDate-${index}`} className="cursor-pointer flex flex-col select-none">
              <span className="text-sm font-medium font-inter text-[#878787] leading-normal tracking-normal">Trip Starts On</span>
              <span className="font-semibold text-[#101010] text-base font-inter leading-normal tracking-normal">{date.departure}</span>
            </label>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium font-inter text-[#878787] leading-normal tracking-normal">Trip Ends On</p>
            <p className="font-semibold text-[#101010] text-base font-inter leading-normal tracking-normal">{date.arrival}</p>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full py-6 mt-4 border-[#0A1805] font-semibold text-[#0A1805] text-base font-inter leading-normal tracking-normal" onClick={() => setShowMoreDates(!showMoreDates)}>
        {showMoreDates ? 'Show Less Dates' : 'Show More Dates'}
      </Button>
    </div>
  </div>
);

export default TripDatesSection;
