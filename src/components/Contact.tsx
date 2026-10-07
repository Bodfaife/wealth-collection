import { Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="bg-[#F5F1E8] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[.3em] text-[#C8A96A]">
        Get in touch
        </p>

        <h1 className="mt-4 font-[Cormorant_Garamond] text-6xl md:text-8xl">
        Let's talk.
        </h1>

        <div className="mt-14 grid gap-14 md:grid-cols-[.8fr_1.2fr]">
        <div>
        <p className="max-w-md text-sm leading-7 text-[#68645D]">
        Questions about a piece, an order, a collaboration, or simply
        want to say hello? We'd love to hear from you.
        </p>

        <div className="mt-10 space-y-6 text-sm">
        <a
        href="mailto:hello@wealthcollection.com"
        className="flex items-center gap-4 hover:text-[#C8A96A]"
        >
        <Mail size={18} />
        hello@wealthcollection.com
        </a>

        <div className="flex items-center gap-4">
        <MapPin size={18} />
        Lagos · Nigeria
        </div>

        <a
        href="#"
        aria-label="Instagram"
        className="flex items-center gap-4 hover:text-[#C8A96A]"
        >
        <svg
        width="18"
        height="18"
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

        Instagram
        </a>
        </div>
        </div>

        <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-5"
        >
        <div className="grid gap-5 md:grid-cols-2">
        <input
        required
        className="border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none"
        placeholder="Your name"
        />

        <input
        required
        type="email"
        className="border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none"
        placeholder="Email address"
        />
        </div>

        <input
        className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none"
        placeholder="Subject"
        />

        <textarea
        required
        rows={6}
        className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none"
        placeholder="Tell us what's on your mind..."
        />

        <button
        type="submit"
        className="rounded-full bg-[#171717] px-8 py-4 text-xs uppercase tracking-[.18em] text-[#F5F1E8] hover:bg-[#C8A96A] hover:text-[#171717]"
        >
        Send message
        </button>
        </form>
        </div>
        </div>
        </main>
    );
}
