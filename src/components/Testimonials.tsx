import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote:
        "The quality is even better in person. Everything feels incredibly intentional, from the fabric to the packaging.",
        name: "Amara O.",
        location: "Lagos, Nigeria",
    },
{
    quote:
    "Wealth Collection has completely changed how I think about everyday essentials. Simple, elegant, and beautifully made.",
    name: "Daniel A.",
    location: "Port Harcourt, Nigeria",
},
{
    quote:
    "The bedding is exceptional. It has that understated luxury that makes your space feel instantly more elevated.",
    name: "Tomiwa K.",
    location: "Abuja, Nigeria",
},
];

export default function Testimonials() {
    return (
        <section className="bg-[#F5F1E8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-2xl text-center"
        >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
        The Wealth Standard
        </p>

        <h2
        className="text-4xl leading-tight text-[#171717] md:text-6xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        Loved for the details.
        </h2>

        <p className="mt-6 text-sm leading-7 text-[#68645D]">
        Thoughtful pieces, considered design, and an experience that
        stays with you.
        </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
            <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
            }}
            className="relative flex min-h-[330px] flex-col justify-between border border-[#171717]/10 bg-white/40 p-8 md:p-10"
            >
            {/* Quote icon */}
            <div>
            <Quote
            size={28}
            strokeWidth={1}
            className="mb-8 text-[#C8A96A]"
            />

            <p
            className="text-2xl leading-[1.35] text-[#292725]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
            “{testimonial.quote}”
            </p>
            </div>

            {/* Customer */}
            <div className="mt-10 flex items-end justify-between gap-4 border-t border-[#171717]/10 pt-6">
            <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#171717]">
            {testimonial.name}
            </p>

            <p className="mt-2 text-xs text-[#8B857B]">
            {testimonial.location}
            </p>
            </div>

            <div className="flex gap-1">
            {[...Array(5)].map((_, starIndex) => (
                <Star
                key={starIndex}
                size={12}
                fill="currentColor"
                strokeWidth={0}
                className="text-[#C8A96A]"
                />
            ))}
            </div>
            </div>
            </motion.article>
        ))}
        </div>

        {/* Bottom statement */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-16 text-center"
        >
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A9489]">
        Quietly becoming part of everyday life
        </p>
        </motion.div>
        </div>
        </section>
    );
}
