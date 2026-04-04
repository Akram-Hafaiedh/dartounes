import { Phone, Mail, Globe } from "lucide-react";
import type { Agent } from "@/lib/data";

interface AgentCardProps extends Agent {}

export default function AgentCard({
  image,
  name,
  role,
  phone,
  email,
  languages,
}: AgentCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col">
      <div className="relative pt-6 px-6 pb-0 flex justify-center">
        {/* Abstract background shape for the image */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-50 to-white -z-10 rounded-t-2xl"></div>
        
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
      <div className="p-6 text-center flex-grow flex flex-col">
        <h4 className="text-xl font-bold text-gray-900 mb-1">{name}</h4>
        <p className="text-sidi-blue font-medium text-sm mb-4">{role}</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {languages.map((lang, idx) => (
            <span key={idx} className="bg-gray-50 text-gray-600 border border-gray-100 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
              {idx === 0 && <Globe size={12} className="text-gray-400" />}
              {lang}
            </span>
          ))}
        </div>
        
        <div className="mt-auto space-y-3">
          <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition duration-300 text-sm font-medium">
            <Phone size={16} className="text-gray-400" />
            {phone}
          </a>
          <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-sidi-blue text-white hover:bg-blue-800 transition duration-300 border border-transparent shadow-sm text-sm font-medium">
            <Mail size={16} />
            Contact Agent
          </a>
        </div>
      </div>
    </div>
  );
}
