import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroImages = [
    "/images/1.jpg",
"/images/2.jpg",
"/images/3.jpg",
"/images/4.jpg",
"/images/5.jpg",
];

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollToShop = () => {
        const section = document.getElementById("featured");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#0F0F0F]">

        {/* Hero Slideshow */}
        <AnimatePresence mode="sync">
        <motion.img
        key={heroImages[currentImage]}
        src={heroImages[currentImage]}
        alt="WEALTH COLLECTION luxury fashion"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
        />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl text-center"
        >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96A]">
        Luxury Fashion & Lifestyle
        </p>

        <h1
        className="text-5xl leading-tight text-[#F5F1E8] md:text-7xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        Quiet Luxury.
        <br />
        Timeless Living.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-8 text-[#E7DFD1]">
        Curated vintage shirts, premium bedding, and elevated essentials
        crafted for refined everyday living.
        </p>

        <motion.button
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={scrollToShop}
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-[#0F0F0F] transition-all hover:shadow-2xl"
        >
        Shop Collection
        <ArrowRight size={18} />
        </motion.button>
        </motion.div>
        </div>

        {/* Slideshow indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all ${
                index === currentImage
                ? "w-8 bg-[#C8A96A]"
                : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            />
        ))}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#0F0F0F] to-transparent" />
        </section>
    );
}
