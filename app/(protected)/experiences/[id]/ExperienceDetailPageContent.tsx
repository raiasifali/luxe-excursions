import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';
import { options as optionData } from '@/components/experiences/data';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { ExperienceDetailProps, ExperiencePrice } from '@/types/experience';
import routes from '@/lib/routes';
import { Calendar } from '@/components/ui/calendar';
import { staticExperiences } from '@/components/experiences/static-experiences';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, CalendarDays, Clock } from 'lucide-react';




const ExperienceDetailPageContent: React.FC<ExperienceDetailProps> = ({ experience }) => {
  const router = useRouter();
  const [selectedPrice, setSelectedPrice] = useState<ExperiencePrice>(experience.prices[0]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const peopleOptions = useMemo(() => {
    const map: { count: number; price: ExperiencePrice }[] = [];
    const seen = new Set<number>();
    for (const p of experience.prices) {
      const match = String(p.title).match(/\d+/);
      if (match) {
        const count = parseInt(match[0], 10);
        if (!seen.has(count)) {
          seen.add(count);
          map.push({ count, price: p });
        }
      }
    }
    return map.sort((a, b) => a.count - b.count);
  }, [experience.prices]);

  const selectedPeople = useMemo(() => {
    const m = String(selectedPrice.title).match(/\d+/);
    return m ? parseInt(m[0], 10) : undefined;
  }, [selectedPrice]);

  const handleBookNow = () => {
    if (selectedOptions.length < 3) {
      toast({
        title: 'Please select 3 options',
        description: 'Choose at least 3 Excursions/Products before booking.',
      });
      return;
    }
    if (!selectedDate || !selectedTime) {
      setScheduleOpen(true);
      return;
    }
    const peopleParam = selectedPeople ? `&people=${selectedPeople}` : '';
    const selectedParam = selectedOptions.length ? `&selected=${encodeURIComponent(selectedOptions.join(','))}` : '';
    const dateParam = `&date=${encodeURIComponent(selectedDate.toISOString().slice(0,10))}`;
    const timeParam = `&time=${encodeURIComponent(selectedTime)}`;
    router.push(`${routes.ui.booking}-details?experienceId=${experience.id}&priceId=${selectedPrice.id}${peopleParam}${selectedParam}${dateParam}${timeParam}`);
  };

  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-4 py-8">
      {/* Hero Image with overlay */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 group">
        <img
            src={experience.images[0]}
            alt={experience.title}
            className="w-full h-56 sm:h-72 md:h-96 object-cover object-center rounded-t-2xl"
            style={{ minHeight: 180, maxHeight: 400 }}
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">
            {experience.title}
          </h1>
          <div className="flex items-center text-white/90 text-base mb-2">
            <span className="mr-2"><img src="/assets/images/Location-Filled.svg" alt="location" /></span>
            <span>{experience.location}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.highlights.map((h, i) => (
              <Badge
                key={i}
                className="bg-[#E0C469] text-gray-800 font-medium rounded-full px-3 py-1 text-xs shadow hover:bg-yellow-200 transition"
              >
                {h}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <section className={`mb-8 transition-all duration-700`}>
        <div className="prose prose-lg max-w-none text-gray-800 description" dangerouslySetInnerHTML={{ __html: experience.description }} />
      </section>

      {/* Selection Status */}
      <section className="mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-white/70 border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[#252525] text-sm font-medium">
              <CheckCircle className={`h-4 w-4 ${selectedOptions.length >= 3 ? 'text-emerald-600' : 'text-gray-400'}`} />
              Selected: {selectedOptions.length}/3
            </span>
            <span className="inline-flex items-center gap-2 text-[#252525] text-sm font-medium">
              <CalendarDays className={`h-4 w-4 ${selectedDate ? 'text-emerald-600' : 'text-gray-400'}`} />
              {selectedDate ? selectedDate.toDateString() : 'No date'}
            </span>
            <span className="inline-flex items-center gap-2 text-[#252525] text-sm font-medium">
              <Clock className={`h-4 w-4 ${selectedTime ? 'text-emerald-600' : 'text-gray-400'}`} />
              {selectedTime || 'No time'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setScheduleOpen(true)} className="bg-[#E0C469] text-black hover:bg-[#d1b15a]">Select Date & Time</Button>
          </div>
        </div>
      </section>

      {/* Availability - Date & Time Modal */}
      <Dialog open={scheduleOpen} onOpenChange={setScheduleOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Select Date & Time</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-inter text-sm text-[#878787]">Date</span>
              <div className="border rounded-md p-2">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(d) => { setSelectedDate(d); setSelectedTime(undefined); }}
                  disabled={(day) => {
                    const exp = staticExperiences.find(e => e.id === experience.id);
                    const iso = new Date(day.getFullYear(), day.getMonth(), day.getDate()).toISOString().slice(0,10);
                    const allowed = exp?.availableDates || [];
                    return !allowed.includes(iso);
                  }}
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-inter text-sm text-[#878787]">Time</span>
              <div className="flex flex-wrap gap-2">
                {(staticExperiences.find(e => e.id === experience.id)?.timeSlots || ['10:00 AM','1:00 PM','3:00 PM','6:00 PM']).map(slot => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    disabled={!selectedDate}
                    className={`px-3 py-2 rounded-md border text-sm transition ${selectedTime === slot ? 'bg-[#E0C469] text-black border-[#E0C469]' : 'bg-white text-[#101010] border-gray-300 hover:bg-gray-50'} ${!selectedDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >{slot}</button>
                ))}
              </div>
              {selectedDate && selectedTime && (
                <div className="text-sm text-[#101010]">Chosen: {selectedDate.toDateString()} • {selectedTime}</div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                if (!selectedDate || !selectedTime) return;
                setScheduleOpen(false);
                toast({ title: 'Schedule saved', description: 'Date & time selected for booking.' });
              }}
              disabled={!selectedDate || !selectedTime}
              className="bg-[#E0C469] text-black hover:bg-[#d1b15a]"
            >
              Save & Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Two-column: left adventures, right participants + CTA */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Choose Your Adventures</h2>
            <span className="text-xs md:text-sm text-[#878787]">Select up to 3</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {optionData.map((opt) => {
              const isSelected = selectedOptions.includes(opt.id);
              const disabled = !isSelected && selectedOptions.length >= 3;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedOptions((prev) => {
                      if (prev.includes(opt.id)) return prev.filter((x) => x !== opt.id);
                      if (prev.length >= 3) return prev;
                      return [...prev, opt.id];
                    });
                  }}
                  disabled={disabled}
                  className={`group border rounded-xl p-3 text-left flex items-center gap-3 hover:shadow-md transition bg-white/90 backdrop-blur-sm ${
                    isSelected ? 'ring-2 ring-[#E0C469] border-[#E0C469] bg-[#FFF8E1]' : 'border-gray-200'
                  } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-600' : 'bg-[#E0C469]'}`} />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-[#252525] line-clamp-2">{opt.name}</span>
                  </div>
                  {opt.url && (
                    <a
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-[#E0C469] underline shrink-0 hover:text-black"
                    >
                      Open
                    </a>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Select Participants</h2>
          {peopleOptions.length > 0 ? (
            <div className="flex flex-wrap gap-3 mb-4">
              {peopleOptions.map(({ count, price }) => (
                <button
                  key={String(price.id)}
                  className={`rounded-lg px-5 py-2 font-medium border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2 ${selectedPrice.id === price.id
                    ? 'bg-[#E0C469] text-white border-yellow-400 shadow-lg scale-105'
                    : 'bg-white text-yellow-700 border-yellow-300 hover:bg-yellow-100'}`}
                  onClick={() => setSelectedPrice(price)}
                  type="button"
                >
                  {count} {count === 1 ? 'Person' : 'People'}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3 mb-4">
              {experience.prices.map((price) => (
                <button
                  key={price.id}
                  className={`rounded-lg px-5 py-2 font-medium border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2 ${selectedPrice.id === price.id
                    ? 'bg-[#E0C469] text-white border-yellow-400 shadow-lg scale-105'
                    : 'bg-white text-yellow-700 border-yellow-300 hover:bg-yellow-100'}`}
                  onClick={() => setSelectedPrice(price)}
                  type="button"
                >
                  {price.title}
                </button>
              ))}
            </div>
          )}
          <div className="text-lg font-bold text-yellow-700 mb-4">
            Price: {selectedPrice.currency} {Number(selectedPrice.value).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <Button
            size="lg"
            className="w-full bg-[#E0C469] hover:bg-black text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleBookNow}
            disabled={selectedOptions.length < 3}
          >
            Book Now
          </Button>
        </div>
      </section>

      
    </div>
  );
};

export default ExperienceDetailPageContent; 