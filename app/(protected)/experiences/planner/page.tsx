"use client";
import React, { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { options } from '@/components/experiences/data';
import { Button } from '@/components/ui/button';

const MAX_SELECTION = 3;

const PlannerPage: React.FC = () => {
  const router = useRouter();
  const search = useSearchParams();
  const preselected = useMemo(() => (search.get('selected') || '').split(',').filter(Boolean), [search]);
  const presetPeople = Number(search.get('people') || '0');

  const [selected, setSelected] = useState<string[]>(preselected);
  const [people, setPeople] = useState<number>(presetPeople > 0 ? presetPeople : 2);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= MAX_SELECTION) return prev;
      return [...prev, id];
    });
  };

  const proceed = () => {
    const selectedParam = encodeURIComponent(selected.join(','));
    router.push(`/booking-details?selected=${selectedParam}&people=${people}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-20 py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-[#252525] mb-2">Plan Your Experience</h1>
      <p className="text-gray-600 mb-6">Select up to 3 options and choose number of people.</p>

      <div className="flex items-center gap-3 mb-6">
        <label htmlFor="peopleCount" className="text-sm text-gray-700">People</label>
        <input
          type="number"
          min={1}
          max={12}
          value={people}
          id="peopleCount"
          aria-label="Number of people"
          placeholder="2"
          onChange={(e) => setPeople(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
          className="w-24 border rounded-md px-3 py-2"
        />
        <span className="text-xs text-gray-500">You can adjust later.</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          const disabled = !isSelected && selected.length >= MAX_SELECTION;
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              disabled={disabled}
              className={`border rounded-xl p-3 text-left transition bg-white hover:shadow-md ${
                isSelected ? 'ring-2 ring-[#E0C469] border-[#E0C469]' : ''
              } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="text-sm font-medium text-[#252525] line-clamp-2">{opt.name}</div>
              {opt.url && (
                <span className="text-xs text-[#E0C469]">Official site available</span>
              )}
              <div className="mt-2 text-xs text-gray-500">{isSelected ? 'Selected' : 'Tap to select'}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="text-sm text-gray-600">Selected: {selected.length}/{MAX_SELECTION}</div>
        <Button onClick={proceed} disabled={selected.length === 0} className="bg-[#E0C469] hover:bg-[#d1b15a] text-black">
          Continue to Booking Details
        </Button>
      </div>
    </div>
  );
};

export default PlannerPage;


