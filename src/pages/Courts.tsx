
import Navbar from "@/components/Navbar";
import CourtCard from "@/components/CourtCard";

// Comprehensive court data
const courts = [
  {
    id: "1",
    name: "Elite Futsal Arena",
    imageUrl: "https://th.bing.com/th/id/OIP.cbb01qsDEvAG9fKGr1iYvAHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    price: 60,
    rating: 4.8,
    location: "Downtown Sports Complex",
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
    name: "Pro Futsal Center",
    imageUrl: "https://th.bing.com/th/id/OIF.GUc9dLFSQaWeGJcvfOXDzg?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    price: 55,
    rating: 4.6,
    location: "Westside Recreation Center",
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
    name: "Urban Futsal Hub",
    imageUrl: "https://th.bing.com/th/id/OIP.4o7UrZywxae7KMK-doeL5gHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    price: 50,
    rating: 4.7,
    location: "Eastside Sports Park",
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
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Our Premium Courts</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of professional futsal courts, each equipped with
            top-quality facilities and amenities for the perfect game.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courts.map((court) => (
            <CourtCard key={court.id} {...court} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courts;
