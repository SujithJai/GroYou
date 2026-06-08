import { assets, brand } from "../data/siteContent";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <img
      src={assets.logo}
      alt={brand.name}
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function LogoMark({ className = "", size = 48 }: LogoProps) {
  return (
    <img
      src={assets.logo}
      alt={brand.name}
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function GroYouText({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <span style={{ color: "#FFFFFF" }}>Gro</span>
      <span style={{ color: "#39FF14" }}>You</span>
    </span>
  );
}
