
import { useState } from "react";
import { Menu, X, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass fixed w-full z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          FutsalPal
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/courts" className="hover:text-primary transition-colors">
            Courts
          </Link>
          <Link to="/bookings" className="hover:text-primary transition-colors">
            <Calendar className="inline-block w-5 h-5 mr-1" />
            Book Now
          </Link>
          <Link to="/login" className="hover:text-primary transition-colors">
            <User className="inline-block w-5 h-5 mr-1" />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass py-4 slide-in md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/courts"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courts
              </Link>
              <Link
                to="/bookings"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="inline-block w-5 h-5 mr-1" />
                Book Now
              </Link>
              <Link
                to="/login"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="inline-block w-5 h-5 mr-1" />
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
