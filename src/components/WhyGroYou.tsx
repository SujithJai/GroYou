import { useEffect, useRef } from "react";

const cards = [
  {
    title: "SEO",
    desc: "Rank higher. Get found. Win consistently.",
    tags: ["Organic", "Local", "Technical"],
    icon: "⌕",
  },
  {
    title: "Google Ads",
    desc: "Precision targeting. Maximum ROI.",
    tags: ["Search", "Display", "YouTube"],
    icon: "◎",
  },
  {
    title: "Meta Ads",
    desc: "Engage. Convert. Scale.",
    tags: ["Facebook", "Instagram", "Reels"],
    icon: "◈",
  },
  {
    title: "Funnels",
    desc: "Turn clicks into customers automatically.",
    tags: ["Landing", "CRO", "A/B"],
    icon: "⇌",
  },
  {
    title: "AI Automation",
    desc: "Smart systems. 24/7 execution.",
    tags: ["Chatbots", "CRM", "Email"],
    icon: "✦",
  },
  {
    title: "Website Systems",
    desc: "Fast. Beautiful. Convertible.",
    tags: ["Design", "Dev", "SEO-ready"],
    icon: "◉",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function WhyGroYou() {
  const ref = useReveal();

  return (
    <section id="services" className="relative py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              Integrated Growth Engine
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            One Engine.
            <br />
            <span className="text-gradient">All Growth.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#D9D9D9" }}>
            From SEO and paid acquisition to brand systems and AI automation —
            everything works together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card-3d group relative p-8 rounded-3xl overflow-hidden"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(57,255,20,0.1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at top, rgba(57,255,20,0.08), transparent 70%)" }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px transition-all duration-500 group-hover:h-full"
                style={{ background: "linear-gradient(90deg, transparent, rgba(57,255,20,0.3), transparent)" }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold"
                  style={{
                    background: "rgba(57,255,20,0.1)", color: "#39FF14" }}
                >
                  {c.icon}
                </div>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
                >
                  {c.title}
                </h3>
                <p className="mb-6" style={{ color: "#D9D9D9" }}>{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        border: "1px solid rgba(57,255,20,0.15)",
                        color: "#D9D9D9" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="mt-6 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#39FF14" }}
                >
                  Learn more →
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #39FF14, transparent)", opacity: 0 }} />
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "0 0 40px rgba(57,255,20,0.15)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
