const stages = [
  { label: "Traffic", desc: "SEO + Ads", icon: "◈" },
  { label: "Leads", desc: "Capture & Qualify", icon: "✦" },
  { label: "Conversions", desc: "Funnel Optimized", icon: "⇌" },
  { label: "Revenue", desc: "Sales System", icon: "◆" },
  { label: "Scale", desc: "AI Automation", icon: "⚡" },
];

export default function GrowthEngine() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              Growth Engine
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            From Traffic To
            <br />
            <span className="text-gradient">Scalable Revenue.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#D9D9D9" }}>
            Every stage connected. Every metric tracked. Every system working together.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(57,255,20,0.4), transparent)" }} />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stages.map((stage, i) => (
              <div key={stage.label} className="relative group">
                <div
                  className="relative p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: "#0A0A0A",
                    border: "1px solid rgba(57,255,20,0.15)",
                  }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl font-bold glow-pulse"
                    style={{ background: "rgba(57,255,20,0.08)", color: "#39FF14" }}
                  >
                    {stage.icon}
                  </div>
                  <div
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
                  >
                    {stage.label}
                  </div>
                  <div className="text-sm" style={{ color: "#D9D9D9" }}>{stage.desc}</div>
                  <div
                    className="mt-3 text-xs"
                    style={{ color: "#39FF14", fontFamily: "'Sora', sans-serif" }}
                  >
                    Stage 0{i + 1}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-xl" style={{ color: "#39FF14" }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full float"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                background: "#39FF14",
                opacity: 0.3,
                animationDelay: i * 0.4 + "s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
