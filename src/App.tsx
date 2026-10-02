import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedDesigns from "./components/FeaturedDesigns";

export default function App() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#171717]">
    <Navbar />

    <HeroSection />

    <FeaturedDesigns />
    </main>
  );
}
