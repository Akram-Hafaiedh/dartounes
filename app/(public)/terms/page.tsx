import { Scale } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Scale size={48} className="mx-auto text-sidi-blue mb-6" />
          <h1 className="text-4xl font-bold font-playfair mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-500">Last Updated: October 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <h2>1. Introduction</h2>
          <p>
            Welcome to DarTounes. These Terms of Service govern your use of our website and real estate services.
            By accessing or using our platform, you agree to be bound by these terms. If you disagree with any part
            of the terms, you may not access our services.
          </p>

          <h2>2. Premium Real Estate Services</h2>
          <p>
            DarTounes curates and displays premium real estate listings across Tunisia, including areas such as
            Carthage, La Marsa, Sousse, and Tunis. We strive to present accurate information representing the luxurious
            nature of our featured properties. However, square footage, pricing, and availability are subject to change
            without direct notice. 
          </p>

          <h2>3. Property Listings and User Submissions</h2>
          <p>
            Users leveraging the "List Property" feature must guarantee that they have the legal right to list the submitted 
            property. DarTounes reserves the right to review, reject, or remove any listing that does not meet our premium 
            catalog standards or violates local real estate regulations.
          </p>

          <h2>4. Intellectual Property Rights</h2>
          <p>
            The platform design, brand identity (including the DarTounes name and logo), textual content, and photographic 
            assets are protected by copyright and intellectual property laws. You may not reproduce our catalog or interface 
            without explicit written permission from DarTounes administration.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall DarTounes, nor its directors, agents, or employees, be liable for any indirect, incidental, 
            special, consequential or punitive damages resulting from your access to or use of, or inability to access or 
            use our platform to secure real estate transactions.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact our legal team at <strong>legal@dartounes.tn</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
