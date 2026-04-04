import PropertyCard from "@/components/PropertyCard";
import { Search, MapPin, Home as HomeIcon, Key } from "lucide-react";
import { properties, featuredProperties } from "@/lib/data";
import Link from "next/link";
export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image Setup */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000")' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 text-shadow-sm">
            Find Your Dream Home in Tunisia
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light text-gray-100">
            Discover premium villas, modern apartments, and authentic homes.
          </p>

          {/* Search Glassmorphism Bar */}
          <div className="glassmorphism rounded-2xl p-4 md:p-6 max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Location (e.g. Carthage, Sousse)"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sidi-blue"
                />
              </div>
              <div className="flex-1 relative">
                <HomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select className="w-full pl-12 pr-4 py-4 rounded-xl border-none text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sidi-blue appearance-none cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
              <button className="bg-sidi-blue hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition duration-300 flex items-center justify-center gap-2 md:w-auto w-full shadow-lg">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Explore Vibe & Style</h2>
            <p className="text-gray-500">Curated collections to match your lifestyle.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Beachfront", "Medina Heritage", "Modern Apartments", "Luxury Villas"].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center cursor-pointer hover:shadow-md transition border border-gray-100 group">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-sidi-blue rounded-full mb-4 flex items-center justify-center group-hover:bg-sidi-blue group-hover:text-white transition-colors duration-300">
                  <Key size={28} />
                </div>
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Premium Listings</h2>
              <p className="text-gray-500">Handpicked properties just for you.</p>
            </div>
            <Link href="/properties" className="hidden md:block text-sidi-blue font-semibold hover:text-blue-800 transition">
              View all listings &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <Link href="/properties" className="md:hidden mt-8 w-full border border-sidi-blue text-sidi-blue font-semibold py-3 rounded-xl hover:bg-blue-50 transition block text-center">
            View all listings
          </Link>
        </div>
      </section>

    </div>
  );
}
