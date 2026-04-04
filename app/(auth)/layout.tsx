import Link from "next/link";
import { Home } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000")' }}>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-white p-2 text-sidi-blue rounded-full shadow-md group-hover:scale-105 transition">
              <Home className="h-6 w-6" />
            </div>
            <span className="font-bold text-3xl tracking-tight text-gray-900 drop-shadow-sm">
              Dar<span className="text-sidi-blue">Tounes</span>
            </span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
