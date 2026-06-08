import { useEffect, useState } from "react";
import { assets, brand } from "../data/siteContent";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 600);
          return 100;
        }
        return p + 3;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const borderSoft = { borderColor: "rgba(57,255,20,0.2)" };
  const borderMid = { borderColor: "rgba(57,255,20,0.15)" };
  const borderFaint = { borderColor: "rgba(57,255,20,0.1)" };
  const progressStyle = {
    width: progress + "%",
    background: "#39FF14",
    boxShadow: "0 0 10px #39FF14",
  };

  return (
    <div
      className="preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "#050505" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Energy rings */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border pulse-ring" style={borderSoft} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full border pulse-ring-2" style={borderMid} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border pulse-ring-3" style={borderFaint} />
          </div>

          {/* Logo */}
          <div className="logo-spin relative z-10">
            <img
              src={assets.logo}
              alt={brand.name}
              width={120}
              height={120}
              className="mx-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="mt-16 text-center">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-widest mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            {brand.name.toUpperCase()}
          </h1>
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase"
            style={{ color: "#39FF14" }}
          >
            {brand.tagline}
          </p>
        </div>

        {/* Progress */}
        <div className="mt-12 w-64">
          <div
            className="flex justify-between text-xs mb-2"
            style={{ color: "#D9D9D9", fontFamily: "'Sora', sans-serif" }}
          >
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-[2px] overflow-hidden" style={{ background: "#1a1a1a" }}>
            <div className="h-full transition-all duration-100" style={progressStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
