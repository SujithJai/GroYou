const testimonials = [
  {
    quote: "GroYou transformed our clinic's online presence. We went from zero to 127+ qualified leads in 90 days.",
    name: "Dr. Priya Sharma",
    role: "Aesthetic Clinic",
    initials: "PS",
  },
  {
    quote: "The AI systems they built save us 40+ hours every week. Our team finally focuses on patients, not admin.",
    name: "Dr. Arjun Kumar",
    role: "Dental Practice",
    initials: "AK",
  },
  {
    quote: "Our skincare brand scaled from local to national. ROAS moved from 1.4x to 6.2x in 6 months.",
    name: "Meera Iyer",
    role: "Skincare Brand",
    initials: "MI",
  },
  {
    quote: "They don't just run ads — they build complete growth systems. Every part works together.",
    name: "Rajesh Venkat",
    role: "Real Estate",
    initials: "RV",
  },
  {
    quote: "Best investment we've made this year. The results speak for themselves.",
    name: "Anitha Rajan",
    role: "Business Owner",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              Testimonials
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Trusted By
            <br />
            <span className="text-gradient">Growth-Minded Brands.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(57,255,20,0.1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at top, rgba(57,255,20,0.08), transparent 70%)" }}
              />
              <div className="relative z-10">
                <div
                  className="text-5xl mb-4"
                  style={{ color: "rgba(57,255,20,0.3)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  "
                </div>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: "#fff" }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                    style={{
                      background: "rgba(57,255,20,0.1)",
                      color: "#39FF14",
                      fontFamily: "'Sora', sans-serif",
                      border: "1px solid rgba(57,255,20,0.2)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "#fff" }}>{t.name}</div>
                    <div className="text-sm" style={{ color: "#D9D9D9" }}>{t.role}</div>
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(57,255,20,0.3), transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
