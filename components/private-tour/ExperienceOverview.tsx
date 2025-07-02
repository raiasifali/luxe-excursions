import React from 'react';
import { Button } from "@/components/ui/button";

const ExperienceOverview = () => {
  const features = [
    "EXPERT GUIDES",
    "LUXURY TRANSPORT",
    "SMALL GROUPS",
    "CUSTOM ITINERARY",
    "PHOTO SERVICES",
    "GOURMET MEALS"
  ];

  return (
    <section className="py-16 md:py-20 bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-[20px] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" 
                alt="Mountain landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-normal text-white uppercase">
              EXPERIENCE OVERVIEW
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              Embark on an exclusive journey tailored just for you. Our private tours offer unparalleled access to hidden gems, expert local guides, and luxury transportation that transforms ordinary sightseeing into extraordinary adventures.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#E0C469] rounded-full"></div>
                  <span className="text-sm font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black font-medium px-8 py-3 rounded-lg flex items-center gap-2">
              Book Now
              <span className="text-black">↗</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOverview;