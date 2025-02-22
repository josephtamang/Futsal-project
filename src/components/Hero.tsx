
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%)"
        }}
      />
      
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
          Premium Futsal Courts
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-in">
          Book Your Perfect
          <br />
          Futsal Match Today
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
          Professional courts, seamless booking, unforgettable matches.
          Join the community of futsal enthusiasts.
        </p>
        <Link
          to="/bookings"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
