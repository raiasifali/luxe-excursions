import React from 'react';
import { Button } from '../ui/button';
import { Calendar } from 'lucide-react';

const itinerary = [
  {
    title: 'Arrival & Orientation',
    details: [
      {
        heading: 'Arrival at Tenerife',
        text: 'Upon your arrival at Tenerife, our representative will greet you at the airport and assist with your luggage.'
      },
      {
        heading: 'Luxury Vito Transfer to Accommodation',
        text: 'Enjoy a comfortable ride in a luxury Vito as you are transferred to your accommodation. Take in the beautiful scenery as you travel to your hotel or villa.'
      },
      {
        heading: 'Evening Dinner (Optional)',
        text: 'Kick off your holiday with dinner at a local restaurant, where you can savour traditional Canarian cuisine while soaking in the vibrant atmosphere of Tenerife. We can advice and book a list of high end restaurants and can provide transfers.'
      }
    ],
    image: '/assets/images/Itinerary.svg',
    date: 'Day 1: Mon, 8 August 2024'
  },
  { title: 'Private Yacht Charter' },
  { title: 'Choose Your Excursions' },
  { title: 'Departure Day' }
];

const YourItinerary = () => {
  return (
    <section className="w-full flex flex-col items-center lg:px-4 px-5 xl:py-[100px] lg:py-14 md:py-10 py-8">
      <h2 className="text-3xl md:text-5xl font-bold text-[#232323] mb-8 w-full max-w-[1280px] uppercase">YOUR ITINERARY</h2>
      <div className="flex xl:flex-row flex-col flex-wrap items-start gap-[30px] xl:w-[1280px] w-auto mx-auto">
        {/* Stepper */}
        <div className="flex flex-col md:justify-center justify-start items-center xl:w-[429px] w-full xl:h-[336px] h-auto gap-[20px]">
          {itinerary.map((step, idx) => (
            <Button
              key={step.title}
              className={
                idx === 0
                  ? 'flex flex-row justify-center items-center xl:w-[429px] h-[69px] w-full px-[20px] gap-[12px] bg-[#E0C469] hover:bg-[#d1b15a] rounded-[8px] text-left text-[24px] leading-[120%] text-[#2C2C2C] font-bold uppercase transition-colors'
                  : 'flex flex-row justify-center items-center xl:w-[429px] h-[69px] w-full px-[20px] gap-[12px] bg-white border border-[#8D8D8D] hover:bg-gray-50 rounded-[8px] text-left text-[24px] leading-[120%] text-[#252525] font-normal transition-colors'
              }
            >
              <span className={idx === 0 ? 'font-bold flex-grow text-left' : 'font-normal flex-grow text-left'}>
                {idx + 1}. {step.title}
              </span>
              <img src="/assets/images/Arrow-up.svg" alt="Arrow-up" />
            </Button>
          ))}
        </div>
        {/* Image */}
        <div className="flex justify-center items-start xl:w-[343px] w-full xl:h-[514px] h-auto max-w-[340px] mx-auto">
          <img
            src={itinerary[0].image}
            alt="Itinerary Main"
            className="rounded-[20px] xl:w-[343px] w-full xl:h-[514px] h-auto object-cover"
          />
        </div>
        {/* Details */}
        <div className="flex flex-col items-start xl:w-[448px] w-full h-auto xl:h-[514px] gap-[77px]">
          <div className="flex flex-col gap-[20px] w-full">
            <span className="flex flex-row items-center px-[20px] py-[8px] gap-[8px] w-[242px] h-[40px] bg-[#F5F5F5] rounded-[12px] text-[14px] font-medium text-[#252525] mb-0">
              <img src="/assets/images/Calender-grey.svg" alt="" />
              {itinerary[0].date}
            </span>
            {itinerary[0].details.map((section, idx) => (
              <div key={section.heading} className="flex flex-col justify-center items-center gap-[12px] xl:w-[448px] w-full">
                <h3 className="text-[18px] leading-[120%] text-[#252525] uppercase w-full font-bold">
                  {section.heading}
                </h3>
                <p className="text-[16px] leading-[120%] text-[#5A5A5A] w-full">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
          <Button className="flex flex-row justify-center items-center gap-[12px] w-[204px] h-[64px] px-[40px] py-[20px] bg-[#E0C469] hover:bg-[#E0C469]/90 rounded-[8px] font-bold text-[18px] leading-[120%] text-[#2C2C2C] mt-0">
            Book Now
            <img src="/assets/images/Arrow-up.svg" alt="Arrow-up" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YourItinerary;