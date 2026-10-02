import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
    {
        name: "Vintage Essential",
        category: "Vintage Shirts",
        price: "₦35,000",
        image: "/images/product-1.jpg",
    },
{
    name: "The Classic",
    category: "Premium Shirts",
    price: "₦45,000",
    image: "/images/product-2.jpg",
},
{
    name: "Soft Living",
    category: "Premium Bedding",
    price: "₦85,000",
    image: "/images/product-3.jpg",
},
{
    name: "Everyday Luxury",
    category: "Elevated Essentials",
    price: "₦55,000",
    image: "/images/product-4.jpg",
},
];

export default function FeaturedDesigns() {
    return (
        <section
        id="featured"
        className="bg-[#F5F1E8] px-6 py-24 md:px-10 md:py-32"
        >
        <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
        <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
        The Collection
        </p>

        <h2
        className="text-4xl leading-tight text-[#171717] md:text-6xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        Featured Designs
        </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-[#68645D]">
        Carefully selected pieces designed to bring understated elegance
        into everyday living.
        </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
            <motion.article
            key={product.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
            }}
            className="group cursor-pointer"
            >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E1D5]">
            <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            {/* View button */}
            <div className="absolute bottom-5 right-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1E8] text-[#171717] shadow-lg">
            <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>
            </div>
            </div>

            {/* Product information */}
            <div className="pt-5">
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#9A9489]">
            {product.category}
            </p>

            <div className="flex items-start justify-between gap-4">
            <h3
            className="text-xl text-[#171717]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
            {product.name}
            </h3>

            <span className="whitespace-nowrap text-sm text-[#68645D]">
            {product.price}
            </span>
            </div>
            </div>
            </motion.article>
        ))}
        </div>

        {/* View collection */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 text-center"
        >
        <button
        type="button"
        className="group inline-flex items-center gap-3 border-b border-[#171717] pb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#171717] transition-colors hover:border-[#C8A96A] hover:text-[#C8A96A]"
        >
        View Collection
        <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
        </button>
        </motion.div>

        </div>
        </section>
    );
}
