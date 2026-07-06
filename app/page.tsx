import type { Metadata } from "next";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { RevealSection } from "@/components/RevealSection";
import { MapPin, Users, Bed, ExternalLink, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "YourAthens – Apartments in Exarcheia, Athens",
  description:
    "Experience authentic Athens from two fully renovated apartments in Exarcheia. Book directly or via Booking.com and Airbnb.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

const apartments = [
  {
    name: "Jack Apartment",
    image: "/images/jack-main.jpg",
    href: "/jack",
    guests: "2 guests",
    bedrooms: "1 bedroom",
    floor: "5th floor",
    description:
      "Modern and stylish apartment fully renovated in 2022, perfect for 2 guests. Features a master bedroom, fully-equipped kitchen, and a shaded balcony with urban city views.",
    bookingHref:
      "https://www.booking.com/hotel/gr/cozy-stylish-apartment-in-exarchia-with-balcony-athina.el.html",
    airbnbHref: "https://www.airbnb.com/rooms/986155388923922881",
  },
  {
    name: "Alice Apartment",
    image: "/images/alice-main.jpg",
    href: "/alice",
    guests: "4 guests",
    bedrooms: "2 bedrooms",
    floor: "5th floor",
    description:
      "Spacious apartment fully renovated in 2022, ideal for up to 4 guests. Features two bedrooms, a large living-room, a fully-equipped kitchen, and a large balcony with urban views.",
    bookingHref:
      "https://www.booking.com/hotel/gr/modern-stylish-apartment-in-exarchia-with-balcony-athina.el.html",
    airbnbHref: "https://www.airbnb.com/rooms/977490881571697287",
  },
];

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />

      {/* Welcome strip */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RevealSection className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-5">
              Stay where Athens actually lives
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Exarcheia is the city at its most unfiltered — street art, independent bookshops,
              legendary tavernas, and a creative energy that no guidebook can capture.
              Our two fully renovated apartments put you five floors above it all,
              minutes from everything, immersed in the real Athens.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Star, label: "Renovated 2022" },
                { icon: MapPin, label: "Exarcheia District" },
                { icon: Bed, label: "5th Floor Views" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                  style={{
                    background: `${C.terracotta}12`,
                    color: C.terracotta,
                    border: `1px solid ${C.terracotta}25`,
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Apartments */}
      <section className="py-16" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <RevealSection className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Apartments</h2>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {apartments.map((apt, i) => (
              <RevealSection key={apt.name} delay={i * 120}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={apt.image}
                      alt={apt.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(27,13,5,0.45) 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {[
                        { Icon: Users, label: apt.guests },
                        { Icon: Bed, label: apt.bedrooms },
                        { Icon: MapPin, label: apt.floor },
                      ].map(({ Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                          style={{
                            background: "rgba(251,246,238,0.18)",
                            border: "1px solid rgba(251,246,238,0.3)",
                            color: C.cream,
                          }}
                        >
                          <Icon className="w-3 h-3" />
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl font-bold mb-3">{apt.name}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                      {apt.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={apt.href}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                        style={{
                          background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
                        }}
                      >
                        View Apartment
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="flex gap-2">
                        {[
                          { label: "Booking.com", href: apt.bookingHref },
                          { label: "Airbnb", href: apt.airbnbHref },
                        ].map(({ label, href }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all duration-200 hover:text-white hover:bg-gradient-to-r hover:from-[#B85A35] hover:to-[#C9973E] hover:border-transparent"
                            style={{ borderColor: `${C.terracotta}50`, color: C.terracotta }}
                          >
                            {label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{
                      background: `linear-gradient(90deg, ${C.terracotta}, ${C.gold})`,
                    }}
                  />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Perfect Location in Athens
              </h2>
              <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: C.terracotta }}>
                31 Themistokleous Str, Exarcheia
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Located in the vibrant Exarcheia district, our apartments offer easy access to
                Athens' most iconic attractions and authentic neighbourhoods.
              </p>
              <ul className="space-y-3">
                {[
                  "15 min walk from Archaeological Museum of Athens",
                  "20 min walk from Syntagma Square",
                  "10 min walk from Panepistimio metro station",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: C.terracotta }} />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealSection>

            <RevealSection delay={120}>
              <div className="relative w-full h-80 rounded-2xl shadow-xl overflow-hidden border border-stone-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5147688582584!2d23.7324895!3d37.9849061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd312756b08b%3A0x891f1ac3318d7dd!2sThemistokleous%2031%2C%20Athina%20106%2077%2C%20Greece!5e0!3m2!1sen!2sus!4v1698000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="YourAthens Apartments Location"
                  className="absolute inset-0 w-full h-full"
                />
                <div
                  className="absolute top-3 left-3 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold shadow-md backdrop-blur-sm"
                  style={{ background: "white", color: C.dark }}
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: C.terracotta }} />
                  YourAthens Apartments
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RevealSection>
            <div
              className="rounded-2xl text-center py-16 px-6 relative overflow-hidden"
              style={{
                background: `linear-gradient(145deg, ${C.dark} 0%, #3A1A08 50%, ${C.terracotta} 100%)`,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5" style={{ color: C.cream }}>
                  Ready to Experience Athens?
                </h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: `${C.cream}BB` }}>
                  Contact us today to book your stay in one of our beautiful apartments and discover
                  the authentic heart of Athens.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-85"
                  style={{ background: C.cream, color: C.dark }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
