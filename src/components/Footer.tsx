import { GroYouText } from "./Logo";
import { assets, brand, socialLinks } from "../data/siteContent";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "AI Systems", href: "#ai-systems" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 border-t" style={{ borderColor: "rgba(57,255,20,0.1)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px" style={{ background: "linear-gradient(90deg, transparent, #39FF14, transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={assets.logo}
                alt={brand.name}
                width={44}
                height={44}
                style={{ objectFit: "contain" }}
              />
              <GroYouText className="text-2xl font-bold" />
            </div>
            <p className="max-w-md" style={{ color: "#D9D9D9" }}>
              AI Powered Growth Systems For Modern Brands. {brand.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#39FF14" }}>
              Navigate
            </div>
            <div className="space-y-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block transition-colors"
                  style={{ color: "#D9D9D9" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#39FF14")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D9D9D9")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#39FF14" }}>
              Connect
            </div>
            <div className="space-y-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors group"
                  style={{ color: "#D9D9D9" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#39FF14")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D9D9D9")}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all group-hover:scale-110"
                    style={{
                      background: "rgba(57,255,20,0.08)",
                      border: "1px solid rgba(57,255,20,0.2)",
                      color: "#39FF14",
                    }}
                  >
                    {s.short}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
</div>

{/* SEO Location Signals */}
<div
  className="text-center py-8 border-t"
  style={{ borderColor: "rgba(57,255,20,0.1)" }}
>
  <p
    className="text-sm leading-8"
    style={{ color: "#8A8A8A" }}
  >
    Digital Marketing Agency in Chennai • SEO Services Chennai •
    Performance Marketing Agency Chennai • AI Automation Services Chennai •
    Website Development Company Chennai
  </p>
</div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: "rgba(57,255,20,0.1)" }}>
          <div className="text-sm" style={{ color: "#D9D9D9" }}>
            © 2026 {brand.name}. All Rights Reserved.
          </div>
          <div className="text-sm" style={{ color: "#39FF14", fontFamily: "'Space Grotesk', sans-serif" }}>
            {brand.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
