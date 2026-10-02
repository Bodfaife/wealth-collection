import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BrandStory() {
    return (
        <section className="overflow-hidden bg-[#171717] text-[#F5F1E8]">
        <div className="mx-auto grid min-h-[700px] max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Image */}
        <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative min-h-[500px] overflow-hidden lg:min-h-[700px]"
        >
        <img
        src="/images/story.jpg"
        alt="Wealth Collection lifestyle"
        className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        {/* Image label */}
        <div className="absolute bottom-7 left-7">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">
        Wealth Collection
        </p>
        </div>
        </motion.div>

        {/* Story content */}
        <div className="flex items-center px-7 py-20 sm:px-12 md:px-16 lg:px-20">
        <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-xl"
        >
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
        The Wealth Collection
        </p>

        <h2
        className="text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        Luxury doesn't
        <br />
        need to be loud.
        </h2>

        <div className="mt-8 h-px w-16 bg-[#C8A96A]" />

        <p className="mt-8 text-base font-light leading-8 text-[#C9C3B8]">
        Wealth Collection was created around a simple belief: the things
        we live with should feel considered, timeless, and effortlessly
        refined.
        </p>

        <p className="mt-5 text-base font-light leading-8 text-[#C9C3B8]">
        From vintage shirts to premium bedding and elevated everyday
        essentials, each piece is selected with an appreciation for
        quality, character, and understated design.
        </p>

        <p className="mt-5 text-base font-light leading-8 text-[#C9C3B8]">
        We believe true luxury lives in the details — the texture of a
        fabric, the way something fits, and the feeling it brings into
        your everyday life.
        </p>

        <button
        type="button"
        className="group mt-10 inline-flex items-center gap-3 border-b border-[#F5F1E8]/60 pb-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-[#C8A96A] hover:text-[#C8A96A]"
        >
        Discover Our Story

        <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
        </button>
        </motion.div>
        </div>
        </div>
        </section>
    );
}
