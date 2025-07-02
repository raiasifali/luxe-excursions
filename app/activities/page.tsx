export default function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#252525] mb-6">
          Activities
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover thrilling activities and adventures designed for every type of traveler.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Water Sports", price: "€89", image: "1591447" },
            { name: "Mountain Hiking", price: "€129", image: "1591056" },
            { name: "Cultural Tours", price: "€159", image: "1591373" },
            { name: "Wine Tasting", price: "€199", image: "1591447" },
            { name: "Sunset Sailing", price: "€249", image: "1591056" },
            { name: "Photography Tours", price: "€179", image: "1591373" }
          ].map((activity, index) => (
            <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.pexels.com/photos/${activity.image}/pexels-photo-${activity.image}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop`}
                alt={activity.name}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#252525] mb-2">{activity.name}</h3>
                <p className="text-gray-600 mb-4">Experience the best of Tenerife with our carefully curated activities.</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#E0C469] font-bold text-lg">From {activity.price}</span>
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