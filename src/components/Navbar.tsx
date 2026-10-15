import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
{ label: "Shop", href: "/shop" },
{ label: "About", href: "/about" },
{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openSearch = () => {
    setSearchOpen(true);
    setMobileMenuOpen(false);
  };

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    window.location.href = `/shop?search=${encodeURIComponent(query)}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--wc-gold)]/20 bg-[var(--wc-cream)]/95 backdrop-blur-md">
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-22 lg:px-10">
    <a
    href="/"
    className="font-display text-xl font-semibold tracking-[0.12em] transition-opacity hover:opacity-70 md:text-2xl"
    >
    WEALTH COLLECTION
    </a>

    <div className="hidden items-center gap-10 md:flex">
    {navLinks.map((link) => (
      <a
      key={link.label}
      href={link.href}
      className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--wc-charcoal)] transition-colors hover:text-[var(--wc-gold)]"
      >
      {link.label}
      </a>
    ))}
    </div>

    <div className="hidden items-center gap-5 md:flex">
    <button
    type="button"
    aria-label="Search products"
    onClick={openSearch}
    className="transition-colors hover:text-[var(--wc-gold)]"
    >
    <Search size={19} strokeWidth={1.5} />
    </button>

    <a
    href="/cart"
    aria-label="Shopping bag"
    className="transition-colors hover:text-[var(--wc-gold)]"
    >
    <ShoppingBag size={19} strokeWidth={1.5} />
    </a>
    </div>

    <button
    type="button"
    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
    onClick={() => setMobileMenuOpen((open) => !open)}
    className="md:hidden"
    >
    {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
    </button>
    </nav>

    {mobileMenuOpen && (
      <div className="border-t border-[var(--wc-gold)]/20 bg-[var(--wc-cream)] px-6 py-8 md:hidden">
      <div className="flex flex-col gap-6">
      {navLinks.map((link) => (
        <a
        key={link.label}
        href={link.href}
        onClick={() => setMobileMenuOpen(false)}
        className="text-sm uppercase tracking-[0.2em] transition-colors hover:text-[var(--wc-gold)]"
        >
        {link.label}
        </a>
      ))}
      </div>

      <div className="mt-8 flex items-center gap-6 border-t border-[var(--wc-gold)]/20 pt-6">
      <button
      type="button"
      onClick={openSearch}
      className="flex items-center gap-2 text-xs uppercase tracking-[0.15em]"
      >
      <Search size={17} /> Search
      </button>

      <a
      href="/cart"
      onClick={() => setMobileMenuOpen(false)}
      className="flex items-center gap-2 text-xs uppercase tracking-[0.15em]"
      >
      <ShoppingBag size={17} /> Bag
      </a>
      </div>
      </div>
    )}

    {searchOpen && (
      <div className="absolute left-0 top-full w-full border-b border-black/10 bg-[var(--wc-cream)] p-6 shadow-lg md:px-10">
      <form
      onSubmit={submitSearch}
      className="mx-auto flex max-w-3xl items-center gap-4"
      >
      <Search size={20} className="shrink-0" />
      <input
      autoFocus
      type="search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search shirts, bedding, essentials..."
      aria-label="Search products"
      className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none"
      />
      <button
      type="submit"
      className="text-xs uppercase tracking-widest"
      >
      Search
      </button>
      <button
      type="button"
      aria-label="Close search"
      onClick={() => setSearchOpen(false)}
      >
      <X size={20} />
      </button>
      </form>
      </div>
    )}
    </header>
  );
}
