import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { products, formatPrice } from "./storeData";

const cats = [
    "All",
"Vintage Shirts",
"Premium Bedding",
"Elevated Essentials",
];

export default function Shop() {
    const [cat, setCat] = useState("All");
    const [sort, setSort] = useState("featured");

    const list = useMemo(() => {
        let a =
        cat === "All"
        ? [...products]
        : products.filter((p) => p.category === cat);

        if (sort === "low") {
            a.sort((x, y) => x.price - y.price);
        }

        if (sort === "high") {
            a.sort((x, y) => y.price - x.price);
        }

        return a;
    }, [cat, sort]);

    return (
        <main className="bg-[#F5F1E8] text-[#171717]">
        <section className="border-b border-black/10 px-6 pb-14 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[.3em] text-[#C8A96A]">
        The Collection
        </p>

        <h1 className="mt-4 font-[Cormorant_Garamond] text-6xl leading-none md:text-8xl">
        Shop quietly.
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#68645D]">
        Curated pieces for dressing, resting, and living with intention.
        </p>
        </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="flex flex-col gap-5 border-b border-black/10 pb-7 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
            <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[.14em] ${
                cat === c
                ? "border-[#171717] bg-[#171717] text-[#F5F1E8]"
                : "border-black/15 hover:border-[#C8A96A]"
            }`}
            >
            {c}
            </button>
        ))}
        </div>

        <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-full border border-black/15 bg-transparent px-4 py-2 text-xs uppercase tracking-[.14em]"
        >
        <option value="featured">Featured</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        </select>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
            <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group"
            >
            <a href={`/product/${p.id}`} className="block">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E0D2]">
            <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8]/90 opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight size={18} />
            </span>
            </div>
            </a>

            <div className="pt-5">
            <p className="text-[10px] uppercase tracking-[.2em] text-[#8C867C]">
            {p.category}
            </p>

            <div className="mt-2 flex justify-between gap-4">
            <a
            href={`/product/${p.id}`}
            className="font-[Cormorant_Garamond] text-2xl hover:text-[#C8A96A]"
            >
            {p.name}
            </a>

            <span className="pt-1 text-sm">
            {formatPrice(p.price)}
            </span>
            </div>
            </div>
            </motion.article>
        ))}
        </div>
        </section>
        </main>
    );
}
