const faqs = [
  {
    q: "Why GroYou?",
    a: "Because we're not a traditional agency. We're an AI-powered growth engine that builds complete systems — not just campaigns. Every part works together.",
  },
  {
    q: "How Long For Results?",
    a: "Most clients see significant traction within 4-8 weeks. Full system optimization typically takes 3-6 months for maximum scale.",
  },
  {
    q: "Do You Offer SEO?",
    a: "Yes. Technical, local, and content SEO — all powered by AI for faster ranking and sustainable growth.",
  },
  {
    q: "Do You Build Websites?",
    a: "Absolutely. We design and develop ultra-fast, conversion-optimized websites that integrate with all your growth systems.",
  },
  {
    q: "Do You Use AI?",
    a: "AI is at the core of everything we do — from content generation and ad optimization to chatbots and automation workflows.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              FAQ
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Questions.
            <br />
            <span className="text-gradient">Answered.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl overflow-hidden transition-all"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(57,255,20,0.1)",
              }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span
                  className="text-lg md:text-xl font-medium"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
                >
                  {f.q}
                </span>
                <span
                  className="accordion-icon w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ml-4"
                  style={{
                    background: "rgba(57,255,20,0.1)",
                    color: "#39FF14",
                    border: "1px solid rgba(57,255,20,0.2)",
                  }}
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6" style={{ color: "#D9D9D9" }}>
                <p className="leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
