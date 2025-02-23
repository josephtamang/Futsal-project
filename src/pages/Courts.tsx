import Navbar from "@/components/Navbar";
import CourtCard from "@/components/CourtCard";

// Comprehensive court data
const courts = [
  {
    id: "1",
    name: "Nayapati Futsal",
    imageUrl: "https://th.bing.com/th/id/OIP.cbb01qsDEvAG9fKGr1iYvAHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    price: 1000,
    rating: 4.8,
    location: "Nayapati-2,Kathmandu",
    description: "Premier indoor futsal facility featuring FIFA-approved flooring and professional lighting.",
    amenities: [
      "Professional-grade synthetic turf",
      "Climate controlled environment",
      "Changing rooms with showers",
      "Spectator seating",
      "Equipment rental available"
    ],
    dimensions: "42m x 25m",
    capacity: "10 players + 6 substitutes per team",
    openingHours: "9:00 AM - 11:00 PM"
  },
  {
    id: "2",
    name: "Gokarna Futsal",
    imageUrl: "https://th.bing.com/th/id/OIF.GUc9dLFSQaWeGJcvfOXDzg?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    price: 1200,
    rating: 4.6,
    location: "Gokarna-3,Kathamndu",
    description: "Modern futsal facility with state-of-the-art amenities and convenient location.",
    amenities: [
      "High-performance court surface",
      "LED scoreboards",
      "Locker rooms",
      "Parking available",
      "Cafe on premises"
    ],
    dimensions: "40m x 22m",
    capacity: "10 players + 5 substitutes per team",
    openingHours: "8:00 AM - 10:00 PM"
  },
  {
    id: "3",
    name: "Futsal Hub",
    imageUrl: "https://th.bing.com/th/id/OIP.4o7UrZywxae7KMK-doeL5gHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    price: 1500,
    rating: 4.7,
    location: "Jorpati-4,Kathmandu",
    description: "Contemporary futsal venue perfect for competitive matches and training sessions.",
    amenities: [
      "Premium artificial turf",
      "Video analysis system",
      "First aid station",
      "Vending machines",
      "Free WiFi"
    ],
    dimensions: "38m x 20m",
    capacity: "10 players + 4 substitutes per team",
    openingHours: "10:00 AM - 12:00 AM"
  }
];

const Courts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-red-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            Our Premium Courts
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our selection of professional futsal courts, each equipped with
            top-quality facilities and amenities for the perfect game.
          </p>
        </div>
        
        {/* Court Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courts.map((court) => (
            <div 
              key={court.id} 
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <CourtCard {...court} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courts;
