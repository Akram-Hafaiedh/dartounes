import Image from "next/image";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  type: "Sale" | "Rent";
}

export default function PropertyCard({
  image,
  price,
  title,
  location,
  beds,
  baths,
  sqm,
  type,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-sidi-blue uppercase tracking-wider">
          For {type}
        </div>
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-sidi-blue mb-2">{price}</h3>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          {location}
        </div>
        
        <div className="flex border-t border-gray-100 pt-4 justify-between text-gray-600">
          <div className="flex items-center gap-1.5">
            <Bed size={18} className="text-gray-400" />
            <span className="font-medium">{beds}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={18} className="text-gray-400" />
            <span className="font-medium">{baths}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square size={18} className="text-gray-400" />
            <span className="font-medium">{sqm} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
