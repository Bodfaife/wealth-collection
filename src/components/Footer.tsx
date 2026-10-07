import { ArrowUpRight } from "lucide-react";

const shopLinks = [
    { label: "All Products", href: "/Shop" },
{ label: "Vintage Shirts", href: "/Shop?category=shirts" },
{ label: "Premium Bedding", href: "/Shop?category=bedding" },
{ label: "Essentials", href: "/Shop?category=essentials" },
];

const companyLinks = [
    { label: "Our Story", href: "/About" },
{ label: "Contact", href: "/Contact" },
{ label: "FAQs", href: "/faq" },
{ label: "Shipping & Returns", href: "/shipping" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0F0F0F] text-[#F5F1E8]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 py-20 md:grid-cols-2 lg:grid-cols-4 lg:py-24">

        {/* Brand */}
        <div className="lg:col-span-2">
        <a
        href="/"
        className="inline-block text-xl font-semibold tracking-[0.12em] transition-opacity hover:opacity-70 md:text-2xl"
        >
        WEALTH COLLECTION
        </a>

        <p
        className="mt-7 max-w-md text-3xl leading-tight text-[#E8E0D3] md:text-4xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
        Quiet luxury.
        <br />
        Timeless living.
        </p>

        <p className="mt-6 max-w-md text-sm font-light leading-7 text-[#88847C]">
        Curated fashion, bedding, and everyday essentials for those who
        appreciate quality without the noise.
        </p>

        {/* Socials */}
        <div className="mt-8 flex items-center gap-3">
        {/* Instagram */}
        <a
        href="#"
        aria-label="Instagram"
        className="flex h-10 w-10 items-center justify-center border border-white/15 transition-all hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#0F0F0F]"
        >
        <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
        />
        <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        />
        <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        />
        </svg>
        </a>

        {/* Facebook */}
        <a
        href="#"
        aria-label="Facebook"
        className="flex h-10 w-10 items-center justify-center border border-white/15 transition-all hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#0F0F0F]"
        >
        <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M14 8h3V4.5c-.5-.1-2-.2-3.4-.2-3.4 0-5.7 2-5.7 5.8v3.2H5v3.9h2.9V24h4v-6.8h3.3l.5-3.9h-3.8v-2.8c0-1.1.3-1.8 2.1-1.8Z" />
        </svg>
        </a>
        </div>
        </div>

        {/* Shop */}
        <div>
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C8A96A]">
        Shop
        </p>

        <nav className="flex flex-col gap-4">
        {shopLinks.map((link) => (
            <a
            key={link.label}
            href={link.href}
            className="w-fit text-sm text-[#A09B92] transition-colors hover:text-[#F5F1E8]"
            >
            {link.label}
            </a>
        ))}
        </nav>
        </div>

        {/* Company */}
        <div>
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C8A96A]">
        Company
        </p>

        <nav className="flex flex-col gap-4">
        {companyLinks.map((link) => (
            <a
            key={link.label}
            href={link.href}
            className="w-fit text-sm text-[#A09B92] transition-colors hover:text-[#F5F1E8]"
            >
            {link.label}
            </a>
        ))}
        </nav>
        </div>
        </div>

        {/* Contact strip */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-8 md:flex-row md:items-center md:justify-between">
        <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#68645D]">
        Get in touch
        </p>

        <a
        href="mailto:hello@wealthcollection.com"
        className="mt-2 inline-flex items-center gap-2 text-sm text-[#D5CFC4] transition-colors hover:text-[#C8A96A]"
        >
        hello@wealthcollection.com
        <ArrowUpRight size={14} />
        </a>
        </div>

        <p className="text-sm text-[#68645D]">
        Lagos · Nigeria
        </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-7 text-[10px] uppercase tracking-[0.15em] text-[#68645D] sm:flex-row sm:items-center sm:justify-between">
        <p>
        © {new Date().getFullYear()} Wealth Collection. All rights reserved.
        </p>

        <div className="flex gap-6">
        <a
        href="/privacy"
        className="transition-colors hover:text-[#C8A96A]"
        >
        Privacy
        </a>

        <a
        href="/terms"
        className="transition-colors hover:text-[#C8A96A]"
        >
        Terms
        </a>
        </div>
        </div>

        </div>
        </footer>
    );
}
