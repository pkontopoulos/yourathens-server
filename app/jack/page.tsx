import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  MapPin,
  Users,
  Bed,
  Coffee,
  Tv,
  Wind,
  UtensilsCrossed,
  Star,
  ArrowRight,
} from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Jack Apartment - YourAthens",
  description:
    "Modern 1-bedroom apartment for 2 guests in Exarcheia, Athens. Fully renovated 2022, 5th floor with balcony and city views.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

const BOOKING_COM =
  "https://www.booking.com/hotel/gr/cozy-stylish-apartment-in-exarchia-with-balcony-athina.el.html";
const AIRBNB = "https://www.airbnb.com/rooms/986155388923922881";

const amenities = [
  { icon: Bed, label: "Master bedroom with double bed" },
  { icon: Wind, label: "Air conditioning" },
  { icon: Coffee, label: "Espresso machine" },
  { icon: UtensilsCrossed, label: "Fully-equipped kitchen" },
  { icon: Tv, label: '43" TV in living room' },
  { icon: MapPin, label: "Balcony with city view" },
];

const features = [
  {
    title: "Living Spaces",
    items: [
      "Master bedroom with luxurious double-sized bed and air conditioning",
      'Comfort living room with 43" TV and air conditioning',
      "Sizeable shaded balcony with urban city view and seating for 2",
      "Bathroom located next to entrance",
    ],
  },
  {
    title: "Kitchen & Dining",
    items: [
      "Fully-equipped kitchen with modern appliances",
      "Espresso machine for perfect morning coffee",
      "Water boiler and full cooking oven",
      "Cozy dining area with seating for two",
    ],
  },
];

const testimonials = [
  {
    name: "Viktoria, de",
    rating: 10,
    review:
      "Absolutely beautiful, very well organized, very thoughtfully equipped, great location in an alternative neighborhood with lots of graffiti, vegan food and great little bars",
    date: "June 2026",
  },
  {
    name: "Tomáš, cz",
    rating: 10,
    review:
      "Great place, everything is within walking distance of 1-1.5 km, equipped apartment, even salt, pepper, oil.",
    date: "May 2026",
  },
  {
    name: "Saadia, be",
    rating: 10,
    review:
      "It was very beautifully and cozily decorated. Everything you needed was present. We felt right at home immediately.",
    date: "May 2026",
  },
  {
    name: "Finlay, gb",
    rating: 10,
    review: "Perfectly clean. Small but functional. Great storage and amenities",
    date: "May 2026",
  },
  {
    name: "Alexi, gb",
    rating: 10,
    review:
      "Fantastically located - 30 minute walk to the Acropolis, 5 minute walk to Zara and great restaurants and coffee bars just at your door step. The property was so clean and stylish. Genuinely, we were over the moon with our stay.",
    date: "September 2025",
  },
  {
    name: "Rebecca, gb",
    rating: 10,
    review:
      "Really great comfortable apartment. Has all the amenities you would need for a stay. We stayed for 5 nights, check-in and check-out was very easy. Really great location with easy metro access.",
    date: "May 2025",
  },
];

const galleryImages = [
  { src: "/images/jack/1.jpg", alt: "" },
  { src: "/images/jack/2.jpg", alt: "" },
  { src: "/images/jack/3.jpg", alt: "" },
  { src: "/images/jack/4.jpg", alt: "" },
  { src: "/images/jack/5.jpg", alt: "" },
  { src: "/images/jack/6.jpg", alt: "" },
  { src: "/images/jack/7.jpg", alt: "" },
  { src: "/images/jack/8.jpg", alt: "" },
  { src: "/images/jack/9.jpg", alt: "" },
  { src: "/images/jack/10.jpg", alt: "" },
  { src: "/images/jack/11.jpg", alt: "" },
  { src: "/images/jack/12.jpg", alt: "" },
  { src: "/images/jack/13.jpg", alt: "" },
];

