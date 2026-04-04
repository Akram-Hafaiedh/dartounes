import AgentCard from "@/components/AgentCard";
import { Users } from "lucide-react";
import { agents } from "@/lib/data";

export default function AgentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-gray-100 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
              Meet Our Experts
            </h1>
            <p className="text-lg text-gray-600">
              Our team of dedicated professionals connects you to the finest properties across Tunisia. From beachfront villas to commercial spaces, we speak your language.
            </p>
          </div>
        </div>
      </section>

      {/* Agents List */}
      <section className="py-20 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 w-full max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search by name or language..." 
              className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-sidi-blue shadow-sm transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>

          {agents.length === 0 && (
            <div className="text-center py-20">
              <Users size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500">No agents found matching your search.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
