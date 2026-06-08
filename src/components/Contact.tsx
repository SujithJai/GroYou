import { FormEvent, useState } from "react";
import { assets, brand, leadFormOptions } from "../data/siteContent";

type LeadFormData = {
  name: string;
  business: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const initialForm: LeadFormData = {
  name: "",
  business: "",
  phone: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const updateField = (field: keyof LeadFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setStatus("loading");

  try {
    await fetch(brand.leadWebhookUrl, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name: form.name,
        business: form.business,
        phone: form.phone,
        email: form.email,
        service: form.service,
        budget: form.budget,
        message: form.message,
      }),
    });

    setForm(initialForm);
    setStatus("success");
  } catch {
    setStatus("error");
  }
};
  const isSubmitting = status === "loading";

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(57,255,20,0.2)", background: "rgba(57,255,20,0.05)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#39FF14" }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#39FF14" }}>
              Get In Touch
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
          >
            Let's Build
            <br />
            <span className="text-gradient">Something Great.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ContactCard icon="LO" label="Location" lines={brand.location} />
            <ContactCard icon="EM" label="Email" lines={[brand.email]} />
            <ContactCard icon="WA" label="WhatsApp" lines={[brand.phone]} />
            <ContactCard icon="WB" label="Website" lines={[brand.domain]} />

            <div
              className="group relative p-8 rounded-2xl flex items-center justify-center transition-all duration-300"
              style={{ background: "#0A0A0A", border: "1px solid rgba(57,255,20,0.1)" }}
            >
              <img
                src={assets.logo}
                alt={brand.name}
                width={100}
                height={100}
                className="transition-transform duration-500 group-hover:scale-110"
                style={{ objectFit: "contain" }}
              />
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "0 0 40px rgba(57,255,20,0.2)" }}
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl overflow-hidden p-6 md:p-8"
            style={{ background: "#0A0A0A", border: "1px solid rgba(57,255,20,0.15)" }}
          >
            <div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(57,255,20,0.12)" }}
            />

            <div className="relative mb-8">
              <p className="text-xs tracking-[0.28em] uppercase mb-3" style={{ color: "#39FF14" }}>
                Lead Form
              </p>
              <h3 className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>
                Tell us about your growth goal.
              </h3>
            </div>

            <div className="relative grid md:grid-cols-2 gap-4">
              <Field label="Name" value={form.name} onChange={(value) => updateField("name", value)} required />
              <Field label="Business Name" value={form.business} onChange={(value) => updateField("business", value)} required />
              <Field label="Phone Number" type="tel" value={form.phone} onChange={(value) => updateField("phone", value)} required />
              <Field label="Email" type="email" value={form.email} onChange={(value) => updateField("email", value)} required />

              <SelectField
                label="Service Required"
                value={form.service}
                options={leadFormOptions.services}
                onChange={(value) => updateField("service", value)}
                required
              />
              <SelectField
                label="Budget"
                value={form.budget}
                options={leadFormOptions.budgets}
                onChange={(value) => updateField("budget", value)}
                required
              />
            </div>

            <div className="relative mt-4">
              <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "#39FF14" }}>
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                required
                rows={5}
                className="w-full rounded-2xl px-4 py-4 outline-none transition-all resize-none"
                style={{ background: "#050505", border: "1px solid rgba(57,255,20,0.15)", color: "#fff" }}
                placeholder="What do you want GroYou to build or improve?"
              />
            </div>

            <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full px-8 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-60"
                style={{ background: "#39FF14", color: "#050505", boxShadow: "0 0 28px rgba(57,255,20,0.35)" }}
              >
                {isSubmitting ? "Submitting..." : "Submit Lead"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium" style={{ color: "#39FF14" }}>
                  Thank you! Our team will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium" style={{ color: "#D9D9D9" }}>
                  Submission failed. Please try again or message us on WhatsApp.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "#39FF14" }}>
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-2xl px-4 py-4 outline-none transition-all"
        style={{ background: "#050505", border: "1px solid rgba(57,255,20,0.15)", color: "#fff" }}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  required = false,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "#39FF14" }}>
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-2xl px-4 py-4 outline-none transition-all"
        style={{ background: "#050505", border: "1px solid rgba(57,255,20,0.15)", color: "#fff" }}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ContactCard({ icon, label, lines }: { icon: string; label: string; lines: string[] }) {
  return (
    <div
      className="group relative p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#0A0A0A", border: "1px solid rgba(57,255,20,0.1)" }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{ background: "rgba(57,255,20,0.08)", color: "#39FF14" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "#39FF14" }}>
          {label}
        </div>
        {lines.map((line, i) => (
          <div key={i} className="text-white font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {line}
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: "linear-gradient(90deg, #39FF14, transparent)" }}
      />
    </div>
  );
}
