import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/Shop" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
   <header className="sticky top-0 z-50 border-b border-[var(--wc-gold)]/20 bg-[var(--wc-cream)]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-22 lg:px-10">
        {/* Logo */}
        <a
          href="/"
          className="font-display text-xl font-semibold tracking-[0.12em] transition-opacity hover:opacity-70 md:text-2xl"
        >
          WEALTH COLLECTION
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-xs font-medium uppercase tracking-[0.18em] text-[var(--wc-charcoal)] transition-colors hover:text-[var(--wc-gold)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <button
            type="button"
            aria-label="Search"
            className="transition-colors hover:text-[var(--wc-gold)]"
          >
            <Search
            size={19}
            strokeWidth={1.5}
            />
          </button>

          <button
            type="button"
            aria-label="Shopping bag"
            className="transition-colors hover:text-[var(--wc-gold)]"
          >
            <ShoppingBag
            size={19}
            strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X size={23} strokeWidth={1.5} />
          ) : (
            <Menu size={23} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
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
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em]"
            >
              <Search size={17} strokeWidth={1.5} />
              Search
            </button>

            <button
              type="button"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em]"
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              Bag
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
