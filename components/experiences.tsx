'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import routes from '@/lib/routes';
import { staticExperiences } from '@/components/experiences/static-experiences';

interface EventLike {
  id: string;
  title: string;
  description: string;
  images: string[];
  url?: string;
  prices?: { value: string; currency: string }[];
}

const Experiences = () => {
  const [events, setEvents] = useState<EventLike[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      // Use local static dataset instead of API
      const allowed = new Set(['diamond-experience', 'gold-experience', 'silver-experience']);
      setEvents(staticExperiences.filter((e) => allowed.has(e.id)) as any);
    } catch (err: any) {
      setError('Failed to load experiences.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
      </div>
    );
  }

  // Only show error if there is an error and no events loaded
  if (error && (!events || events.length === 0)) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  // Show 'No events found.' only if not loading, not error, and events is empty
  if (!error && events.length === 0) {
    return <div className="text-gray-500 col-span-full">No events found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-20 py-8">
      <h2 className="text-2xl md:text-4xl font-bold text-[#252525] mb-6">Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div key={event.id || idx} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={event.images?.[0] || `https://images.pexels.com/photos/159711${(idx % 6) + 1}/pexels-photo-159711${(idx % 6) + 1}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop`}
              alt={event.title || `Experience ${idx + 1}`}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#252525] mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#E0C469] font-bold text-lg">
                  {Array.isArray(event.prices) && event.prices?.length
                    ? `From ${event.prices[0].currency} ${Math.min(...event.prices.map((p) => parseFloat(p.value))).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    : 'Price varies'}
                </span>
                {event.url ? (
                  <a href={event.url} target="_blank" className="bg-[#E0C469] hover:bg-[#d1b15a] text-black px-4 py-2 rounded-lg font-medium transition">Official</a>
                ) : (
                  <Link href={`${routes.ui.experiences}/${event.id}`}>
                    <button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black px-4 py-2 rounded-lg font-medium transition">
                      Detail
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences; 