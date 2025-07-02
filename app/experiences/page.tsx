export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#252525] mb-6">
          Experiences
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our curated collection of luxury experiences designed to create unforgettable memories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.pexels.com/photos/159711${item}/pexels-photo-159711${item}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop`}
                alt={`Experience ${item}`}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#252525] mb-2">Premium Experience {item}</h3>
                <p className="text-gray-600 mb-4">Discover the beauty and culture of Tenerife with our exclusive guided experience.</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#E0C469] font-bold text-lg">From €299</span>
                  <button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black px-4 py-2 rounded-lg font-medium transition">
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