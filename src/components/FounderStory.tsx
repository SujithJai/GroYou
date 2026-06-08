import { useEffect, useRef, useState } from "react";
import { founderStory } from "../data/siteContent";

const particles = [
  { top: "14%", left: "10%", delay: "0s" },
  { top: "22%", left: "88%", delay: "0.3s" },
  { top: "40%", left: "4%", delay: "0.7s" },
  { top: "62%", left: "92%", delay: "1.1s" },
  { top: "78%", left: "14%", delay: "1.5s" },
  { top: "86%", left: "74%", delay: "1.9s" },
];

export default function FounderStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const milestones = founderStory.milestones;

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = image.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) * 0.018;
      targetY = (e.clientY - centerY) * 0.018;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      image.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const raw = (viewHeight * 0.75 - rect.top) / (rect.height + viewHeight * 0.2);
      const nextProgress = Math.max(0, Math.min(1, raw));
      const nextIndex = Math.min(
        milestones.length - 1,
        Math.max(0, Math.round(nextProgress * (milestones.length - 1)))
      );

      setProgress(nextProgress);
      setActiveIndex(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [milestones.length]);

  return (
    <section ref={sectionRef} id="story" className="relative px-6 overflow-hidden section-compact">
      <div
        className="absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(57,255,20,0.08), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(57,255,20,0.22), transparent 70%)" }}
            />
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-[2rem]"
              style={{
                border: "1px solid rgba(57,255,20,0.18)",
                boxShadow: "0 0 60px rgba(57,255,20,0.12)",
              }}
            >
              <img
                src={founderStory.image}
                alt={`${founderStory.founderName} - ${founderStory.founderRole}`}
                className="h-[720px] w-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 52%, rgba(5,5,5,0.94) 100%)" }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#39FF14" }}>
                    {founderStory.founderRole}
                  </div>
                  <div className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {founderStory.founderName}
                  </div>
                </div>
                <div
                  className="hidden sm:block px-4 py-2 rounded-full text-xs tracking-[0.18em] uppercase"
                  style={{ border: "1px solid rgba(57,255,20,0.2)", color: "#39FF14" }}
                >
                  Growth Builder
                </div>
              </div>
            </div>

            {particles.map((particle, index) => (
              <span
                key={index}
                className="absolute h-1.5 w-1.5 rounded-full float"
                style={{
                  top: particle.top,
                  left: particle.left,
                  background: "#39FF14",
                  opacity: 0.45,
                  animationDelay: particle.delay,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <div className="mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
                  {founderStory.eyebrow}
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl font-bold leading-[1.02]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {founderStory.title}
                <br />
                <span className="text-gradient">{founderStory.highlight}</span>
              </h2>
            </div>

            <div className="mb-8 h-1 rounded-full overflow-hidden" style={{ background: "rgba(57,255,20,0.1)" }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress * 100}%`, background: "linear-gradient(90deg, #39FF14, #7CFF5B)" }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {milestones.map((milestone, index) => {
                const isActive = index === activeIndex;
                const isPassed = index <= activeIndex;

                return (
                  <article
                    key={milestone.year}
                    className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-500"
                    style={{
                      background: isActive ? "rgba(57,255,20,0.09)" : "#0A0A0A",
                      border: `1px solid ${isActive ? "rgba(57,255,20,0.55)" : "rgba(57,255,20,0.12)"}`,
                      transform: isActive ? "translateY(-4px)" : "translateY(0)",
                      boxShadow: isActive ? "0 0 34px rgba(57,255,20,0.18)" : "none",
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "linear-gradient(90deg, transparent, #39FF14, transparent)" }}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold transition-all duration-500"
                        style={{
                          fontFamily: "'Sora', sans-serif",
                          color: isPassed ? "#050505" : "#39FF14",
                          background: isPassed ? "#39FF14" : "rgba(57,255,20,0.08)",
                          boxShadow: isActive ? "0 0 20px rgba(57,255,20,0.45)" : "none",
                        }}
                      >
                        {milestone.year.slice(2)}
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "#39FF14" }}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {milestone.label}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#D9D9D9" }}>
                          {milestone.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
