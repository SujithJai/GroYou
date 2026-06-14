import { useEffect, useRef, useState } from "react";
import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import FloatingSocialPanel from "../components/FloatingSocialPanel";
import { brand, assets } from "../data/siteContent";

/* ===========================================================
   DATA
   =========================================================== */

const featured = [
  {
    title: "Aesthetic Clinic Growth System",
    client: "Chennai Aesthetics",
    industry: "Healthcare",
    service: "SEO + Ads + Funnels",
    result: "+212% Leads",
    timeline: "90 Days",
    platform: "Google + Meta",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=85",
  },
  {
    title: "Real Estate Launch Campaign",
    client: "Skyline Properties",
    industry: "Real Estate",
    service: "Paid + Branding + Website",
    result: "6.8X ROAS",
    timeline: "12 Weeks",
    platform: "Google + YouTube",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85",
  },
  {
    title: "Skincare D2C Scale",
    client: "Glow Essentials",
    industry: "E-Commerce",
    service: "Meta Ads + Shopify + CRM",
    result: "+380% Revenue",
    timeline: "6 Months",
    platform: "Meta + Shopify",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=85",
  },
];

const videoCategories = [
  "Commercial Shoots",
  "Brand Films",
  "Product Videos",
  "Corporate Videos",
  "Real Estate Shoots",
  "Social Media Reels",
];

