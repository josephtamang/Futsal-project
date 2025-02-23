import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">  
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)"
        }}
      />
      
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-pink-500/10 text-pink-500">
          Premium Futsal Courts
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Book Your Perfect
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            Futsal Match Today
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Professional courts, seamless booking, unforgettable matches.
          Join the community of futsal enthusiasts.
        </p>
        <Link
          to="/bookings"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:opacity-90 rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;