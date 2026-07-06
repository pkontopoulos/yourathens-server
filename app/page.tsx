import type { Metadata } from "next";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { RevealSection } from "@/components/RevealSection";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "YourAthens - Apartments in Exarcheia, Athens",
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

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <RevealSection className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: C.terracotta }}
            >
              Exarcheia, Athens
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
              Stay where Athens actually lives.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              Exarcheia is the city at its most unfiltered: street art,
              independent bookshops, legendary tavernas, and a creative energy
              no guidebook can capture. Our two fully renovated apartments put
              you five floors above it all.
            </p>
          </RevealSection>

          <RevealSection
            delay={160}
            className="mt-14 pt-10 border-t border-stone-100 grid grid-cols-3 gap-6"
          >
            {[
              { value: "2022", label: "Fully renovated" },
              { value: "5th", label: "Floor with city views" },
              { value: "2", label: "Apartments to choose from" },
            ].map(({ value, label }, i) => (
              <div
                key={value}
                className={`${i > 0 ? "pl-6 border-l border-stone-200" : ""}`}
              >
                <p
                  className="font-serif text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: C.dark }}
                >
                  {value}
                </p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Apartments */}
      <section className="border-t border-stone-100">
        {apartments.map((apt, i) => (
          <RevealSection key={apt.name}>
            <div
              className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} border-b border-stone-100`}
            >
              {/* Image */}
              <div className="w-full lg:w-[55%] h-72 sm:h-96 lg:min-h-[65vh] overflow-hidden">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div
                className="w-full lg:w-[45%] flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-20"
                style={{ background: i % 2 === 0 ? "white" : C.cream }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {apt.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                  {apt.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 flex-wrap mb-8 pb-8 border-b border-stone-200 text-sm font-medium">
                  {[apt.guests, apt.bedrooms, apt.floor].map((label, idx) => (
                    <span
                      key={label}
                      className={idx > 0 ? "pl-4 border-l border-stone-300" : ""}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={apt.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                    style={{
                      background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
                    }}
                  >
                    View Apartment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {[
                    { label: "Booking.com", href: apt.bookingHref },
                    { label: "Airbnb", href: apt.airbnbHref },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-xs font-semibold border transition-all duration-200 hover:text-white hover:bg-[#B85A35] hover:border-[#B85A35]"
                      style={{
                        borderColor: `${C.terracotta}50`,
                        color: C.terracotta,
                      }}
                    >
                      {label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        ))}
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Find Us in Exarcheia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Located at 31 Themistokleous Str, our apartments offer easy
                access to Athens&apos; most iconic attractions and authentic
                neighbourhoods.
              </p>
              <ul className="space-y-4">
                {[
                  "15 min walk from the National Archaeological Museum",
                  "20 min walk from Syntagma Square",
                  "10 min walk from Panepistimio metro station",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <MapPin
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: C.terracotta }}
                    />
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
                  className="absolute top-3 left-3 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold shadow-md bg-white"
                  style={{ color: C.dark }}
                >
                  <MapPin
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: C.terracotta }}
                  />
                  YourAthens Apartments
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <img
          src="/images/athens-plaka.jpg"
          alt="Athens cityscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,13,5,0.88) 0%, rgba(27,13,5,0.58) 55%, rgba(27,13,5,0.3) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24">
          <RevealSection className="max-w-xl">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-5"
              style={{ color: C.cream }}
            >
              Ready to experience Athens?
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-sm"
              style={{ color: `${C.cream}BB` }}
            >
              Contact us to book your stay and discover the authentic heart of
              Athens.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-85"
              style={{ background: C.cream, color: C.dark }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
