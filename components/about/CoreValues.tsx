const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "We are at the forefront of technology, constantly pushing the boundaries to deliver software solutions that anticipate and meet the evolving needs of our clients."
    },
    {
      title: "Integrity", 
      description: "Trust is the foundation of our relationships. We operate with the highest ethical standards, ensuring transparency and accountability in all our endeavors."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration. By working closely with our clients and partners, we create synergies that lead to shared success."
    },
    {
      title: "Customer-Centricity",
      description: "Our customers are at the heart of everything we do. We are dedicated to providing value to each client, understanding that their success is our success."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl md:text-[64px] font-normal text-white mb-6 uppercase tracking-wide">
            Our Core Value
          </h2>
          <p className="font-inter text-base font-medium text-white max-w-[601px] mx-auto tracking-normal leading-[150%]">
            Our values are essential to who we are. They reflect what we expect from each other and inform every decision to make.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white text-black p-6 text-center rounded-md">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">
                  {value.title === "Innovation" && (
                    <img src="/assets/images/Lightbulb.svg" alt="Innovation" className="w-10 h-10 object-contain" />
                  )}
                  {value.title === "Integrity" && (
                    <img src="/assets/images/Handshake.svg" alt="Integrity" className="w-10 h-10 object-contain" />
                  )}
                  {value.title === "Collaboration" && (
                    <img src="/assets/images/Collaboration.svg" alt="Collaboration" className="w-10 h-10 object-contain" />
                  )}
                  {value.title === "Customer-Centricity" && (
                    <img src="/assets/images/Target.svg" alt="Global Connectivity" className="w-10 h-10 object-contain" />
                  )}
                </span>
              </div>
              <h3 className="font-anton text-2xl font-normal text-[#101010] mb-4 uppercase tracking-wide">
                {value.title}
              </h3>
              <p className="font-inter text-[#878787] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
