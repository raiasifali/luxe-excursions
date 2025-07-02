'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Emily, Solo Traveler",
      review:
        "As a solo traveler, I felt completely taken care of by Wanderlust. Their recommendations were spot-on, and I never felt alone thanks to the wonderful guides and group tours they arranged. Highly recommended!",
      image:
        "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Marcus Williams",
      review: "From start to finish, this was the most memorable vacation we've ever had. The private tours were incredible and the level of service was unmatched.",
      image: "https://images.pexels.com/photos/1472099/pexels-photo-1472099.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Sofia Rodriguez",
      review: "Pure luxury and elegance. The team went above and beyond to ensure every detail was perfect. We can't wait to book our next adventure!",
      image: "https://images.pexels.com/photos/1580489/pexels-photo-1580489.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="lg:py-[100px] md:py-12 py-10 relative bg-cover bg-center bg-black mt-[100px]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-20 w-full max-w-7xl">
        {/* Left: Image and Name/Role */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[350px] max-w-full h-auto lg:h-[440px] justify-between">
          <div className="w-full max-w-[320px] h-[320px] md:h-[400px] rounded-xl border-4 border-white overflow-hidden shadow-lg xl:skew-x-[5deg]">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="w-full h-full object-cover scale-x-[-1]"
            />
          </div>
          <div className="mt-4 m-auto">
            <span className="block text-base md:text-lg font-bold text-white uppercase tracking-wider text-center lg:text-left">
              {testimonials[currentSlide].name}
            </span>
          </div>
        </div>

        {/* Right: Heading and Testimonial, with nav at bottom */}
        <div className="flex-1 flex flex-col h-auto lg:h-[440px] justify-between items-center lg:items-start w-full">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white uppercase mb-4 md:mb-6 text-center lg:text-left tracking-wider pt-0">
              What Our Client Say
            </h2>
            <blockquote className="font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-[120%] text-white w-full max-w-full mx-auto">
              "{testimonials[currentSlide].review}"
            </blockquote>
          </div>
          {/* Navigation row: arrows and bullets, aligned with image bottom */}
          <div className="flex items-center justify-between gap-4 md:gap-6 w-full max-w-full mt-6 mb-0">
            <Button
              onClick={prevSlide}
              className="flex flex-row items-center p-1 w-10 h-10 border-2 border-[#E0C469] rounded bg-transparent text-[#E0C469] hover:bg-[#E0C469]/20 transition-colors"
              aria-label="Previous"
            >
              {/* Filled left chevron SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <polygon points="15,6 9,12 15,18" />
              </svg>
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full border-2 border-yellow-400 transition-colors cursor-pointer ${
                    index === currentSlide ? "bg-yellow-400" : "bg-transparent"
                  }`}
                ></span>
              ))}
            </div>
            <Button
              onClick={nextSlide}
              className="flex flex-row items-center p-1 w-10 h-10 border-2 border-[#E0C469] rounded bg-transparent text-[#E0C469] hover:bg-[#E0C469]/20 transition-colors"
              aria-label="Next"
            >
              {/* Filled right chevron SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <polygon points="9,6 15,12 9,18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;