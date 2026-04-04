import Link from "next/link";
import { Home } from "lucide-react";
import { Facebook, Instagram, Twitter } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Home className="text-sidi-blue h-6 w-6" />
              <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
                Dar<span className="text-sidi-blue">Tounes</span>
              </Link>
            </div>
            <p className="text-gray-500 mb-6">
              The premier destination for premium real estate across Tunisia. Find your perfect home today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sidi-blue"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-sidi-blue"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-sidi-blue"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/properties" className="text-gray-500 hover:text-sidi-blue">Homes for Sale</Link></li>
              <li><Link href="/rent" className="text-gray-500 hover:text-sidi-blue">Homes for Rent</Link></li>
              <li><Link href="/new-projects" className="text-gray-500 hover:text-sidi-blue">New Developments</Link></li>
              <li><Link href="/agents" className="text-gray-500 hover:text-sidi-blue">Find an Agent</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Locations</h3>
            <ul className="space-y-3">
              <li><Link href="/properties" className="text-gray-500 hover:text-sidi-blue">Tunis (Capital)</Link></li>
              <li><Link href="/properties" className="text-gray-500 hover:text-sidi-blue">Carthage & Marsa</Link></li>
              <li><Link href="/properties" className="text-gray-500 hover:text-sidi-blue">Sousse</Link></li>
              <li><Link href="/properties" className="text-gray-500 hover:text-sidi-blue">Hammamet</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-500 mb-4">Subscribe to our newsletter to get the latest luxury property updates.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sidi-blue focus:border-transparent outline-none"
              />
              <button className="bg-sidi-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DarTounes. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
