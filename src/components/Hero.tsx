import { useEffect, useRef } from "react";
import { assets, brand } from "../data/siteContent";

function useMouseTilt() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = "perspective(1200px) rotateY(" + (x * 15) + "deg) rotateX(" + (-y * 15) + "deg)";
    };
    const onLeave = () => {
      el.style.transform = "perspective(1200px) rotateY(0) rotateX(0)";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return ref;
}

export default function Hero() {
  const tiltRef = useMouseTilt();

  const badgeStyle = { border: "1x solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" };
  const orbStyle = { borderColor: "rgba(57,255,20,0.15)" };
  const orbStyle2 = { borderColor: "rgba(57,255,20,0.2)" };
  const orbStyle3 = { borderColor: "rgba(57,255,20,0.1)" };
  const coreBorder = { border: "1x solid rgba(57,255,20,0.3)", background: "#0A0A0A" };
  const cardBorder = { border: "1x solid rgba(57,255,20,0.2)", background: "#0A0A0A" };
  

  return (
    <section className="relative min-h-screen flex items-center t-32 b-24 x-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg oacity-40 pointer-events-none" />
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 mt-25" style={badgeStyle}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              AI Powered Growth Engine
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            We Grow Brands.
            <br />
            <span className="text-gradient">You Grow Revenue.</span>
          </h1>
          <h2
  className="text-sm md:text-base uppercase tracking-[0.2em] mb-6"
  style={{ color: "#39FF14" }}
>
  Digital Marketing Agency in Chennai
</h2>
          <p className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed" style={{ color: "#D9D9D9" }}>
              From visibility to conversions, every system works together
  to scale your business.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={brand.form}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold overflow-hidden transition-all"
              style={{ background: "#39FF14", color: "#050505", boxShadow: "0 0 30px rgba(57,255,20,0.5)" }}
            >
              <span className="relative z-10">Book Free Consultation</span>
              <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all"
              style={{ border: "1px solid rgba(57,255,20,0.3)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#39FF14";
                e.currentTarget.style.background = "rgba(57,255,20,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(57,255,20,0.3)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg className="w-5 h-5" style={{ color: "#39FF14" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.12 1.03 6.988 2.89a9.82 9.82 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.946L0 24l6.305-1.654a11.882 11.882 0 005.748 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413" />
              </svg>
              Chat On WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {["GS", "RK", "AM"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    border: "2px solid #050505",
                    background: "linear-gradient(135deg, #1a1a1a, #0a0a0a)",
                    color: i % 2 ? "#39FF14" : "#fff",
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="text-white font-semibold">127+</div>
              <div className="text-xs" style={{ color: "#D9D9D9" }}>Brands Trust Us</div>
            </div>
          </div>
        </div>

        {/* RIGHT - 3D Growth Core */}
        <div
          ref={tiltRef}
          className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-full h-full rounded-full"
              style={{ background: "radial-gradient(circle at center, rgba(57,255,20,0.15), transparent 70%)" }}
            />
          </div>

          {/* Orbits */}
          <div className="absolute w-[500px] h-[500px] rounded-full border orbit" style={orbStyle}>
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ background: "#39FF14", boxShadow: "0 0 20px #39FF14" }}
            />
          </div>
          <div className="absolute w-[400px] h-[400px] rounded-full border orbit-reverse" style={orbStyle2}>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: "#7CFF5B", boxShadow: "0 0 15px #7CFF5B" }}
            />
          </div>
          <div className="absolute w-[320px] h-[320px] rounded-full border orbit" style={orbStyle3}>
            <div
              className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: "#39FF14" }}
            />
          </div>

          {/* Core Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 core-glow"
                style={{ background: "#39FF14" }}
              />
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center glow-pulse"
                style={coreBorder}
              >
                <img
                  src={assets.logo}
                  alt={brand.name}
                  width={140}
                  height={140}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* Floating metric cards */}
          <div
            className="absolute top-8 right-4 rounded-xl px-4 py-3 backdrop-blur-sm float"
            style={{ ...cardBorder, animationDelay: "0s" }}
          >
            <div className="text-[10px] tracking-widest uppercase" style={{ color: "#D9D9D9" }}>SEO</div>
            <div className="text-2xl font-bold" style={{ color: "#39FF14", fontFamily: "'Sora', sans-serif" }}>+183%</div>
          </div>
          <div
            className="absolute bottom-12 left-0 rounded-xl px-4 py-3 backdrop-blur-sm float"
            style={{ ...cardBorder, animationDelay: "1s" }}
          >
            <div className="text-[10px] tracking-widest uppercase" style={{ color: "#D9D9D9" }}>ROAS</div>
            <div className="text-2xl font-bold" style={{ color: "#39FF14", fontFamily: "'Sora', sans-serif" }}>5.2X</div>
          </div>
          <div
            className="absolute bottom-4 right-0 rounded-xl px-4 py-3 backdrop-blur-sm float"
            style={{ ...cardBorder, animationDelay: "2s" }}
          >
            <div className="text-[10px] tracking-widest uppercase" style={{ color: "#D9D9D9" }}>LEADS</div>
            <div className="text-2xl font-bold" style={{ color: "#39FF14", fontFamily: "'Sora', sans-serif" }}>124/MO</div>
          </div>
          <div
            className="absolute top-20 left-4 rounded-xl px-4 py-3 backdrop-blur-sm float"
            style={{ ...cardBorder, animationDelay: "0.5s" }}
          >
            <div className="text-[10px] tracking-widest uppercase" style={{ color: "#D9D9D9" }}>AI</div>
            <div className="text-2xl font-bold" style={{ color: "#39FF14", fontFamily: "'Sora', sans-serif" }}>24/7</div>
          </div>

          {/* Particle dots */}
          {[...Array(12)].map((_, i) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full float"
                style={{
                  top: top + "%",
                  left: left + "%",
                  background: "#39FF14",
                  animationDelay: i * 0.3 + "s",
                  opacity: 0.4 + Math.random() * 0.6,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
