const industries = [
  "Aesthetic Clinics",
  "Skincare Brands",
  "Doctors",
  "Real Estate",
  "Local Business",
  "Personal Brands",
  "Startups",
  "E-Commerce",
];

export default function TrustMarquee() {
  const all = [...industries, ...industries];
  return (
    <section className="relative py-16 overflow-hidden border-y" style={{ borderColor: "rgba(57,255,20,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D9D9D9" }}>
          Industries We Power
        </p>
        <div className="mt-2 h-[1px] w-20 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #39FF14, transparent)" }} />
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-4 marquee-track whitespace-nowrap">
          {all.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 py-4 rounded-2xl text-lg font-medium"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(57,255,20,0.15)",
                color: "#D9D9D9",
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: "0 0 20px rgba(57,255,20,0.1)",
              }}
            >
              <span style={{ color: "#39FF14" }}>◆</span> {item}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: "linear-gradient(90deg, #050505, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: "linear-gradient(-90deg, #050505, transparent)" }} />
    </section>
  );
}
