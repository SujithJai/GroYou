const nodes = [
  { label: "WhatsApp Automation", x: 50, y: 20 },
  { label: "CRM", x: 20, y: 50 },
  { label: "Lead Tracking", x: 80, y: 50 },
  { label: "AI Chatbot", x: 50, y: 50 },
  { label: "Email Automation", x: 20, y: 80 },
  { label: "Appointment Booking", x: 80, y: 80 },
];

export default function AISystems() {
  return (
    <section id="ai-systems" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              AI Systems
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Connected.
            <br />
            <span className="text-gradient">Automated. Alive.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#D9D9D9" }}>
            Every system talks to every other system.
            Data flows. Decisions happen. Revenue grows.
          </p>
        </div>

        {/* Network visualization */}
        <div
          className="relative mx-auto rounded-3xl p-12 overflow-hidden"
          style={{
            background: "#0A0A0A",
            border: "1px solid rgba(57,255,20,0.15)",
            aspectRatio: "16/10",
            maxWidth: "900px",
          }}
        >
          {/* Connection lines SVG */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {nodes.map((n, i) =>
              nodes.slice(i + 1).map((m, j) => (
                <line
                  key={i + "-" + j}
                  x1={n.x}
                  y1={n.y}
                  x2={m.x}
                  y2={m.y}
                  stroke="rgba(57,255,20,0.2)"
                  strokeWidth="0.2"
                  strokeDasharray="0.5 0.5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </line>
              ))
            )}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.label}
              className="absolute group"
              style={{
                left: node.x + "%",
                top: node.y + "%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="relative px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{
                  background: "#050505",
                  border: "1px solid rgba(57,255,20,0.3)",
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: "0 0 25px rgba(57,255,20,0.5)" }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
                  {node.label}
                </span>
              </div>
            </div>
          ))}

          {/* Center core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, rgba(57,255,20,0.3), transparent 70%)",
                border: "1px solid rgba(57,255,20,0.4)",
              }}
            >
              <span className="text-xs font-bold tracking-widest" style={{ color: "#39FF14" }}>CORE</span>
            </div>
          </div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full float"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                background: "#39FF14",
                opacity: 0.4,
                animationDelay: i * 0.2 + "s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
