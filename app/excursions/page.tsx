export default function ExcursionsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#252525] mb-6">
          Excursions
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join our carefully crafted excursions to explore the most beautiful destinations in Tenerife.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.pexels.com/photos/159105${item}/pexels-photo-159105${item}.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop`}
                alt={`Excursion ${item}`}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#252525] mb-3">Luxury Excursion {item}</h3>
                <p className="text-gray-600 mb-4">Experience the wonders of Tenerife with our premium guided excursions featuring luxury transportation and expert guides.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#E0C469] font-bold text-xl">From €199</span>
                    <span className="text-gray-500 text-sm ml-2">per person</span>
                  </div>
                  <button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black px-6 py-3 rounded-lg font-medium transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}