import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ShieldCheck size={48} className="mx-auto text-sidi-blue mb-6" />
          <h1 className="text-4xl font-bold font-playfair mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: October 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <h2>1. Privacy at DarTounes</h2>
          <p>
            At DarTounes, protecting your data and your privacy is our highest priority. This Privacy Policy outlines
            how we collect, use, process, and safeguard the personal information you provide when using our premier real
            estate platform.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            When you browse properties, contact an agent, or list your own property on our platform, we may collect:
          </p>
          <ul>
            <li><strong>Identity Information:</strong> Name, professional title, and company name.</li>
            <li><strong>Contact Information:</strong> Email address, phone number, and physical address.</li>
            <li><strong>Property Data:</strong> Details of properties you submit for listing, including photographs and price expectations.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and interaction metrics to improve our user experience.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            The data we collect is utilized exclusively to provide you with a world-class real estate experience. We use
            your contact details to connect you with our specialized agents, process your property listing requests, and, 
            with your consent, send you exclusive updates on luxury developments across Tunisia.
          </p>

          <h2>4. Data Sharing and Security</h2>
          <p>
            DarTounes does not sell your personal data. We securely share your information only with our verified real 
            estate agents to fulfill your direct requests. Our infrastructure employs modern encryption and security 
            practices to prevent unauthorized access to our property and client databases.
          </p>

          <h2>5. Your Privacy Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of 
            your personal data stored on our platform. To exercise any of these rights, simply reach out to our privacy 
            officer.
          </p>

          <h2>6. Contacting the Privacy Team</h2>
          <p>
            For any inquiries regarding this policy or your data rights, please contact us at <strong>privacy@dartounes.tn</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
