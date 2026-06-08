import { useEffect, useRef, useState } from "react";
import { resultStats } from "../data/siteContent";

function useCountUp(target: number, decimals: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const multiplier = Math.pow(10, decimals);
      setCount(Math.round(eased * target * multiplier) / multiplier);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setCount(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, decimals, isVisible]);
  return count;
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              Proven Results
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Numbers That
            <br />
            <span className="text-gradient">Don't Lie.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {resultStats.map((s) => (
            <StatCard key={s.label} stat={s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, visible }: { stat: typeof resultStats[0]; visible: boolean }) {
  const count = useCountUp(stat.value, stat.decimals, visible);
  return (
    <div
      className="relative p-8 rounded-3xl text-center transition-all duration-500 hover:scale-105"
      style={{
        background: "#0A0A0A",
        border: "1px solid rgba(57,255,20,0.15)",
      }}
    >
      <div
        className="text-5xl md:text-7xl font-bold mb-3"
        style={{
          fontFamily: "'Sora', sans-serif",
          color: "#39FF14",
          textShadow: "0 0 30px rgba(57,255,20,0.4)",
        }}
      >
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : count}
        <span style={{ fontFamily: "'Sora', sans-serif" }}>{stat.suffix}</span>
      </div>
      <div className="text-sm" style={{ color: "#D9D9D9" }}>
        {stat.label}
      </div>
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity"
        style={{ boxShadow: "0 0 40px rgba(57,255,20,0.15)" }}
      />
    </div>
  );
}
