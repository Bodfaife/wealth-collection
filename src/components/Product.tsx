import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { products, formatPrice } from "./storeData";
import { useCart } from "../store";

export default function Product({ id }: { id?: string }) {
    const p = products.find((x) => x.id === id);
    const [q, setQ] = useState(1);
    const { add } = useCart();

    if (!p) {
        return (
            <main className="min-h-[70vh] bg-[#F5F1E8] px-6 py-24 text-center">
            <h1 className="font-[Cormorant_Garamond] text-6xl">
            This piece has moved on.
            </h1>

            <a
            href="/Shop"
            className="mt-8 inline-flex rounded-full bg-[#171717] px-7 py-3 text-xs uppercase tracking-[.18em] text-[#F5F1E8]"
            >
            Back to Shop
            </a>
            </main>
        );
    }

    return (
        <main className="bg-[#F5F1E8] px-6 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
        <a
        href="/Shop"
        className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[.16em] text-[#68645D]"
        >
        <ArrowLeft size={15} />
        Back to collection
        </a>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div className="aspect-[4/5] overflow-hidden bg-[#E8E0D2]">
        <img
        src={p.image}
        alt={p.name}
        className="h-full w-full object-cover"
        />
        </div>

        <div className="self-center">
        <p className="text-xs uppercase tracking-[.28em] text-[#C8A96A]">
        {p.category}
        </p>

        <h1 className="mt-4 font-[Cormorant_Garamond] text-6xl leading-none md:text-7xl">
        {p.name}
        </h1>

        <p className="mt-5 text-lg">{formatPrice(p.price)}</p>

        <p className="mt-7 max-w-xl text-sm leading-7 text-[#68645D]">
        {p.description}
        </p>

        <ul className="mt-8 space-y-3 border-y border-black/10 py-7">
        {p.details.map((d) => (
            <li key={d} className="text-sm text-[#68645D]">
            — {d}
            </li>
        ))}
        </ul>

        <div className="mt-8 flex gap-4">
        <div className="flex items-center rounded-full border border-black/15">
        <button
        type="button"
        className="p-3"
        onClick={() => setQ(Math.max(1, q - 1))}
        >
        <Minus size={15} />
        </button>

        <span className="min-w-8 text-center text-sm">{q}</span>

        <button
        type="button"
        className="p-3"
        onClick={() => setQ(q + 1)}
        >
        <Plus size={15} />
        </button>
        </div>

        <button
        type="button"
        onClick={() => add(p, q)}
        className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-xs uppercase tracking-[.18em] text-[#F5F1E8] hover:bg-[#C8A96A] hover:text-[#171717]"
        >
        <ShoppingBag size={16} />
        Add to Bag
        </button>
        </div>
        </div>
        </div>
        </div>
        </main>
    );
}