export default function JackApartment() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[72dvh] overflow-hidden">
        <img
          src="/images/jack-main.jpg"
          alt="Jack Apartment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,13,5,0.82) 0%, rgba(27,13,5,0.48) 45%, rgba(27,13,5,0.15) 80%, transparent 100%), linear-gradient(to top, rgba(27,13,5,0.55) 0%, transparent 40%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-14 lg:px-20 max-w-3xl">
          <h1
            className="animate-hero-fadeup font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            style={{ color: C.cream, animationDelay: "0.1s" }}
          >
            Jack Apartment
          </h1>
          <p
            className="animate-hero-fadeup text-lg md:text-xl font-light mb-9 max-w-md"
            style={{ color: `${C.cream}CC`, animationDelay: "0.25s" }}
          >
            Modern 1-bedroom in central Athens
          </p>
          <a
            href={BOOKING_COM}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-hero-fadeup inline-flex items-center gap-2 self-start px-6 py-3 rounded-lg text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{
              background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
              color: C.cream,
              animationDelay: "0.4s",
            }}
          >
            Book on Booking.com
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 space-y-5">
                <h2 className="font-serif text-3xl font-bold">Welcome to Jack</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Modern and stylish apartment fully renovated in 2022, in the
                  heart of central Athens on the 5th floor, ready to host 2
                  guests.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Explore the elegant Lycabettus and Kolonaki districts, the
                  colourful Exarcheia street art and the most vibrant
                  neighbourhood in Athens. Fifteen minutes walk from the
                  National Archaeological Museum, 20 minutes from Syntagma, and
                  10 minutes from Panepistimio metro.
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 p-6">
                <h3 className="font-serif text-lg font-semibold mb-5">
                  Book Your Stay
                </h3>
                <div className="space-y-3 mb-6 pb-6 border-b border-stone-100">
                  {[
                    { Icon: Users, text: "2 guests maximum" },
                    { Icon: Bed, text: "1 bedroom" },
                    { Icon: MapPin, text: "5th floor, Exarcheia" },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm">
                      <Icon
                        className="w-4 h-4 shrink-0"
                        style={{ color: C.terracotta }}
                      />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <a
                    href={BOOKING_COM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                    style={{
                      background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
                    }}
                  >
                    Booking.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={AIRBNB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:bg-[#B85A35] hover:text-white hover:border-[#B85A35]"
                    style={{ borderColor: C.terracotta, color: C.terracotta }}
                  >
                    Airbnb <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <RevealSection>
            <h2 className="font-serif text-3xl font-bold mb-8">Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {amenities.map((amenity, i) => (
                <RevealSection key={i} delay={i * 60}>
                  <div className="flex items-center gap-4 py-3.5 border-b border-stone-300/60">
                    <amenity.icon
                      className="w-4 h-4 shrink-0"
                      style={{ color: C.terracotta }}
                    />
                    <span className="text-sm font-medium">{amenity.label}</span>
                  </div>
                </RevealSection>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RevealSection>
            <h2 className="font-serif text-3xl font-bold mb-8">
              Apartment Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map(({ title, items }) => (
                <div key={title} className="space-y-4">
                  <h3
                    className="font-serif text-xl font-semibold pb-3 border-b"
                    style={{ borderColor: `${C.terracotta}25` }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: C.terracotta }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <RevealSection>
            <h2 className="font-serif text-3xl font-bold mb-8">Photo Gallery</h2>
            <Gallery images={galleryImages} />
          </RevealSection>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RevealSection>
            <h2 className="font-serif text-3xl font-bold mb-8">Guest Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <RevealSection key={i} delay={i * 80}>
                  <div className="group relative bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, k) => (
                          <Star
                            key={k}
                            className="w-4 h-4 fill-current"
                            style={{ color: C.gold }}
                          />
                        ))}
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${C.terracotta}15`,
                          color: C.terracotta,
                        }}
                      >
                        {t.rating}/10
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-4 line-clamp-3">
                      &ldquo;{t.review}&rdquo;
                    </p>
                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="font-semibold">{t.name}</span>
                      <span className="text-muted-foreground">{t.date}</span>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl"
                      style={{
                        background: `linear-gradient(90deg, ${C.terracotta}, ${C.gold})`,
                      }}
                    />
                  </div>
                </RevealSection>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img
          src="/images/exarcheia-main.jpg"
          alt="Exarcheia neighborhood"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,13,5,0.88) 0%, rgba(27,13,5,0.58) 55%, rgba(27,13,5,0.3) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <RevealSection className="max-w-xl">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-5"
              style={{ color: C.cream }}
            >
              Questions about Jack?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: `${C.cream}BB` }}
            >
              Contact us for any questions about the apartment or special
              requirements for your stay.
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
