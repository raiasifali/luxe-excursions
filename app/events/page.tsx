export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#252525] mb-6">
          Events
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Celebrate special moments with our exclusive event planning and luxury venue services.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-[20px] p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#252525] mb-3">Premium Event Package {item}</h3>
                <p className="text-gray-600 mb-4">
                  Create unforgettable memories with our luxury event planning services, featuring exclusive venues and personalized experiences.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#E0C469] font-bold text-lg">From €1,299</span>
                  <button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black px-4 py-2 rounded-lg font-medium transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-[500px] rounded-[20px] overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
              alt="Luxury Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}