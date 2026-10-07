import { ArrowRight } from 'lucide-react';
export default function About()
{
    return <main className="bg-[#F5F1E8] text-[#171717]">

    <section
    className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[.3em] text-[#C8A96A]">Our Story</p>
    <h1 className="mt-5 max-w-5xl font-[Cormorant_Garamond] text-6xl leading-[.9] md:text-8xl">Luxury doesn't need to be loud.</h1>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
        <img src="/images/images10.jpg" alt="Wealth Collection story" className="aspect-[4/5] w-full object-cover"/>
        <div>
        <p className="text-xl leading-9">
    Wealth Collection was created around a simple belief: the things we live with should feel considered, timeless, and effortlessly refined.</p>
        <p className="mt-7 text-sm leading-7 text-[#68645D]">
    From vintage shirts to premium bedding and elevated everyday essentials, each piece is selected with an appreciation for quality, character, and understated design.</p>
        <p className="mt-7 text-sm leading-7 text-[#68645D]">
    True luxury lives in the details — the texture of a fabric, the way something fits, and the feeling it brings into your everyday life.</p>
    </div>

    </div>

    </div>

    </section>
        <section className="bg-[#171717] px-6 py-20 text-[#F5F1E8] md:px-10 md:py-28">
    <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[.3em] text-[#C8A96A]">The Wealth Standard</p>
    <h2 className="mt-5 font-[Cormorant_Garamond] text-5xl md:text-7xl">Considered. Characterful. Timeless.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#C9C3B8]">We choose pieces for how they feel in real life — not simply how they look on a screen.</p>
    <a href="/Shop" className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-[.2em] hover:text-[#C8A96A]">Explore the collection <ArrowRight size={16}/></a>
    </div>

    </section>

    </main>

}
