
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ExcursionsSection = () => {
  return (
    <section className="relative py-20 bg-cover bg-center" style={{
      backgroundImage: "url('/assets/images/Trees.jpg')"
    }}>
      <div className="flex flex-col items-center justify-center bg-[#101010] rounded-[24px] w-full max-w-[1280px] min-h-[364px] px-4 sm:px-[40px] lg:px-[233px] py-[40px] gap-[40px] mx-auto">
        <div className="flex flex-col items-center w-full max-w-[814px] min-h-[284px] gap-[60px]">
          <div className="flex flex-col items-center justify-center w-full max-w-[814px] min-h-[162px] gap-4">
            <h2 className="font-poltawski font-bold text-[48px] leading-[120%] text-center text-[#FEFEFE] w-full max-w-[814px] min-h-[58px]">
              Our Excursions
            </h2>
            <p className="font-poltawski font-normal text-[18px] leading-[120%] text-center text-[#D9D9D9] w-full max-w-[814px] min-h-[88px]">
              Embark on an extraordinary journey with Luxe Excursions Tenerife, where we specialise in crafting bespoke luxury experiences that showcase the island's breathtaking beauty. From exclusive yacht charters to exhilarating adventures and unforgettable parties, we transform travel dreams into cherished memories, ensuring every moment is infused with excitement and joy.
            </p>
          </div>
          <Button className="flex flex-row items-center justify-center gap-3 px-10 py-5 w-[219px] h-[62px] bg-[#E0C469] hover:bg-[#E0C469]/90 rounded-[8px] font-poltawski font-medium text-[18px] leading-[120%] text-[#252525] mx-auto">
            <span className="w-[139px] text-center">
              <Link href="/excursions">View Excursions</Link>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;
