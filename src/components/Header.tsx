import { useEffect, useState } from "react";
import { GroYouText } from "./Logo";
import { assets, brand } from "../data/siteContent";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "AI Systems", href: "#ai-systems" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(5,5,5,0.8)] border-b border-[rgba(57,255,20,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={assets.logo}
            alt={brand.name}
            width={36}
            height={36}
            className="transition-transform group-hover:rotate-180 duration-700"
            style={{ objectFit: "contain" }}
          />
          <GroYouText className="text-xl font-bold" />
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#D9D9D9] hover:text-[#39FF14] transition-colors tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white px-4 py-2 rounded-full border border-[rgba(57,255,20,0.3)] hover:border-[#39FF14] hover:bg-[rgba(57,255,20,0.1)] transition-all"
          >
            Chat On WhatsApp
          </a>
          <a
            href={brand.form}
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#39FF14] text-[#050505] hover:bg-[#7CFF5B] transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)]"
          >
            Book Free Consultation →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(57,255,20,0.1)] bg-[#050505]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {/* Mobile Logo */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={assets.logo}
                alt={brand.name}
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
              <GroYouText className="text-lg font-bold" />
            </div>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#D9D9D9] hover:text-[#39FF14] py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white px-4 py-2 rounded-full border border-[rgba(57,255,20,0.3)] text-center"
            >
              Chat On WhatsApp
            </a>
            <a
              href={brand.form}
              className="text-sm font-semibold px-4 py-2.5 rounded-full bg-[#39FF14] text-[#050505] text-center"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
