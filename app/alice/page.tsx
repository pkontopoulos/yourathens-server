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
  Armchair,
  Users2,
  Star,
  ArrowRight,
} from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Alice Apartment - YourAthens",
  description:
    "Spacious 2-bedroom apartment for up to 4 guests in Exarcheia, Athens. Fully renovated 2022, 5th floor with large balcony.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

const BOOKING_COM =
  "https://www.booking.com/hotel/gr/modern-stylish-apartment-in-exarchia-with-balcony-athina.el.html";
const AIRBNB = "https://www.airbnb.com/rooms/977490881571697287";

const amenities = [
  { icon: Bed, label: "Master bedroom with queen-sized bed" },
  { icon: Users2, label: "Second bedroom with double bed" },
  { icon: Wind, label: "Air conditioning in all rooms" },
  { icon: Coffee, label: "Espresso machine" },
  { icon: UtensilsCrossed, label: "Fully-equipped kitchen" },
  { icon: Tv, label: '55" TV in living room' },
  { icon: Armchair, label: "Spacious living room with resting armchair" },
  { icon: MapPin, label: "Large balcony with seating for 4" },
];

const features = [
  {
    title: "Bedrooms & Living",
    items: [
      "Master bedroom with queen-sized bed, air conditioning, and makeup desk",
      "Second bedroom with double bed, air conditioning, and working desk",
      '55" TV and resting armchair in the spacious living room',
      "Large shaded balcony with seating for 4",
    ],
  },
  {
    title: "Kitchen & Amenities",
    items: [
      "Fully-equipped kitchen with modern appliances",
      "Espresso machine and full cooking oven",
      "Welcoming dining area with seating for four",
      "Bathroom located next to entrance",
    ],
  },
];

const testimonials = [
  {
    name: "Margalit, be",
    rating: 10,
    review:
      "The host was most accommodating, the flat is perfect, close enough to the metro and a walking distance from the center, yet quiet with good restaurants and cafes close by. Highly recommended",
    date: "June 2026",
  },
  {
    name: "Gidi, il",
    rating: 10,
    review:
      "Beautiful, new and well decorated apartment, in the best neighborhood in Athens. The staff was extremely helpful and friendly. We'll come again!",
    date: "May 2026",
  },
  {
    name: "Jamilya, mt",
    rating: 10,
    review:
      "We had a wonderful stay at this apartment in Athens. Exceptionally clean, very spacious, and beautifully modern with stylish furnishings. The owner was incredibly responsive and helpful. Their hospitality truly made the experience even better.",
    date: "May 2026",
  },
  {
    name: "Peter19552, au",
    rating: 10,
    review:
      "We loved the spacious apartment and terrace with awning for eating al fresco. The location in Exarchia was safe with lots of cafes and restaurants all around. Easy walking to the Archaeological Museum and the metro.",
    date: "June 2025",
  },
  {
    name: "Uri, il",
    rating: 10,
    review:
      "Wonderful apartment, great location in the heart of Exarchia, close to the metro. Very new, beautifully decorated, clean and very spacious. Panos is a wonderful host, communication was very fast and courteous.",
    date: "May 2025",
  },
  {
    name: "Julianne, fr",
    rating: 10,
    review:
      "A few steps from the metro, convenient for sightseeing and the airport. Super comfortable apartment, very well equipped, excellent bedding and bath linens. Very pleasant terrace for having breakfast.",
    date: "June 2023",
  },
];

const galleryImages = [
  { src: "/images/alice/1.jpg", alt: "" },
  { src: "/images/alice/4.jpg", alt: "" },
  { src: "/images/alice/5.jpg", alt: "" },
  { src: "/images/alice/2.jpg", alt: "" },
  { src: "/images/alice/9.jpg", alt: "" },
  { src: "/images/alice/6.jpg", alt: "" },
  { src: "/images/alice/7.jpg", alt: "" },
  { src: "/images/alice/8.jpg", alt: "" },
  { src: "/images/alice/3.jpg", alt: "" },
  { src: "/images/alice/10.jpg", alt: "" },
  { src: "/images/alice/11.jpg", alt: "" },
  { src: "/images/alice/12.jpg", alt: "" },
  { src: "/images/alice/13.jpg", alt: "" },
  { src: "/images/alice/14.jpg", alt: "" },
  { src: "/images/alice/15.jpg", alt: "" },
];

export default function AliceApartment() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[72dvh] overflow-hidden">
        <img
          src="/images/alice-main.jpg"
          alt="Alice Apartment"
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
            Alice Apartment
          </h1>
          <p
            className="animate-hero-fadeup text-lg md:text-xl font-light mb-9 max-w-md"
            style={{ color: `${C.cream}CC`, animationDelay: "0.25s" }}
          >
            Spacious 2-bedroom for up to 4 guests
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
                <h2 className="font-serif text-3xl font-bold">Welcome to Alice</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Modern and stylish apartment fully renovated in 2022, in the
                  heart of central Athens on the 5th floor, ready to host up to
                  4 guests across 2 bedrooms.
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
                    { Icon: Users, text: "Up to 4 guests" },
                    { Icon: Bed, text: "2 bedrooms" },
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
              Questions about Alice?
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
