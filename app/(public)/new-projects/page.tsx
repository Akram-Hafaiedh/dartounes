"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { BuildingIcon } from "lucide-react";
import { projects } from "@/lib/data";

export default function NewProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => {
    if (filter === "All") return true;
    return project.status === filter;
  });

  const getButtonClass = (buttonFilter: string) => {
    if (filter === buttonFilter) {
      return "px-4 py-2 rounded-full border border-transparent bg-sidi-blue text-white text-sm font-medium shadow-sm transition cursor-pointer";
    }
    return "px-4 py-2 rounded-full border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50 transition text-gray-700 cursor-pointer";
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sidi-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 tracking-tight">
              New Developments
            </h1>
            <p className="text-lg mb-10 text-blue-100 font-light">
              Invest in the future. Discover premium off-plan and newly completed real estate projects across Tunisia's most sought-after locations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-playfair mb-2">
                Featured Projects
              </h2>
              <p className="text-gray-500">Secure your investment with top-tier developers.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={() => setFilter("All")} className={getButtonClass("All")}>All</button>
              <button onClick={() => setFilter("Planning")} className={getButtonClass("Planning")}>Planning</button>
              <button onClick={() => setFilter("Under Construction")} className={getButtonClass("Under Construction")}>Under Construction</button>
              <button onClick={() => setFilter("Completed")} className={getButtonClass("Completed")}>Completed</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 mt-8">
              <BuildingIcon size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500">No new projects listed at the moment for this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
