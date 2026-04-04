"use client";

import { useState, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import { Search, MapPin, Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { properties } from "@/lib/data";

const ITEMS_PER_PAGE = 12;

export default function RentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);

  const rentProperties = useMemo(() => {
    let result = properties.filter(p => p.type === "Rent");

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.location.toLowerCase().includes(lowerQuery) || 
        p.title.toLowerCase().includes(lowerQuery)
      );
    }

    if (sortOrder === "Price: Low to High") {
      result = [...result].sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
    } else if (sortOrder === "Price: High to Low") {
      result = [...result].sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
    }

    return result;
  }, [searchQuery, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(rentProperties.length / ITEMS_PER_PAGE));
  
  if (currentPage > totalPages) {
    setCurrentPage(1);
  }

  const currentItems = rentProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
              Homes for Rent
            </h1>
            <p className="text-lg mb-10 text-gray-600">
              Find your perfect rental home. We offer long term leases and monthly rentals across premium Tunisian locations.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100 mt-8">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search by location..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-none text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sidi-blue transition"
                  />
                </div>
                <button className="bg-sidi-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                  <Search size={20} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties List */}
      <section className="py-16 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 font-playfair flex items-center gap-2">
              Available Rentals <span className="text-sm font-normal text-sidi-blue bg-blue-50 px-3 py-1 rounded-full">{rentProperties.length} found</span>
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium hidden sm:inline">Sort by:</span>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border-none bg-gray-50 rounded-lg py-2 pl-3 pr-8 focus:ring-sidi-blue cursor-pointer font-medium text-gray-700"
              >
                <option value="Newest">Newest</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {currentItems.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100 mt-8">
              <HomeIcon size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 font-medium">No rental properties found matching your criteria.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sidi-blue hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
             /* Pagination Controls */
             <div className="mt-16 flex items-center justify-center gap-2">
               <button 
                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                 disabled={currentPage === 1}
                 className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
               >
                 <ChevronLeft size={20} />
               </button>
               
               <div className="flex gap-1">
                 {[...Array(totalPages)].map((_, i) => {
                   // Logic to only show a few pages if huge amount
                   if (totalPages > 10) {
                     if (i !== 0 && i !== totalPages - 1 && Math.abs(currentPage - (i + 1)) > 2) {
                       if (i === 1 || i === totalPages - 2) return <span key={i} className="px-2 self-end">...</span>;
                       return null;
                     }
                   }
                   return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                        currentPage === i + 1 
                          ? "bg-sidi-blue text-white shadow-sm" 
                          : "text-gray-600 hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                 })}
               </div>

               <button 
                 onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                 disabled={currentPage === totalPages}
                 className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
               >
                 <ChevronRight size={20} />
               </button>
             </div>
          )}
        </div>
      </section>

    </div>
  );
}
