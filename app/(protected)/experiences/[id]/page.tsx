'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getExperienceById } from '@/lib/booking-api';
import ExperienceDetailPageContent from './ExperienceDetailPageContent';
import { ExperienceDetailProps } from '@/types/experience';

const ExperienceDetailPageWrapper = () => {
  const params = useParams() as { id?: string };
  const id = params.id;
  const [experience, setExperience] = useState<ExperienceDetailProps['experience'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExperience() {
      setLoading(true);
      setError(null);
      try {
        if (!id) return;
        const data = await getExperienceById(id);
        setExperience(data);
      } catch (err: any) {
        setError('Failed to load experience.');
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchExperience();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  if (!experience) {
    return <div className="text-gray-500 text-center py-10">Experience not found.</div>;
  }

  return <ExperienceDetailPageContent experience={experience} />;
};

export default ExperienceDetailPageWrapper;
