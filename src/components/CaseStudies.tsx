const cases = [
  {
    phase: "Before",
    title: "Zero Online Presence",
    desc: "No visibility. No leads. No revenue from digital.",
    stat: "0 Leads",
  },
  {
    phase: "Strategy",
    title: "Growth Engine Built",
    desc: "SEO, Ads, Funnels, AI — all systems integrated.",
    stat: "6 Weeks",
  },
  {
    phase: "Result",
    title: "124 Leads Per Month",
    desc: "From zero to predictable, scalable growth.",
    stat: "+183%",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
                Case Studies
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
            >
              From Zero To
              <br />
              <span className="text-gradient">Scalable.</span>
            </h2>
          </div>
          <div className="text-sm" style={{ color: "#D9D9D9" }}>
            Real results. Real brands. Real systems.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.phase}
              className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(57,255,20,0.15)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(57,255,20,0.1), transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{ color: "#39FF14" }}
                  >
                    Phase 0{i + 1}
                  </div>
                  <div
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Sora', sans-serif", color: "#39FF14" }}
                  >
                    {c.stat}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
                >
                  {c.title}
                </h3>
                <p style={{ color: "#D9D9D9" }}>{c.desc}</p>

                {/* Visual */}
                <div className="mt-8 h-32 rounded-2xl relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(57,255,20,0.05), rgba(57,255,20,0.15))" }}
                >
                  <svg viewBox="0 0 300 120" className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id={`line-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#39FF14" stopOpacity="0" />
                        <stop offset="50%" stopColor="#39FF14" stopOpacity="1" />
                        <stop offset="100%" stopColor="#7CFF5B" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {i === 0 && (
                      <line x1="20" y1="90" x2="280" y2="90" stroke={`url(#line-${i})`} strokeWidth="2" strokeDasharray="4 4" />
                    )}
                    {i === 1 && (
                      <path d="M20,90 L80,80 L140,60 L200,40 L280,20" stroke={`url(#line-${i})`} strokeWidth="2.5" fill="none" />
                    )}
                    {i === 2 && (
                      <path d="M20,100 Q100,60 150,50 T280,15" stroke={`url(#line-${i})`} strokeWidth="3" fill="none" />
                    )}
                    {[...Array(5)].map((_, j) => (
                      <circle
                        key={j}
                        cx={30 + j * 55}
                        cy={i === 0 ? 90 : i === 1 ? 90 - j * 15 : 100 - j * 18}
                        r="3"
                        fill="#39FF14"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
