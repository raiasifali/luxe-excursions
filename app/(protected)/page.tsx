import FilterSection from '@/components/home/FilterSection';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import ExcursionBanner from '@/components/home/ExcursionBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header Section with Full Background Image */}
      <section className="relative h-screen bg-cover bg-center" style={{
      backgroundImage: "url('/assets/images/hero-image.svg')"
    }}>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center mx-auto px-20">
            <h1 className="font-anton text-4xl md:text-6xl lg:text-[64px] font-normal mb-6 text-white !leading-[120%] animate-fade-in">
              EXPLORE THE WORLD'S MOST BREATHTAKING AND<br />
              UNFORGETTABLE TRAVEL DESTINATIONS
            </h1>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <FilterSection />

      {/* Welcome Section with Cards */}
      <section className="py-20" style={{
      backgroundColor: '#070707'
    }}>
        <div className="mx-auto xl:px-20 px-5 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-[64px] font-anton font-normal text-white mb-8">
            Welcome to Luxe Excursions Tenerife
          </h2>
          <p className="text-base text-white lg:max-w-[1062px] max-w-full mx-auto leading-relaxed mb-16">
            As a premier luxury excursion shop, we specialise in offering an unparalleled array of tours, parties, adventures and rentals that showcase the breathtaking beauty of Tenerife. Our mission is to create unforgettable experiences that leave a lasting impression on every guest, ensuring that each moment is infused with luxury, excitement, and joy.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Private Tours Card */}
            <div className="group relative lg:h-[587px] md:h-auto rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img 
                src="/assets/images/private-tour.jpg"
                alt="Private Tours" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0">
                <div className="absolute w-[93%] left-1/2 -translate-x-1/2 bottom-6 bg-[#FCFCFC03] group-hover:bg-black/80 backdrop-blur-sm rounded-xl px-6 py-4 flex flex-col items-center transition-all duration-300">
                  <h3 className="font-anton font-normal uppercase text-white text-3xl md:text-3xl mb-2 text-center">
                    Private Tours
                  </h3>
                  <p className="w-[246px] h-12 font-inter font-medium text-base leading-[150%] text-center text-white">
                    Explore Tenerife's hidden gems in comfort and style
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Rentals Card */}
            <div className="group relative lg:h-[587px] md:h-auto rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img 
                src="/assets/images/premium-rentals.jpg" 
                alt="Premium Rentals" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0">
                <div className="absolute w-[92%] left-1/2 -translate-x-1/2 bottom-6 bg-[#FCFCFC03] group-hover:bg-black/80 backdrop-blur-sm rounded-xl px-6 py-4 flex flex-col items-center transition-all duration-300">
                  <h3 className="font-anton font-bold uppercase text-white text-2xl md:text-3xl mb-2 text-center">
                    Premium Rentals
                  </h3>
                  <p className="w-[246px] h-12 font-inter font-medium text-base leading-[150%] text-center text-white">
                    Cars, boats, and gear to elevate your trip
                  </p>
                </div>
              </div>
            </div>

            {/* Two Stacked Cards */}
            <div className="flex flex-col gap-4 lg:h-[587px] md:h-auto">
              <div className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
                <img 
                  src="/assets/images/adventure-activities.jpg" 
                  alt="Adventure Activities" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                  <div className="bg-[#FCFCFC03] group-hover:bg-black/80 backdrop-blur-sm rounded-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                    <h3 className="text-xl text-white font-anton font-normal mb-1 text-center">
                      Adventure Activities
                    </h3>
                    <p className="text-white/90 text-sm font-inter font-normal text-center">
                      Jet skis, paragliding, hiking, and more
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
                <img 
                  src="/assets/images/snow-mountain.jpg" 
                  alt="Water Sports" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Exclusive Parties Card */}
            <div className="group relative lg:h-[587px] md:h-auto rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img 
                src="/assets/images/exclusive-parties.jpg" 
                alt="Exclusive Parties" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                <div className="bg-[#FCFCFC03] group-hover:bg-black/80 backdrop-blur-sm rounded-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                  <h3 className="text-xl text-white font-anton font-normal mb-1 text-center">
                    Exclusive Parties
                  </h3>
                  <p className="text-white/90 text-sm font-inter font-normal text-center">
                    Celebrate on yachts, beaches, or private venues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Text Section with Gradient */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-20 text-center">
          <blockquote className="xl:w-[1280px] w-auto h-auto font-anton font-normal xl:text-6xl xl:leading-none lg:text-3xl md:text-2xl text-xl leading-[120%] uppercase">
            <span style={{
            color: '#101010'
          }}>
              Comprehensive and tailored travel services crafted to surpass your{' '}
            </span>
            <span className="text-[#D6D6D6]">
              every expectation and fulfill your unique travel desires.
            </span>
          </blockquote>
        </div>
      </section>

      {/* Diamond Experience Banner with margins */}
      <section className="pb-6">
        <div className="mx-auto xl:px-20 lg:px-10 px-5">
          <div className="relative bg-cover bg-center rounded-2xl overflow-hidden" style={{
            backgroundImage: "url('/assets/images/Destination.png')"
          }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 px-8 py-20 text-center">
              <h2 className="font-anton font-normal text-2xl md:text-3xl lg:text-[32px] uppercase text-white text-center max-w-full mx-auto">
                DIAMOND EXPERIENCE
              </h2>
              <h3 className="font-anton font-normal text-base md:text-lg lg:text-[18px] uppercase text-white text-center w-[822px] h-[58px] max-w-full mx-auto">
                PRIVATE YACHT CHARTER (3 HOURS)
              </h3>
              <p className="font-inter text-sm leading-relaxed font-normal max-w-[822px] mx-auto text-white/90">
                Our Premium Experience Package is designed to create unforgettable memories for travelers of all kinds. Enjoy a mix of relaxation and adventure with activities that include champagne, water sports, luxury transfers, and encounters with whales and dolphins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stunning Experience Grid Section */}
      <section>
        <div className="mx-auto xl:px-20 lg:px-10 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Large image on the left - 50% width */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg w-full max-w-[400px] mx-auto lg:max-w-none min-h-[340px] lg:h-[587px]">
              <img 
                src="/assets/images/Destination2.jpg" 
                alt="Stunning Experience" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                <div className="bg-[#FCFCFC03] group-hover:bg-black/80 backdrop-blur-sm rounded-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                  <h3 className="text-[32px] text-white font-anton font-normal mb-2 uppercase w-auto max-w-full break-words text-center lg:text-left">
                    Gold Experience
                    <span className="text-base font-anton ml-4">(PRIVATE YACHT CHARTER (3 HOURS) )</span>
                  </h3>
                  <p className="text-white/90 text-sm font-inter font-normal w-auto max-w-full break-words text-center lg:text-left">
                    Our Signature Luxury Package is designed to create unforgettable memories for travelers of all tastes. Enjoy a mix of relaxation and adventure with activities that include champagne, snorkeling, marine encounters, luxury transfers, and your choice of three exclusive excursions or events.
                  </p>
                </div>
              </div>
            </div>

            {/* Two stacked images on the right - 50% width */}
            <div className="flex flex-col gap-4 lg:gap-6 w-full max-w-[400px] mx-auto lg:max-w-none">
              <div className="group relative overflow-hidden rounded-3xl shadow-lg flex-1 w-full min-h-[220px] lg:min-h-0">
                <img 
                  src="/assets/images/destination3.jpg" 
                  alt="Adventure Awaits" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                  <div className="bg-[#FCFCFC03] group-hover:bg-black/80 backdrop-blur-sm rounded-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                    <h3 className="text-xl text-white font-anton font-normal mb-1 w-auto max-w-full break-words text-center lg:text-left">Custom Experience</h3>
                    <p className="text-white/90 text-sm font-inter w-auto max-w-full break-words text-center lg:text-left">Our Custom Experience Package is designed to create unforgettable memories for travelers seeking flexibility. Enjoy a mix of relaxation and adventure with luxury transfers, professional filming options, and three excursions, events, or activities of your choice.</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl shadow-lg flex-1 w-full min-h-[220px] lg:min-h-0">
                <img 
                  src="/assets/images/destination4.jpg" 
                  alt="Custom Experience" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                  <div className="bg-[#FCFCFC03] group-hover:bg-black/80 backdrop-blur-sm rounded-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                    <h3 className="text-xl text-white font-anton font-normal mb-1 uppercase w-auto max-w-full break-words text-center lg:text-left">Party Experience</h3>
                    <p className="text-white/90 text-sm font-inter w-auto max-w-full break-words text-center lg:text-left">Our Party Experience Package is designed to create unforgettable memories for travelers who love to celebrate. Enjoy a mix of relaxation and excitement with one excursion or event of your choice, including a boat party, pool party, and luxury transfers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Excursion Banner Section with Background Image */}
      <ExcursionBanner />
    </div>
  );
}