import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email.trim()) return;

        setSubmitted(true);
        setEmail("");
    };

    return (
        <section className="bg-[#171717] px-6 py-24 text-[#F5F1E8] md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
        >
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
        Stay in the know
        </p>

        <h2
        className="text-5xl leading-[0.95] md:text-7xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        A little more wealth,
        <br />
        delivered.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#B5B0A6]">
        Be the first to discover new collections, private releases,
        thoughtful stories, and pieces worth keeping.
        </p>

        <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-xl"
        >
        <div className="flex flex-col border-b border-[#F5F1E8]/30 pb-3 sm:flex-row sm:items-center">
        <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        required
        className="w-full bg-transparent px-0 py-4 text-sm text-[#F5F1E8] outline-none placeholder:text-[#77736C]"
        />

        <button
        type="submit"
        className="group mt-3 flex shrink-0 items-center justify-center gap-3 self-start text-xs font-medium uppercase tracking-[0.2em] text-[#F5F1E8] transition-colors duration-300 hover:text-[#C8A96A] sm:mt-0"
        >
        {submitted ? "You're in" : "Subscribe"}

        <span className="flex h-9 w-9 items-center justify-center border border-[#F5F1E8]/30 transition-all duration-300 group-hover:border-[#C8A96A] group-hover:bg-[#C8A96A] group-hover:text-[#171717]">
        <ArrowUpRight
        size={15}
        strokeWidth={1.5}
        className="transition-transform duration-300 group-hover:rotate-45"
        />
        </span>
        </button>
        </div>
        </form>

        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#77736C]">
        No noise. Just the good stuff.
        </p>
        </motion.div>
        </div>
        </section>
    );
}
