
import { Button } from "@/components/ui/button";

const CraftingJourneys = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img 
              src="/assets/images/Illustration.svg" 
              alt="Mountain landscape" 
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-anton text-4xl md:text-5xl font-normal text-[#252525] mb-4 uppercase tracking-normal">
              Crafting Unforgettable Travel Journeys
            </h2>
            <p className="font-inter text-lg text-[#5A5A5A] xl:mb-20 mb-10 leading-tight tracking-normal">
              We specialize in crafting unforgettable journeys that go beyond the ordinary. Dedicated to delivering luxury and personalized experiences, our travel experts curate exclusive rips to the world’s most stunning destinations.
            </p>
            <Button className="bg-[#E0C469] hover:bg-[#E0C469]/90 text-black font-inter text-lg px-8 py-4 rounded-md">
              Explore Trips →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingJourneys;
