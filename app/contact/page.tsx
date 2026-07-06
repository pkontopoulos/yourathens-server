import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - YourAthens",
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
      {/* Header */}
      <div className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <h1
            className="animate-hero-fadeup font-serif text-5xl md:text-6xl font-bold mb-5 leading-tight"
            style={{ animationDelay: "0.05s" }}
          >
            Contact Us
          </h1>
          <p
            className="animate-hero-fadeup text-lg text-muted-foreground leading-relaxed max-w-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to experience Athens? Get in touch to book your stay or ask
            any questions about our apartments.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: contact details + map + social */}
            <RevealSection className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-7">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: C.terracotta }}
                    />
                    <div>
                      <p className="text-sm font-semibold mb-0.5">Address</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        31 Themistokleous Str
                        <br />
                        Exarcheia, Athens, Greece
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone
                      className="w-5 h-5 shrink-0"
                      style={{ color: C.terracotta }}
                    />
                    <a
                      href="tel:+306973800584"
                      className="text-sm font-medium transition-colors hover:underline"
                      style={{ color: C.dark }}
                    >
                      +30 6973800584
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail
                      className="w-5 h-5 shrink-0"
                      style={{ color: C.terracotta }}
                    />
                    <a
                      href="mailto:info@yourathens.gr"
                      className="text-sm font-medium transition-colors hover:underline"
                      style={{ color: C.dark }}
                    >
                      info@yourathens.gr
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative w-full h-64 rounded-2xl shadow-md overflow-hidden border border-stone-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5147688582584!2d23.7324895!3d37.9849061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd312756b08b%3A0x891f1ac3318d7dd!2sThemistokleous%2031%2C%20Athina%20106%2077%2C%20Greece!5e0!3m2!1sen!2sus!4v1698000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="YourAthens Location"
                  className="absolute inset-0 w-full h-full"
                />
                <div
                  className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md bg-white"
                  style={{ color: C.dark }}
                >
                  <MapPin
                    className="w-3 h-3 shrink-0"
                    style={{ color: C.terracotta }}
                  />
                  YourAthens Apartments
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { href: "https://www.facebook.com/yourathens", label: "Facebook" },
                  { href: "http://instagram.com/your_athens_apartments", label: "Instagram" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:bg-[#B85A35] hover:text-white hover:border-[#B85A35]"
                    style={{ borderColor: C.terracotta, color: C.terracotta }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </RevealSection>

            {/* Right: form */}
            <RevealSection delay={120}>
              <h2 className="font-serif text-2xl font-bold mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
