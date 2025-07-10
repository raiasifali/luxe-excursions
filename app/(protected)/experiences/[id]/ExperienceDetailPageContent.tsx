import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExperienceDetailProps, ExperiencePrice } from '@/types/experience';
import routes from '@/lib/routes';




const ExperienceDetailPageContent: React.FC<ExperienceDetailProps> = ({ experience }) => {
  const router = useRouter();
  const [selectedPrice, setSelectedPrice] = useState<ExperiencePrice>(experience.prices[0]);

  const handleBookNow = () => {
    router.push(`${routes.ui.booking}?experienceId=${experience.id}&priceId=${selectedPrice.id}`);
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

      {/* Participants & Price */}
      <section className={`participants-section mb-8 transition-all duration-700`} >
        <h2 className="text-xl font-semibold mb-4">Select Participants</h2>
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