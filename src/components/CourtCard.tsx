
import { Link } from "react-router-dom";

interface CourtCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  location: string;
}

const CourtCard = ({ id, name, imageUrl, price, rating, location }: CourtCardProps) => {
  return (
    <div className="glass rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
        />
        <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-sm font-medium">
          Rs {price}/hr
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{location}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
          <Link
            to={`/courts/${id}`}
            className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourtCard;
