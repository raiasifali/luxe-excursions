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
                src="/assets/images/Illustration.svg" 
                alt="Mountain landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-normal text-white uppercase">
              EXPERIENCE OVERVIEW
            </h2>
            
            <p className="font-inter text-base md:text-lg leading-relaxed text-gray-300">
              Welcome to Your Diamond Experience! Get ready for an extraordinary adventure filled with luxury, exploration, and unforgettable moments as you enjoy the stunning island of Tenerife. Below is your detailed itinerary designed to maximise your holiday experience.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <img src="/assets/images/Private-tour-white-tick.svg" alt="" />
                  <span className="font-inter text-sm font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black font-medium px-8 py-3 rounded-lg flex items-center gap-2">
              Book Now
              <img src="/assets/images/Arrow-up.svg" alt="arrow-up" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOverview;