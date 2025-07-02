
const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-black pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pt-20">
        <div className="text-center mb-12">
          <h1 className="font-anton text-4xl md:text-6xl lg:text-[64px] font-normal mb-6 text-white uppercase tracking-wider">
            About Luxe - Excursions Tenerife
          </h1>
          <p className="font-inter text-base font-medium text-[#878787] max-w-[880px] mx-auto leading-relaxed">
            Welcome to LUXE, where innovation meets organization to propel your team towards unparalleled success. We understand that effective task management is at the core of every thriving business, and our cutting-edge software is here to empower your team, enhance collaboration, and elevate productivity.
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="/assets/images/about-us-hero-sec-img.svg" 
            alt="Group of travelers" 
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
