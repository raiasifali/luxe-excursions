'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Search, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Excursions = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [guests, setGuests] = useState("");
  const [destination, setDestination] = useState("");

  const popularTrips = [
    {
      title: "Safari Splendor in Pejeta",
      price: "$1200",
      duration: "7 Days, 6 Nights",
      image: "/assets/images/Safari.png"
    },
    {
      title: "Bali Beach & Wellness",
      price: "$1800",
      duration: "5 Days, 4 Nights",
      image: "/assets/images/Bali-Beach.png"
    },
    {
      title: "New Zealand Adventure",
      price: "$1800",
      duration: "10 Days, 9 Nights",
      image: "/assets/images/Newzeland.png"
    },
    {
      title: "Iceland's Northern Lights",
      price: "$2353",
      duration: "12 Days, 11 Nights",
      image: "/assets/images/iceland.png"
    },
    {
      title: "Maldives Island Escape",
      price: "$3024",
      duration: "7 Days, 6 Nights",
      image: "/assets/images/Maldives.png"
    },
    {
      title: "Parisian Getaway",
      price: "$2240",
      duration: "14 Days, 13 Nights",
      image: "/assets/images/Eifel.png"
    }
  ];

  const recommendedTrips = [
    {
      title: "Safari Splendor in Pejeta",
      price: "$1200",
      duration: "7 Days, 6 Nights",
      image: "/assets/images/Safari.png"
    },
    {
      title: "Bali Beach & Wellness",
      price: "$1800",
      duration: "5 Days, 4 Nights",
      image: "/assets/images/Bali-Beach.png"
    },
    {
      title: "New Zealand Adventure",
      price: "$1800",
      duration: "10 Days, 9 Nights",
      image: "/assets/images/Newzeland.png"
    },
    {
      title: "Iceland's Northern Lights",
      price: "$2353",
      duration: "12 Days, 11 Nights",
      image: "/assets/images/iceland.png"
    },
    {
      title: "Maldives Island Escape",
      price: "$3024",
      duration: "7 Days, 6 Nights",
      image: "/assets/images/Maldives.png"
    },
    {
      title: "Parisian Getaway",
      price: "$2240",
      duration: "14 Days, 13 Nights",
      image: "/assets/images/Eifel.png"
    }
  ];

  const TripCard = ({ trip }: { trip: typeof popularTrips[0] }) => (
    <Card className="group relative overflow-hidden rounded-3xl shadow-lg xl:w-[414px] w-full h-[414px] cursor-pointer transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Blurry text background at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-[110px] bg-black/40 backdrop-blur-md flex flex-col justify-end p-6 z-10">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-anton text-2xl text-white font-bold uppercase">{trip.title}</h3>
          <span className="font-anton text-2xl text-white font-bold">{trip.price}</span>
        </div>
        <p className="font-anton text-lg text-white font-bold mt-2">{trip.duration}</p>
      </div>
      {/* Hover overlay with blur and button */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
        <Button className="bg-white/90 text-black hover:bg-white transition-all duration-300 px-8 py-3 rounded-lg font-medium shadow-lg">
          See Details
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-20 mt-20">
        <div
          className="relative h-[532px] rounded-[20px] bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/Excursion-Hero-Img.png')"
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col items-center gap-4 max-w-[1160px] w-full mx-auto h-full justify-center">
            {/* Heading */}
            <h1 className="font-anton text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight tracking-normal text-white uppercase text-center">
              Discover Our Exclusive Trips
            </h1>
            {/* Description */}
            <p className="font-inter text-base md:text-lg leading-tight text-[#F5F5F5] text-center max-w-6xl px-4">
              Dive into our exclusive collection of ultimate trips, designed to offer unparalleled experiences and unforgettable adventures. Our carefully curated tours promise to deliver exceptional moments and lifelong memories.
            </p>
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center max-[575px]:w-[90%] px-2 sm:px-4 md:px-[20px] py-3 md:py-[8px] gap-3 md:gap-[24px] w-full xl:max-w-[1160px] lg:max-w-[800px] md:max-w-[600px] bg-white rounded-[8px] mt-8">
              {/* Destination */}
              <div className="flex items-center gap-2 flex-1 w-full min-h-[48px]">
                <MapPin className="h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="md:border-r border-r-0 border-[#5A5A5A] rounded-tr-none rounded-br-none rounded-tl-none rounded-bl-none border-l-0 border-y-0 shadow-none focus-visible:ring-0 text-gray-600 placeholder:text-[#5A5A5A] min-h-[48px]"
                />
              </div>
              {/* Date */}
              <div className="flex items-center flex-1 w-full min-h-[48px]">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "md:border-r border-r-0 border-[#5A5A5A] rounded-tr-none rounded-br-none rounded-tl-none rounded-bl-none w-full justify-start text-left font-normal px-0 hover:bg-transparent min-h-[48px]",
                        !checkIn && "text-[#5A5A5A]"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                      {checkIn ? format(checkIn, "PPP") : <span>Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {/* Guests */}
              <div className="flex items-center gap-2 flex-1 w-full min-h-[48px]">
                <Users className="h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="border-none rounded-tr-none rounded-br-none rounded-tl-none rounded-bl-none shadow-none focus-visible:ring-0 text-gray-600 placeholder:text-[#5A5A5A] min-h-[48px]"
                />
              </div>
              {/* Search Button */}
              <Button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black font-medium px-6 py-3 w-full md:w-auto min-h-[48px]">
                Search Trips
                <img src="/assets/images/Arrow-up.svg" alt="" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Trips Section */}
      <section className="pt-16 px-4 md:px-[60px]">
        <div className="xl:max-w-7xl max-w-full mx-auto">
          <h2 className="font-anton text-3xl md:text-5xl font-normal text-[#252525] uppercase mb-12 text-center md:text-left">
            Popular Trips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTrips.map((trip, index) => (
              <TripCard key={index} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation For You Section */}
      <section className="pt-16 px-4 md:px-[60px] bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-anton text-3xl md:text-5xl font-normal text-[#252525] uppercase mb-12 text-center md:text-left">
            Recommendation For You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedTrips.map((trip, index) => (
              <TripCard key={index} trip={trip} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excursions;
