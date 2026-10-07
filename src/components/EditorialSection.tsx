import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function EditorialSection() {
    return (
        <section className="bg-[#171717] px-6 py-24 text-[#F5F1E8] md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

        {/* Editorial image */}
        <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-[65vh] min-h-[500px] max-h-[800px] overflow-hidden"
        >
        <img
        src="/images/editorial.jpg"
        alt="Wealth Collection lifestyle editorial"
        className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

        <div className="absolute bottom-8 left-7 right-7 md:bottom-12 md:left-12 md:right-12">
        <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#C8A96A]">
        The Wealth Edit
        </p>

        <h2
        className="max-w-3xl text-4xl leading-[1.05] md:text-6xl lg:text-7xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        Designed for the
        <br />
        life you want to live.
        </h2>
        </div>
        </motion.div>

        {/* Editorial copy */}
        <div className="grid gap-10 py-16 md:grid-cols-2 md:items-end md:py-20">
        <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
        <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
        More than what you wear
        </p>

        <h3
        className="mt-5 text-3xl leading-tight md:text-5xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        A considered approach
        <br />
        to everyday living.
        </h3>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        >
        <p className="max-w-lg text-sm font-light leading-7 text-[#C9C3B8]">
        We believe luxury is found in the details. The texture of a
        favourite shirt. The comfort of a beautifully made bed. The
        objects and pieces that quietly become part of your everyday
        rituals.
        </p>

        <button
        type="button"
        className="group mt-8 inline-flex items-center gap-3 border-b border-[#F5F1E8]/50 pb-2 text-xs uppercase tracking-[0.2em] transition-colors hover:border-[#C8A96A] hover:text-[#C8A96A]"
        >
        Explore The Wealth Edit

        <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
        </button>
        </motion.div>
        </div>

        {/* Decorative line */}
        <div className="flex items-center gap-5">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
        Quietly considered
        </span>

        <div className="h-px flex-1 bg-white/10" />
        </div>
        </div>
        </section>
    );
}
