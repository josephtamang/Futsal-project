
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Calendar, Clock, Users, Ruler } from "lucide-react";

// Using the same court data
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
    name: "Futsal hub",
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

const CourtDetails = () => {
  const { id } = useParams();
  const court = courts.find(c => c.id === id);

  if (!court) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto pt-24 px-4">
          <h1 className="text-3xl font-bold mb-6">Court Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <img
              src={court.imageUrl}
              alt={court.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-4 py-2 glass rounded-full text-lg font-medium">
              Rs {court.price}/hr
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{court.name}</h1>
              <p className="text-gray-600 mb-6">{court.location}</p>
              
              <div className="glass p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">About this Court</h2>
                <p className="text-gray-600 mb-6">{court.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>{court.openingHours}</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="w-5 h-5 mr-2 text-primary" />
                    <span>{court.dimensions}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    <span>{court.capacity}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-2">★</span>
                    <span>{court.rating} rating</span>
                  </div>
                </div>

                <h3 className="font-semibold mb-3">Amenities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {court.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="glass p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Book this Court</h3>
                <p className="text-gray-600 mb-6">
                  Select your preferred date and time to make a booking.
                </p>
                <a
                  href="/bookings"
                  className="block w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium text-center transition-colors"
                >
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtDetails;
