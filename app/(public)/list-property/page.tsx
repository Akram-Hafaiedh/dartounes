import { Home, Camera, CheckCircle2 } from "lucide-react";

export default function ListPropertyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair mb-4 text-gray-900">List Your Property</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach thousands of potential buyers and renters. Partner with DarTounes to showcase your property to a premium audience.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Steps Sidebar */}
            <div className="bg-sidi-blue text-white p-8 md:col-span-1">
              <h3 className="text-xl font-bold mb-8">How it works</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Submit Details</h4>
                    <p className="text-blue-100 text-sm">Tell us about your property's features and location.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">We Review</h4>
                    <p className="text-blue-100 text-sm">Our expert team will verify your listing details.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Go Live</h4>
                    <p className="text-blue-100 text-sm">Your property is published to our premium network.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form Container */}
            <div className="p-8 md:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidi-blue bg-white">
                      <option>Villa</option>
                      <option>Apartment</option>
                      <option>Studio</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Listing Type</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidi-blue bg-white">
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
                  <input type="text" placeholder="e.g. Modern Villa in Carthage" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidi-blue" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                    <input type="number" min="0" placeholder="e.g. 3" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidi-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                    <input type="number" min="0" placeholder="e.g. 2" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidi-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Size (m²)</label>
                    <input type="number" min="0" placeholder="e.g. 150" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidi-blue" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <div className="relative">
                    <input type="text" placeholder="e.g. 500k" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidi-blue" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <span className="text-gray-500 font-medium">TND</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition cursor-pointer">
                    <div className="space-y-1 text-center">
                      <Camera className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <span className="relative rounded-md font-medium text-sidi-blue hover:text-blue-800">
                          Upload files
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full bg-sidi-blue hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition duration-300">
                    Submit Listing Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
