import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – YourAthens",
  description:
    "Get in touch with YourAthens to book your stay or ask any questions about our apartments in Exarcheia, Athens.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

export default function Contact() {
  return (
    <div>
      <style>{`
        @keyframes contact-fadeup { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .contact-hero-eyebrow { animation: contact-fadeup 0.6s ease 0.05s both; }
        .contact-hero-title   { animation: contact-fadeup 0.7s ease 0.18s both; }
        .contact-hero-sub     { animation: contact-fadeup 0.7s ease 0.32s both; }
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden pt-14" style={{ background: `linear-gradient(145deg, ${C.dark} 0%, #3A1A08 50%, ${C.terracotta} 100%)`, paddingBottom: "5.5rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`, backgroundSize: "22px 22px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="contact-hero-eyebrow inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold" style={{ background: "rgba(251,246,238,0.12)", border: "1px solid rgba(251,246,238,0.22)", color: C.cream }}>
            <MessageSquare className="w-3.5 h-3.5" />
            We&apos;d love to hear from you
          </div>
          <h1 className="contact-hero-title font-serif text-5xl md:text-6xl font-bold mb-5 leading-tight" style={{ color: C.cream }}>Contact Us</h1>
          <p className="contact-hero-sub text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: `${C.cream}CC` }}>
            Ready to experience Athens? Get in touch to book your stay or ask any questions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display: "block", height: "64px", width: "100%" }}>
            <path d="M0,64 C280,10 560,54 720,32 C880,10 1160,56 1440,28 L1440,64 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: contact info */}
          <RevealSection>
            <h2 className="font-serif text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-4">
              {[
                { Icon: MapPin, label: "Address", content: <p className="text-sm text-muted-foreground leading-relaxed">31 Themistokleous Str<br />Exarcheia, Athens, Greece</p> },
                { Icon: Phone, label: "Phone", content: <a href="tel:+306973800584" className="text-sm hover:underline transition-colors" style={{ color: C.terracotta }}>+30 6973800584</a> },
                { Icon: Mail, label: "Email", content: <a href="mailto:info@yourathens.gr" className="text-sm hover:underline transition-colors" style={{ color: C.terracotta }}>info@yourathens.gr</a> },
              ].map(({ Icon, label, content }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${C.terracotta}18` }}>
                    <Icon className="w-5 h-5" style={{ color: C.terracotta }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { href: "https://www.facebook.com/yourathens", label: "Facebook" },
                  { href: "http://instagram.com/your_athens_apartments", label: "Instagram" },
                ].map(({ href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:opacity-85"
                    style={{ borderColor: C.terracotta, color: C.terracotta }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Right: form (client component) */}
          <RevealSection delay={120}>
            <h2 className="font-serif text-2xl font-bold mb-8">Send us a Message</h2>
            <ContactForm />
          </RevealSection>
        </div>

        {/* Why Choose section */}
        <RevealSection className="mt-16">
          <div className="rounded-2xl relative overflow-hidden py-12 px-8" style={{ background: `linear-gradient(145deg, ${C.dark} 0%, #3A1A08 60%, ${C.terracotta} 100%)` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: C.cream }}>Why Choose YourAthens?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { Icon: MapPin, title: "Perfect Location", desc: "In the heart of Exarcheia, walking distance to major attractions" },
                  { Icon: Mail, title: "24/7 Support", desc: "We're always here to help with your stay" },
                  { Icon: Phone, title: "Modern Comfort", desc: "Fully renovated apartments with all amenities" },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(251,246,238,0.12)" }}>
                      <Icon className="w-7 h-7" style={{ color: C.gold }} />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm" style={{ color: C.cream }}>{title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: `${C.cream}99` }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </div>
  );
}