const videoWorks = [
  { title: "Aesthetic Clinic Commercial", category: "Commercial Shoots", length: "0:45", stat: "+320% Reach", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=85" },
  { title: "D2C Brand Film", category: "Brand Films", length: "1:12", stat: "+210 Leads", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=85" },
  { title: "Product Launch Video", category: "Product Videos", length: "0:32", stat: "5.8X ROAS", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=85" },
  { title: "Corporate Documentary", category: "Corporate Videos", length: "3:24", stat: "2.4M Views", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85" },
  { title: "Luxury Villa Showcase", category: "Real Estate Shoots", length: "2:08", stat: "147 Inquiries", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85" },
  { title: "Viral Reels Series", category: "Social Media Reels", length: "0:18", stat: "890K Views", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=85" },
  { title: "Ad Film - Skincare", category: "Commercial Shoots", length: "0:38", stat: "4.2X ROAS", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85" },
  { title: "Founder Story Film", category: "Brand Films", length: "2:15", stat: "+180% Engagement", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85" },
];

const websites = [
  { title: "Aesthetic Clinic System", industry: "Healthcare", service: "Next.js + SEO + Booking", result: "+84% CVR", timeline: "5 Weeks", platform: "Next.js", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85" },
  { title: "D2C E-Commerce Store", industry: "E-Commerce", service: "Shopify + CRO", result: "1.9s Load", timeline: "4 Weeks", platform: "Shopify", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=85" },
  { title: "Doctor Practice Site", industry: "Medical", service: "Custom + Local SEO", result: "Top 3 Rank", timeline: "6 Weeks", platform: "Custom", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85" },
  { title: "Brand Landing Page", industry: "SaaS", service: "Framer + UI/UX", result: "36% CVR", timeline: "2 Weeks", platform: "Framer", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85" },
  { title: "Startup Marketing Site", industry: "Startup", service: "Modern + Fast + CMS", result: "95 Lighthouse", timeline: "3 Weeks", platform: "Next.js", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85" },
  { title: "Real Estate Microsite", industry: "Real Estate", service: "Lead Gen + Airtable", result: "214 Leads/mo", timeline: "5 Weeks", platform: "Custom", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85" },
];

const marketing = [
  { title: "Google Ads — Aesthetic Clinic", industry: "Healthcare", result: "5.9X ROAS", note: "Search + Performance Max", timeline: "90 Days" },
  { title: "Meta Ads — Skincare D2C", industry: "E-Commerce", result: "4.8X ROAS", note: "Creative-led UGC funnel", timeline: "6 Months" },
  { title: "SEO — Multi-Clinic Group", industry: "Healthcare", result: "+247% Traffic", note: "180+ keywords top 10", timeline: "12 Months" },
  { title: "Local SEO — Home Services", industry: "Local Biz", result: "347% Calls", note: "Google Maps pack", timeline: "5 Months" },
  { title: "YouTube Ads — Education", industry: "Education", result: "0.19 CPV", note: "Pre-roll + Shorts mix", timeline: "8 Weeks" },
  { title: "LinkedIn B2B Outreach", industry: "B2B SaaS", result: "11 MQLs/mo", note: "Audiences + remarketing", timeline: "10 Weeks" },
];

const branding = [
  { title: "D2C Beauty Identity", tag: "Identity System", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=85" },
  { title: "Luxury Packaging", tag: "Print + Digital", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85" },
  { title: "Brand Guidelines System", tag: "Style System", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=85" },
  { title: "Launch Campaign Visuals", tag: "Campaign Identity", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85" },
];

const social = [
  { title: "Instagram Grid Redesign", stat: "4.2M Impressions", note: "Reels + Carousels", img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=700&q=85" },
  { title: "Reels Growth Engine", stat: "+98K Followers", note: "90-day content engine", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=700&q=85" },
  { title: "LinkedIn Thought Leadership", stat: "312% Reach", note: "Founder + Brand", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=85" },
  { title: "YouTube Channel System", stat: "120K+ Views/mo", note: "Shorts + Long form", img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=700&q=85" },
];

const stories = [
  {
    quote: "Our leads doubled in 60 days. The system they built is hands-off and predictable. We finally have a real growth engine.",
    name: "Dr. Priya Raghavan",
    role: "Director, Chennai Aesthetics",
    tag: "Healthcare",
  },
  {
    quote: "From local store to national D2C brand. GroYou and Digi Force treated our brand like their own — strategy, creative and growth all together.",
    name: "Meera Iyer",
    role: "Founder, Glow Essentials",
    tag: "D2C",
  },
  {
    quote: "They didn't just run ads — they built a complete growth and production machine. Consistent ROAS for 9 months now.",
    name: "Arun Vijay",
    role: "Marketing Head, Skyline Properties",
    tag: "Real Estate",
  },
];

/* ===========================================================
   HELPERS
   =========================================================== */

function SectionHeader({ eyebrow, title, highlight, subtitle, align = "left" }: {
  eyebrow: string; title: string; highlight: string; subtitle?: string; align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "max-w-4xl mx-auto text-center mb-16" : "max-w-4xl mb-16"}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}>
        <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>{eyebrow}</span>
      </div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
        {highlight && <span className="text-gradient"> {highlight}</span>}
      </h2>
      {subtitle && <p className="mt-5 text-lg max-w-2xl" style={{ color: "#D9D9D9" }}>{subtitle}</p>}
    </div>
  );
}

/* ===========================================================
   HERO
   =========================================================== */

function WorksHero() {
  const tiltRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1200px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };
    const onLeave = () => { el.style.transform = "perspective(1200px) rotateY(0) rotateX(0)"; };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { window.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(57,255,20,0.08), transparent 60%)" }} />

      <div className="max-w-7xl mx-auto w-full relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ border: "1px solid rgba(57,255,20,0.25)", background: "rgba(57,255,20,0.06)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>Selected Work • 2024–2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Work<br /><span className="text-gradient">Behind The Growth.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-10" style={{ color: "#D9D9D9" }}>
            Strategy, cinematic production, high-converting websites and performance campaigns — built together as one growth system.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#featured" className="px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform" style={{ background: "#39FF14", color: "#050505", boxShadow: "0 0 30px rgba(57,255,20,0.45)" }}>Explore Projects →</a>
            <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border transition-all hover:border-[#39FF14] hover:bg-[rgba(57,255,20,0.05)]" style={{ borderColor: "rgba(57,255,20,0.3)", color: "#fff" }}>Start A Project</a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { n: "127+", l: "Projects Delivered" },
              { n: "4.9/5", l: "Client Rating" },
              { n: "6.2x", l: "Average ROAS" },
            ].map((s) => (
              <div key={s.l} className="border-l pl-5" style={{ borderColor: "rgba(57,255,20,0.2)" }}>
                <div className="text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#39FF14" }}>{s.n}</div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "#D9D9D9" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={tiltRef} className="relative h-[480px] lg:h-[560px]" style={{ willChange: "transform", transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden border" style={{ borderColor: "rgba(57,255,20,0.18)" }}>
            <img src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1000&q=85" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, transparent 40%, rgba(5,5,5,0.95) 100%)" }} />
            <div className="absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(5,5,5,0.7)", color: "#39FF14", border: "1px solid rgba(57,255,20,0.3)" }}>Featured Film</div>
            <div className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" style={{ background: "#39FF14", color: "#050505", boxShadow: "0 0 24px rgba(57,255,20,0.6)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#39FF14" }}>Campaign Film</div>
              <div className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Luxury Clinic Commercial</div>
              <div className="text-sm mt-1" style={{ color: "#D9D9D9" }}>90-second cinematic ad for Chennai Aesthetics</div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 rounded-2xl p-4 border hidden md:block" style={{ background: "#0A0A0A", borderColor: "rgba(57,255,20,0.25)", transform: "translateZ(50px)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "#D9D9D9" }}>Avg. ROAS</div>
            <div className="text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#39FF14" }}>6.2x</div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl p-4 border hidden md:block" style={{ background: "#0A0A0A", borderColor: "rgba(57,255,20,0.25)", transform: "translateZ(50px)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "#D9D9D9" }}>Reach</div>
            <div className="text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#39FF14" }}>13.4M+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   FEATURED
   =========================================================== */

function FeaturedProjects() {
  return (
    <section id="featured" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Featured Projects" title="Work that" highlight="moves numbers." subtitle="A small selection of projects where strategy, design, production and AI converged to drive measurable growth." />
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <article key={p.title} className="group card-3d rounded-3xl overflow-hidden border" style={{ background: "#0A0A0A", borderColor: "rgba(57,255,20,0.12)" }}>
              <div className="relative h-72 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 35%, rgba(5,5,5,0.95))" }} />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#39FF14", color: "#050505" }}>{p.result}</span>
                </div>
                <div className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-semibold" style={{ background: "rgba(5,5,5,0.8)", color: "#39FF14", border: "1px solid rgba(57,255,20,0.3)" }}>{p.platform}</div>
              </div>
              <div className="p-6">
                <div className="text-xs tracking-[0.2em] uppercase mb-2 flex gap-3">
                  <span style={{ color: "#39FF14" }}>{p.industry}</span>
                  <span style={{ color: "rgba(217,217,217,0.5)" }}>•</span>
                  <span style={{ color: "#D9D9D9" }}>{p.timeline}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                <div className="text-sm mb-4" style={{ color: "#D9D9D9" }}>{p.client}</div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#39FF14" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#39FF14" }} />
                  {p.service}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   PARTNERSHIP
   =========================================================== */

function DigiForcePartnership() {
  const features = [
    "Commercial Shoots", "Brand Films", "Corporate Videos",
    "Product Photography", "Ad Film Production", "Reels Production", "YouTube Production",
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(57,255,20,0.07), transparent 70%)" }} />
      <div className="max-w-7xl mx-auto relative">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8" style={{ border: "1px solid rgba(57,255,20,0.25)", background: "rgba(57,255,20,0.05)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "#39FF14" }}>Video Production Partner</span>
          </div>

          {/* Partner logo lockup */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
            <div className="flex flex-col items-center">
              <img src={assets.logo} alt="GroYou" style={{ height: 56, objectFit: "contain" }} />
              <div className="text-xs mt-2 tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>Strategy • Marketing • Growth</div>
            </div>
            <div className="text-4xl font-thin" style={{ color: "rgba(57,255,20,0.5)" }}>×</div>
            <div className="flex flex-col items-center">
              <div className="px-5 py-3 rounded-xl border flex items-center gap-3" style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                    <path d="M2 7l10 5 10-5" />
                    <path d="M12 22V12" />
                  </svg>
                  <div>
                    <div className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>Digi Force</div>
                    <div className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "#D9D9D9" }}>Media Production</div>
                  </div>
                </div>
              </div>
              <div className="text-xs mt-2 tracking-[0.2em] uppercase" style={{ color: "#D9D9D9" }}>Cinema • Production • Story</div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-gradient">GroYou</span> <span style={{ color: "#fff" }}>×</span> <span style={{ color: "#fff" }}>Digi Force</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#D9D9D9" }}>
            Professional video production, commercial shoots, ad films, corporate videos, product photography,
            brand storytelling and cinematic content — delivered through a strategic partnership between GroYou and Digi Force.
          </p>
        </div>

        {/* Trust badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{
            border: "1px solid rgba(57,255,20,0.4)",
            background: "linear-gradient(90deg, rgba(57,255,20,0.1), rgba(57,255,20,0.03))",
            boxShadow: "0 0 30px rgba(57,255,20,0.15)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#39FF14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "#fff" }}>Official Production Partner</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f} className="px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105" style={{
              border: "1px solid rgba(57,255,20,0.15)",
              background: "rgba(10,10,10,0.8)",
              color: "#D9D9D9",
            }}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   VIDEO SHOWCASE — CINEMATIC
   =========================================================== */

function VideoShowcase() {
  const [active, setActive] = useState(0);
  const current = videoWorks[active];
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Motion That Sells"
          title="Strategy by GroYou."
          highlight="Production by Digi Force."
          subtitle="Performance-driven creative built for growth. Cinematic storytelling engineered to convert."
        />

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {videoCategories.map((c, i) => (
            <button
              key={c}
              onClick={() => setActive(i)}
              className="px-5 py-2 rounded-full text-sm transition-all"
              style={{
                border: "1px solid " + (i === active ? "#39FF14" : "rgba(57,255,20,0.15)"),
                background: i === active ? "rgba(57,255,20,0.1)" : "transparent",
                color: i === active ? "#39FF14" : "#D9D9D9",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured Video */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 mb-10">
          <div className="relative rounded-3xl overflow-hidden border group cursor-pointer" style={{ borderColor: "rgba(57,255,20,0.2)", minHeight: 500 }}>
            <img src={current.img} alt={current.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.9) 100%)" }} />
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#39FF14", color: "#050505" }}>{current.stat}</span>
              <span className="px-3 py-1 rounded-full text-xs" style={{ background: "rgba(0,0,0,0.7)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>{current.length}</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: "#39FF14", color: "#050505", boxShadow: "0 0 40px rgba(57,255,20,0.6)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#39FF14" }}>{current.category}</div>
              <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{current.title}</div>
            </div>
          </div>

          {/* Side list */}
          <div className="space-y-3">
            {videoWorks.slice(0, 5).map((v, i) => (
              <button
                key={v.title}
                onClick={() => setActive(i)}
                className="w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all hover:scale-[1.02]"
                style={{
                  borderColor: i === active ? "rgba(57,255,20,0.4)" : "rgba(57,255,20,0.1)",
                  background: i === active ? "rgba(57,255,20,0.06)" : "#0A0A0A",
                }}
              >
                <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#39FF14"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "#39FF14" }}>{v.category}</div>
                  <div className="text-sm font-bold truncate" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.title}</div>
                </div>
                <div className="text-xs font-bold flex-shrink-0" style={{ color: "#39FF14" }}>{v.stat}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {videoWorks.map((v, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(57,255,20,0.1)" }}>
              <div className="aspect-[3/4] relative overflow-hidden">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.9))" }} />
                <div className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold" style={{ background: "#39FF14", color: "#050505" }}>{v.stat}</div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs" style={{ background: "rgba(0,0,0,0.8)", color: "#fff" }}>{v.length}</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(57,255,20,0.95)", color: "#050505" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "#39FF14" }}>{v.category}</div>
                  <div className="text-sm font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   BEFORE/AFTER TRANSFORMATION
   =========================================================== */

function BeforeAfter() {
  const transforms = ["Color Grading", "Sound Design", "Motion Graphics", "Visual Effects", "Performance Optimization"];

  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Transformation"
          title="From raw footage to" highlight="cinematic output."
          subtitle="Three-stage production pipeline — engineered by Digi Force and optimized by GroYou."
        />

        {/* Workflow */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            { num: "01", title: "RAW FOOTAGE", desc: "Original camera footage before editing.", color: "rgba(217,217,217,0.6)" },
            { num: "02", title: "PRODUCTION", desc: "Shot professionally by Digi Force using cinema-grade equipment.", color: "#39FF14" },
            { num: "03", title: "FINAL OUTPUT", desc: "Edited, color graded, optimized and delivered by GroYou.", color: "#39FF14" },
          ].map((stage) => (
            <div key={stage.num} className="relative p-6 rounded-2xl border" style={{
              background: "#0A0A0A",
              borderColor: "rgba(57,255,20," + (stage.title === "PRODUCTION" ? "0.3)" : "0.12)"),
            }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-sm font-bold" style={{ fontFamily: "'Sora', sans-serif", color: stage.color }}>{stage.num}</div>
                {stage.num !== "03" && <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(57,255,20,0.4), transparent)" }} />}
              </div>
              <div className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: stage.color }}>{stage.title}</div>
              <p className="text-sm" style={{ color: "#D9D9D9" }}>{stage.desc}</p>
            </div>
          ))}
        </div>

        {/* Side by side */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Before */}
          <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(57,255,20,0.12)" }}>
            <div className="relative aspect-video">
              <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1000&q=80" alt="Raw footage" className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.3)" }} />
              <div className="absolute top-5 left-5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest" style={{ background: "rgba(0,0,0,0.8)", color: "#D9D9D9", border: "1px solid rgba(255,255,255,0.2)" }}>
                Before
              </div>
            </div>
            <div className="p-6" style={{ background: "#0A0A0A" }}>
              <div className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#D9D9D9" }}>Stage 01</div>
              <div className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>Raw Camera Footage</div>
              <p className="text-sm" style={{ color: "#D9D9D9" }}>Unedited source material — raw colors, natural sound, basic framing.</p>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-3xl overflow-hidden border" style={{
            borderColor: "rgba(57,255,20,0.4)",
            boxShadow: "0 0 50px rgba(57,255,20,0.15)",
          }}>
            <div className="relative aspect-video">
              <img src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1000&q=85" alt="Final video" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.5))" }} />
              <div className="absolute top-5 left-5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest" style={{ background: "#39FF14", color: "#050505" }}>
                After
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#39FF14", color: "#050505" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div className="p-6" style={{ background: "#0A0A0A" }}>
              <div className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#39FF14" }}>Stage 03</div>
              <div className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>Final Edited Video</div>
              <p className="text-sm" style={{ color: "#D9D9D9" }}>Cinema-grade color, sound, motion graphics and optimization for every platform.</p>
            </div>
          </div>
        </div>

        {/* Transform labels */}
        <div className="flex flex-wrap justify-center gap-3">
          {transforms.map((t) => (
            <div key={t} className="px-5 py-3 rounded-full text-sm flex items-center gap-2" style={{
              border: "1px solid rgba(57,255,20,0.15)",
              background: "rgba(57,255,20,0.04)",
              color: "#D9D9D9",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#39FF14"><path d="M20 6L9 17l-5-5" stroke="#39FF14" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   PRODUCTION PROCESS
   =========================================================== */

function ProductionProcess() {
  const steps = [
    { num: "01", title: "Strategy & Script", desc: "Audience research, creative brief, story and script aligned to growth goals." },
    { num: "02", title: "Production Planning", desc: "Shot lists, locations, talent, gear scheduling and production timelines." },
    { num: "03", title: "Professional Shoot", desc: "Cinema-grade cameras, lighting, sound and direction by Digi Force crew." },
    { num: "04", title: "Editing & Post", desc: "Editing, color grading, sound design, motion graphics and VFX." },
    { num: "05", title: "Distribution & Marketing", desc: "Multi-platform cuts, ads setup, content calendars and paid promotion." },
    { num: "06", title: "Lead Generation & Growth", desc: "Performance tracking, funnel optimization and conversion iteration." },
  ];

  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Process"
          title="How we create" highlight="winning content."
          subtitle="A six-stage system that turns creative ideas into measurable growth."
        />
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(57,255,20,0.3), transparent)" }} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div key={s.num} className="relative p-7 rounded-3xl border group hover:-translate-y-2 transition-transform duration-500" style={{ background: "#0A0A0A", borderColor: "rgba(57,255,20,0.12)" }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold" style={{ fontFamily: "'Sora', sans-serif", background: "rgba(57,255,20,0.1)", color: "#39FF14", border: "1px solid rgba(57,255,20,0.2)" }}>{s.num}</div>
                  <div className="flex-1 h-px md:hidden" style={{ background: "rgba(57,255,20,0.2)" }} />
                </div>
                <div className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#39FF14" }}>Step {i + 1}</div>
                <div className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</div>
                <p className="text-sm" style={{ color: "#D9D9D9" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   WEBSITES
   =========================================================== */

function WebPortfolio() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Website Development"
          title="High-converting,"
          highlight="fast websites."
          subtitle="Built on Next.js, Shopify and custom stacks. SEO-ready, mobile-first and engineered to convert."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {websites.map((w) => (
            <div key={w.title} className="group relative rounded-3xl overflow-hidden border hover:-translate-y-2 transition-transform duration-500" style={{ background: "#0A0A0A", borderColor: "rgba(57,255,20,0.12)" }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#39FF14", color: "#050505" }}>{w.result}</div>
                <div className="absolute top-4 left-4 px-2 py-1 rounded text-xs" style={{ background: "rgba(0,0,0,0.8)", color: "#39FF14", border: "1px solid rgba(57,255,20,0.3)" }}>{w.platform}</div>
              </div>
              <div className="p-6">
                <div className="text-xs tracking-[0.2em] uppercase mb-2 flex gap-3">
                  <span style={{ color: "#39FF14" }}>{w.industry}</span>
                  <span style={{ color: "rgba(217,217,217,0.5)" }}>•</span>
                  <span style={{ color: "#D9D9D9" }}>{w.timeline}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{w.title}</h3>
                <p className="text-sm mb-4" style={{ color: "#D9D9D9" }}>{w.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   MARKETING
   =========================================================== */

function MarketingPortfolio() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Digital Marketing"
          title="Campaigns that"
          highlight="scale predictably."
          subtitle="ROAS, traffic and lead numbers built from our performance stack — SEO, Paid, Creative and AI."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {marketing.map((m) => (
            <div key={m.title} className="group rounded-3xl p-7 border hover:-translate-y-2 transition-transform duration-500" style={{ background: "rgba(57,255,20,0.05)", borderColor: "rgba(57,255,20,0.15)" }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-2 flex justify-between">
                <span style={{ color: "#39FF14" }}>{m.industry}</span>
                <span style={{ color: "#D9D9D9" }}>{m.timeline}</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.title}</h3>
              <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "#39FF14", textShadow: "0 0 24px rgba(57,255,20,0.3)" }}>{m.result}</div>
              <p className="text-sm" style={{ color: "#D9D9D9" }}>{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   BRANDING
   =========================================================== */

function BrandingProjects() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Branding" title="Identities that" highlight="feel premium." subtitle="Visual systems, packaging and launch campaigns crafted for modern brands." />
        <div className="grid md:grid-cols-2 gap-5">
          {branding.map((b) => (
            <div key={b.title} className="group relative rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(57,255,20,0.12)" }}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 flex items-center justify-between" style={{ background: "#0A0A0A" }}>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "#39FF14" }}>{b.tag}</div>
                  <div className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{b.title}</div>
                </div>
                <span style={{ color: "#39FF14" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   SOCIAL
   =========================================================== */

function SocialProjects() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Social Media" title="Content engines," highlight="not random posts." subtitle="Reels, grids and creator systems engineered for consistent reach and conversion." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {social.map((s) => (
            <div key={s.title} className="group rounded-3xl overflow-hidden border hover:-translate-y-2 transition-transform duration-500" style={{ background: "#0A0A0A", borderColor: "rgba(57,255,20,0.12)" }}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.9))" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#39FF14" }}>{s.stat}</div>
                </div>
              </div>
              <div className="p-5">
                <div className="font-bold text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</div>
                <div className="text-sm" style={{ color: "#D9D9D9" }}>{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   ECOSYSTEM
   =========================================================== */

function Ecosystem() {
  const groyouItems = ["Strategy", "Marketing", "Automation", "Lead Generation", "Web Development"];
  const digiItems = ["Video Production", "Commercial Shoots", "Photography", "Brand Films", "Post Production"];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(57,255,20,0.05), transparent 60%)" }} />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="Ecosystem"
          title="Production & Growth,"
          highlight="connected."
          subtitle="Two expert teams. One integrated system. Strategy and execution under one roof."
          align="center"
        />

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-12 items-center">
          {/* GroYou side */}
          <div className="rounded-3xl p-8 border" style={{ background: "rgba(57,255,20,0.04)", borderColor: "rgba(57,255,20,0.2)" }}>
            <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#39FF14" }}>GroYou</div>
            <div className="text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Growth Systems</div>
            <div className="space-y-3">
              {groyouItems.map((g) => (
                <div key={g} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#0A0A0A", border: "1px solid rgba(57,255,20,0.08)" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
                  <span style={{ color: "#fff" }}>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection */}
          <div className="flex md:flex-col items-center justify-center gap-4">
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#39FF14", color: "#050505", boxShadow: "0 0 20px rgba(57,255,20,0.5)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: "#39FF14" }} />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="2"><path d="M5 12h14" /></svg>
              <div className="w-3 h-3 rounded-full" style={{ background: "#39FF14" }} />
            </div>
          </div>

          {/* Digi Force side */}
          <div className="rounded-3xl p-8 border" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.15)" }}>
            <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#D9D9D9" }}>Digi Force</div>
            <div className="text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Production</div>
            <div className="space-y-3">
              {digiItems.map((d) => (
                <div key={d} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#fff" }} />
                  <span style={{ color: "#fff" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   CLIENT SUCCESS
   =========================================================== */

function ClientSuccess() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Client Success" title="What clients say" highlight="after launch." align="center" />
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <blockquote key={s.name} className="group p-8 rounded-3xl border hover:-translate-y-2 transition-all duration-500" style={{ background: "#0A0A0A", borderColor: "rgba(57,255,20,0.12)" }}>
              <div className="text-4xl mb-4" style={{ color: "rgba(57,255,20,0.35)", fontFamily: "'Space Grotesk', sans-serif" }}>"</div>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#fff" }}>{s.quote}</p>
              <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: "rgba(57,255,20,0.1)" }}>
                <div>
                  <div className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.name}</div>
                  <div className="text-sm" style={{ color: "#D9D9D9" }}>{s.role}</div>
                </div>
                <div className="text-xs px-3 py-1 rounded-full" style={{ border: "1px solid rgba(57,255,20,0.2)", color: "#39FF14" }}>{s.tag}</div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   FINAL CTA
   =========================================================== */

function WorksCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(57,255,20,0.12), transparent 60%)" }} />
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full float"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              background: i % 2 ? "#39FF14" : "#7CFF5B",
              opacity: 0.25 + Math.random() * 0.4,
              animationDelay: Math.random() * 5 + "s",
            }} />
        ))}
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ border: "1px solid rgba(57,255,20,0.3)", background: "rgba(57,255,20,0.08)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>Let's Build</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Ready to become our next<br /><span className="text-gradient">success story?</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{ color: "#D9D9D9" }}>
          From strategy and websites to cinematic content production and performance marketing —
          we build complete growth systems for ambitious brands.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={brand.form}
            className="group inline-flex items-center gap-2 px-10 py-5 rounded-full font-semibold transition-all hover:scale-105 text-lg"
            style={{ background: "#39FF14", color: "#050505", boxShadow: "0 0 40px rgba(57,255,20,0.6)" }}
          >
            <span>Book Free Consultation</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={brand.whatsapp}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg transition-all hover:scale-105"
            style={{ border: "1px solid rgba(57,255,20,0.4)", color: "#fff" }}
          >
            <svg className="w-5 h-5" fill="#39FF14" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.12 1.03 6.988 2.89a9.82 9.82 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   PAGE
   =========================================================== */

export default function OurWorks() {
  return (
    <div className="min-h-screen" style={{ background: "#050505", color: "#fff" }}>
      <Preloader />
      <CustomCursor />
      <Header />
      <FloatingSocialPanel />
      <main>
        <WorksHero />
        <FeaturedProjects />
        <DigiForcePartnership />
        <VideoShowcase />
        <BeforeAfter />
        <ProductionProcess />
        <WebPortfolio />
        <MarketingPortfolio />
        <BrandingProjects />
        <SocialProjects />
        <Ecosystem />
        <ClientSuccess />
        <WorksCTA />
      </main>
      <Footer />
    </div>
  );
}
