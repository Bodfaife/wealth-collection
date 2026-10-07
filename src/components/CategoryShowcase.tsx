import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
    {
        title: "Vintage Shirts",
        description: "Distinctive pieces with character, history, and effortless style.",
        image: "/images/Category-Shirts.jpg",
    },
{
    title: "Premium Bedding",
    description: "Thoughtfully selected textures for a softer, more refined space.",
    image: "/images/Category-Bedding.jpg",
},
{
    title: "Elevated Essentials",
    description: "Everyday pieces designed with simplicity and intention.",
    image: "/images/Category-Essentials.jpg",
},
];

export default function CategoryShowcase() {
    return (
        <section className="bg-[#F5F1E8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-14 max-w-2xl"
        >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
        Explore The Collection
        </p>

        <h2
        className="text-4xl leading-tight text-[#171717] md:text-6xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        Made for the way
        <br />
        you choose to live.
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#68645D]">
        Discover carefully curated collections designed to bring character,
        comfort, and quiet sophistication into everyday life.
        </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((category, index) => (
            <motion.a
            key={category.title}
            href="/shop"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.8,
                delay: index * 0.12,
            }}
            className="group relative block aspect-[4/5] overflow-hidden bg-[#DCD4C7]"
            >
            {/* Image */}
            <img
            src={category.image}
            alt={category.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
            <div className="flex items-end justify-between gap-5">
            <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/65">
            Collection {String(index + 1).padStart(2, "0")}
            </p>

            <h3
            className="text-3xl leading-none md:text-4xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
            {category.title}
            </h3>

            <p className="mt-4 max-w-xs text-sm font-light leading-6 text-white/75">
            {category.description}
            </p>
            </div>

            {/* Arrow */}
            <div className="flex h-11 w-11 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 opacity-70 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:border-white group-hover:bg-white group-hover:text-[#171717] group-hover:opacity-100">
            <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            />
            </div>
            </div>
            </div>
            </motion.a>
        ))}
        </div>

        {/* Bottom line */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 flex items-center gap-5"
        >
        <div className="h-px flex-1 bg-[#171717]/15" />

        <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A9489]">
        Curated with intention
        </p>

        <div className="h-px flex-1 bg-[#171717]/15" />
        </motion.div>
        </div>
        </section>
    );
}
