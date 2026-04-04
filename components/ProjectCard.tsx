import Image from "next/image";
import { Building2, Calendar, MapPin, Tag } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  image,
  name,
  developer,
  location,
  status,
  completionDate,
  priceRange,
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Under Construction":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Planning":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="relative h-60 w-full overflow-hidden">
        <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm shadow-sm ${getStatusColor(status)}`}>
          {status}
        </div>
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h4 className="text-xl font-bold text-white mb-1 drop-shadow-sm">{name}</h4>
          <div className="flex items-center text-gray-200 text-sm">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-50">
          <div className="bg-blue-50 p-2 rounded-lg text-sidi-blue">
            <Building2 size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Developer</p>
            <p className="font-medium text-gray-900">{developer}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-gray-400">
              <Calendar size={16} />
              <span>Completion</span>
            </div>
            <span className="font-medium text-gray-900">{completionDate}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-gray-400">
              <Tag size={16} />
              <span>Price From</span>
            </div>
            <span className="font-medium text-gray-900">{priceRange}</span>
          </div>
        </div>
        
        <button className="mt-6 w-full py-2.5 rounded-xl border border-sidi-blue text-sidi-blue font-semibold hover:bg-blue-50 transition duration-300">
          View Floorplans
        </button>
      </div>
    </div>
  );
}
