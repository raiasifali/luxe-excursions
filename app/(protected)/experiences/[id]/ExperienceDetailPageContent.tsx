import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { options as optionData } from '@/components/experiences/data';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { ExperienceDetailProps, ExperiencePrice } from '@/types/experience';
import routes from '@/lib/routes';




const ExperienceDetailPageContent: React.FC<ExperienceDetailProps> = ({ experience }) => {
  const router = useRouter();
  const [selectedPrice, setSelectedPrice] = useState<ExperiencePrice>(experience.prices[0]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
    const peopleParam = selectedPeople ? `&people=${selectedPeople}` : '';
    const selectedParam = selectedOptions.length ? `&selected=${encodeURIComponent(selectedOptions.join(','))}` : '';
    router.push(`${routes.ui.booking}-details?experienceId=${experience.id}&priceId=${selectedPrice.id}${peopleParam}${selectedParam}`);
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

      {/* Options Grid under experience info */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Excursions / Products / Experience options</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {optionData.map((opt) => {
            const isSelected = selectedOptions.includes(opt.id);
            const disabled = !isSelected && selectedOptions.length >= 3;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  if (opt.url) return; // external-only, do not toggle
                  setSelectedOptions((prev) => {
                    if (prev.includes(opt.id)) return prev.filter((x) => x !== opt.id);
                    if (prev.length >= 3) return prev;
                    return [...prev, opt.id];
                  });
                }}
                disabled={disabled}
                className={`group border rounded-xl p-3 text-left flex items-center gap-3 hover:shadow-md transition bg-white ${
                  isSelected ? 'ring-2 ring-[#E0C469] border-[#E0C469]' : ''
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="w-2 h-2 rounded-full bg-[#E0C469]" />
                <div className="flex-1 min-w-0">
                  {opt.url ? (
                    <Link href={opt.url} target="_blank" className="text-sm font-medium text-[#252525] hover:underline line-clamp-2">
                      {opt.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-[#252525] line-clamp-2">{opt.name}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        <div className="mt-3 text-xs text-gray-600">Selected: {selectedOptions.length}/3</div>
        <div className="mt-4">
          <Button onClick={handleBookNow} className="bg-[#E0C469] hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg">
            Continue to Booking Details
          </Button>
        </div>
      </section>

      {/* Participants & Price */}
      <section className={`participants-section mb-8 transition-all duration-700`} >
        <h2 className="text-xl font-semibold mb-4">Select Participants</h2>
        {peopleOptions.length > 0 ? (
          <div className="flex flex-wrap gap-3 mb-4">
            {peopleOptions.map(({ count, price }) => (
              <button
                key={String(price.id)}
                className={`rounded-lg px-5 py-2 font-medium border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2
                ${selectedPrice.id === price.id
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
                className={`rounded-lg px-5 py-2 font-medium border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2
                  ${selectedPrice.id === price.id
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
        <div className="text-lg font-bold text-yellow-700 mb-2">
          Price: {selectedPrice.currency} {Number(selectedPrice.value).toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
      </section>

      {/* Bring & Advice */}
      <section className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 transition-all duration-700`}>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-2 text-yellow-700">What to Bring</h3>
          <div className="prose prose-sm text-gray-700" dangerouslySetInnerHTML={{ __html: experience.bring }} />
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-2 text-yellow-700">Good to Know</h3>
          <div className="prose prose-sm text-gray-700" dangerouslySetInnerHTML={{ __html: experience.advice }} />
        </div>
      </section>

      {/* Book Now Button */}
      <div className={`flex justify-center mt-8 transition-all duration-700`}>
        <Button
          size="lg"
          className="bg-[#E0C469] hover:bg-black text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg transition-all duration-200"
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ExperienceDetailPageContent; 