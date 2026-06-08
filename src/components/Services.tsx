const services = [
  {
    title: "SEO",
    desc: "Dominate search with data-driven SEO.",
    icon: "⌕",
    metric: "+183% Traffic",
  },
  {
    title: "Google Ads",
    desc: "Precision campaigns. Maximum returns.",
    icon: "◎",
    metric: "ROAS 5.2X",
  },
  {
    title: "Meta Ads",
    desc: "Engage audiences. Convert at scale.",
    icon: "◈",
    metric: "CTR 4.9%",
  },
  {
    title: "Website Development",
    desc: "Fast, beautiful, conversion-ready sites.",
    icon: "◉",
    metric: "CVR +76%",
  },
  {
    title: "Content Marketing",
    desc: "Content that ranks and converts.",
    icon: "✦",
    metric: "13.4M+ Reach",
  },
  {
    title: "AI Automation",
    desc: "Smart systems. 24/7 execution.",
    icon: "⚡",
    metric: "24/7 Active",
  },
];

export default function Services() {
  return (
    <section id="services-section" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              Our Services
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Complete Growth
            <br />
            <span className="text-gradient">Under One Roof.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(57,255,20,0.1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 30% 0%, rgba(57,255,20,0.08), transparent 60%)" }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{ background: "rgba(57,255,20,0.08)", color: "#39FF14" }}
                  >
                    {s.icon}
                  </div>
                  <div
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      border: "1px solid rgba(57,255,20,0.2)",
                      color: "#39FF14",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {s.metric}
                  </div>
                </div>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
                >
                  {s.title}
                </h3>
                <p className="mb-6" style={{ color: "#D9D9D9" }}>{s.desc}</p>
                <div
                  className="flex items-center gap-2 text-sm transition-all group-hover:gap-3"
                  style={{ color: "#39FF14" }}
                >
                  Explore service
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: "linear-gradient(90deg, #39FF14, #7CFF5B)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
