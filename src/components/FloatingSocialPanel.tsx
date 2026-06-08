import { useState } from "react";
import { assets, brand, socialLinks } from "../data/siteContent";

export default function FloatingSocialPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-3 top-1/2 z-50 -translate-y-1/2 md:right-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group flex items-center gap-3 rounded-full px-3 py-3 transition-all duration-300"
        style={{
          background: open ? "#39FF14" : "rgba(10,10,10,0.82)",
          border: "1px solid rgba(57,255,20,0.25)",
          color: open ? "#050505" : "#39FF14",
          boxShadow: open ? "0 0 32px rgba(57,255,20,0.35)" : "0 0 20px rgba(57,255,20,0.12)",
          backdropFilter: "blur(16px)",
        }}
        aria-expanded={open}
        aria-label="Open social media links"
      >
        <span className="text-xs font-bold tracking-[0.22em] [writing-mode:vertical-rl] rotate-180">
          SOCIAL
        </span>
      </button>

      <div
        className="absolute right-14 top-1/2 w-[calc(100vw-5rem)] max-w-80 -translate-y-1/2 overflow-hidden rounded-3xl transition-all duration-500"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(24px)",
          pointerEvents: open ? "auto" : "none",
          background: "rgba(10,10,10,0.9)",
          border: "1px solid rgba(57,255,20,0.2)",
          boxShadow: "0 0 60px rgba(57,255,20,0.18)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div className="relative p-6">
          <div
            className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "rgba(57,255,20,0.18)" }}
          />
          <div className="relative flex items-center gap-3 mb-6">
            <img src={assets.logo} alt={brand.name} className="h-10 w-10 object-contain" />
            <div>
              <div className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {brand.name}
              </div>
              <div className="text-xs" style={{ color: "#D9D9D9" }}>
                Connect with the growth team
              </div>
            </div>
          </div>

          <div className="relative space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300"
                style={{ background: "rgba(5,5,5,0.72)", border: "1px solid rgba(57,255,20,0.12)" }}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300 group-hover/link:scale-110"
                    style={{ background: "rgba(57,255,20,0.1)", color: "#39FF14" }}
                  >
                    {social.short}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{social.label}</span>
                    <span className="block text-xs" style={{ color: "#D9D9D9" }}>
                      {social.handle}
                    </span>
                  </span>
                </span>
                <span className="transition-transform duration-300 group-hover/link:translate-x-1" style={{ color: "#39FF14" }}>
                  -&gt;
                </span>
              </a>
            ))}
          </div>

          <a
            href={`mailto:${brand.email}`}
            className="relative mt-5 flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300"
            style={{ background: "#39FF14", color: "#050505" }}
          >
            Email GroYou
          </a>
        </div>
      </div>
    </div>
  );
}