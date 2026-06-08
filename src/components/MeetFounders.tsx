import { useEffect, useRef, useState } from "react";
import { founders, socialLinks } from "../data/siteContent";

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(card);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // 3D tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setRotation({
      x: y * -15,
      y: x * 15,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="relative group"
      style={{
        perspective: "1000px",
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 50}px)`,
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          background: "rgba(10,10,10,0.8)",
          border: "1px solid rgba(57,255,20,0.15)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Glass effect overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(57,255,20,0.05) 100%)",
          }}
        />

        {/* Green glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 60px rgba(57,255,20,0.1)",
          }}
        />

        {/* Image container */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={founder.image}
            alt={founder.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            style={{
              filter: "contrast(1.05)",
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.95) 100%)",
            }}
          />

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full float"
              style={{
                top: `${20 + Math.random() * 40}%`,
                left: `${10 + Math.random() * 80}%`,
                background: "#39FF14",
                opacity: 0,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative p-6 -mt-16">
          <div
            className="text-xs tracking-[0.2em] uppercase mb-2"
            style={{ color: "#39FF14" }}
          >
            {founder.role}
          </div>
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            {founder.name}
          </h3>
          <div
            className="mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "rgba(57,255,20,0.1)", color: "#39FF14", border: "1px solid rgba(57,255,20,0.18)" }}
          >
            {founder.experience}
          </div>
          <p className="text-sm" style={{ color: "#D9D9D9" }}>
            {founder.bio}
          </p>

          {/* Social links */}
          <div className="flex gap-3 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(57,255,20,0.1)",
                  border: "1px solid rgba(57,255,20,0.2)",
                  color: "#39FF14",
                }}
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        {/* Border glow effect */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: "0 0 40px rgba(57,255,20,0.2), inset 0 0 40px rgba(57,255,20,0.05)",
          }}
        />
      </div>
    </div>
  );
}

export default function MeetFounders() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.08), transparent 70%)",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              Leadership
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Meet The Founders
          </h2>
          <p className="text-xl" style={{ color: "#D9D9D9" }}>
            Built by creators. Driven by results. Focused on growth.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
