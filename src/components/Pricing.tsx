import { useEffect, useRef, useState } from "react";
import { brand, pricingPackages } from "../data/siteContent";

function PricingCard({ pkg, index }: { pkg: typeof pricingPackages[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setRotation({
      x: y * -10,
      y: x * 10,
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
        transform: `translateY(${isVisible ? 0 : 40}px)`,
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{
            background: "#39FF14",
            color: "#050505",
            boxShadow: "0 0 20px rgba(57,255,20,0.5)",
          }}
        >
          Most Popular
        </div>
      )}

      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-300 h-full"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          background: pkg.popular
            ? "linear-gradient(135deg, rgba(57,255,20,0.1), rgba(10,10,10,0.95))"
            : "rgba(10,10,10,0.8)",
          border: pkg.popular
            ? "2px solid #39FF14"
            : "1px solid rgba(57,255,20,0.15)",
          boxShadow: pkg.popular
            ? "0 0 40px rgba(57,255,20,0.2)"
            : "none",
        }}
      >
        {/* Glass effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
          }}
        />

        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: pkg.popular
              ? "inset 0 0 60px rgba(57,255,20,0.15)"
              : "inset 0 0 60px rgba(57,255,20,0.08)",
          }}
        />

        <div className="relative p-8">
          {/* Package name */}
          <h3
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: pkg.popular ? "#39FF14" : "#fff",
            }}
          >
            {pkg.name}
          </h3>
          <p className="text-sm mb-6" style={{ color: "#D9D9D9" }}>
            {pkg.description}
          </p>

          {/* Price */}
          <div className="mb-6">
            <span
              className="text-4xl font-bold"
              style={{
                fontFamily: "'Sora', sans-serif",
                color: "#fff",
              }}
            >
              ₹{pkg.price}
            </span>
            <span className="text-sm" style={{ color: "#D9D9D9" }}>
              /{pkg.period}
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#D9D9D9" }}>
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{
                    background: pkg.popular ? "rgba(57,255,20,0.2)" : "rgba(57,255,20,0.1)",
                    color: "#39FF14",
                  }}
                >
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={brand.form}
            className="block w-full py-3 rounded-full text-center font-semibold transition-all duration-300"
            style={{
              background: pkg.popular ? "#39FF14" : "transparent",
              color: pkg.popular ? "#050505" : "#39FF14",
              border: "1px solid #39FF14",
            }}
            onMouseEnter={(e) => {
              if (!pkg.popular) {
                e.currentTarget.style.background = "#39FF14";
                e.currentTarget.style.color = "#050505";
              }
            }}
            onMouseLeave={(e) => {
              if (!pkg.popular) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#39FF14";
              }
            }}
          >
            Get Started
          </a>
        </div>

        {/* Animated border for popular */}
        {pkg.popular && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: "0 0 30px rgba(57,255,20,0.3), inset 0 0 30px rgba(57,255,20,0.05)",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.05), transparent 70%)",
          transform: "translate(-50%, -50%)",
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
              Pricing
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Growth Packages
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#D9D9D9" }}>
            Choose the perfect plan for your growth journey.
            All plans include dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPackages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm mb-4" style={{ color: "#D9D9D9" }}>
            Not sure which plan is right for you?
          </p>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#39FF14] hover:underline"
          >
            Chat with us on WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
