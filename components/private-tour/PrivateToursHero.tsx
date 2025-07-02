import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const PrivateToursHero = () => {
  return (
    <section className="w-full px-4 md:px-20 my-20 pt-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h1 className="font-bold text-xl md:text-5xl text-[#252525] mb-3">Private Tours</h1>
            <div className="flex flex-wrap font-medium items-center gap-6 text-[#252525] text-xl tracking-tight leading-normal">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#E0C469]" />
                London, United Kingdom
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E0C469]" />
                5 days, 4 nights
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#E0C469] fill-current" />
                4.8/5 from 20+ reviewer
              </span>
            </div>
          </div>
          <div className="flex gap-4 self-start md:self-center">
            <button className="flex items-center gap-2 border border-[#232323] rounded-lg px-6 py-2 text-base font-medium hover:bg-gray-100 transition">
              <span>📤</span>
              Share
            </button>
            <button className="flex items-center gap-2 border border-[#232323] rounded-lg px-6 py-2 text-base font-medium hover:bg-gray-100 transition">
              <span>❤️</span>
              Favorite
            </button>
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Large Image */}
          <div className="w-full">
            <div className="relative h-[400px] md:h-[500px] rounded-[20px] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" 
                alt="Private tour destination" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side - Two Smaller Images */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[190px] md:h-[240px] rounded-[20px] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop" 
                alt="Private tour experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[190px] md:h-[240px] rounded-[20px] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop" 
                alt="Private tour location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateToursHero;