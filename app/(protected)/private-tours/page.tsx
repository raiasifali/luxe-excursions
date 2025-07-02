'use client'
import PrivateToursHero from '@/components/private-tour/PrivateToursHero';
import ExperienceOverview from '@/components/private-tour/ExperienceOverview';
import YourItinerary from '@/components/private-tour/YourItinerary';
import Gallery from '@/components/private-tour/Gallery';
import SimilarExperiences from '@/components/private-tour/SimilarExperiences';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import ExcursionBanner from '@/components/home/ExcursionBanner';

export default function PrivateToursPage() {
  return (
    <div className="min-h-screen">
      <PrivateToursHero />
      <ExperienceOverview />
      <YourItinerary />
      <Gallery />
      <SimilarExperiences />
      <TestimonialSlider />
      <ExcursionBanner />
    </div>
  );
}