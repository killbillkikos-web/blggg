import Header from "@/components/sections/header";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import HomeClient from "../components/HomeClient";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100/50">
      <Header />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <HomeClient />
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Sidebar />
          </div>
        </div>
      </main>

      <Credits />
    </div>
  );
}
