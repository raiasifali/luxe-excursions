export default function RentalsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#252525] mb-6">
          Rentals
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Rent premium vehicles and equipment for your perfect Tenerife adventure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Luxury Car", price: "€199/day", type: "Mercedes-Benz" },
            { name: "Yacht Charter", price: "€1,299/day", type: "Premium Yacht" },
            { name: "Private Villa", price: "€899/night", type: "Oceanview Villa" },
            { name: "Helicopter", price: "€2,499/hour", type: "Scenic Tours" },
            { name: "Jet Ski", price: "€149/hour", type: "Water Adventure" },
            { name: "Mountain Bike", price: "€39/day", type: "Trail Explorer" }
          ].map((rental, index) => (
            <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.pexels.com/photos/159${1447 + index}/pexels-photo-159${1447 + index}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop`}
                alt={rental.name}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#252525] mb-1">{rental.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{rental.type}</p>
                <p className="text-gray-600 mb-4">Premium rental service with full support and luxury amenities included.</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#E0C469] font-bold text-lg">{rental.price}</span>
                  <button className="bg-[#E0C469] hover:bg-[#d1b15a] text-black px-4 py-2 rounded-lg font-medium transition">
                    Rent Now
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