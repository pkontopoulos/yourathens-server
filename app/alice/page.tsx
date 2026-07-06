import type { Metadata } from "next";
import { ExternalLink, MapPin, Users, Bed, Coffee, Tv, Wind, UtensilsCrossed, Armchair, Users2, Star } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Alice Apartment – YourAthens",
  description:
    "Spacious 2-bedroom apartment for up to 4 guests in Exarcheia, Athens. Fully renovated 2022, 5th floor with large balcony.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

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

const testimonials = [
  { name: "Margalit, be", rating: 10, review: "The host was most accomodating, the flat is perfect, close enough to the metro and a walking distance from the center, yet quiet and good restaurants and cafes close by. Highly recommended", date: "June 2026" },
  { name: "Gidi, il", rating: 10, review: "Beautiful, new and well decorated apartment, in the best neighborhood in Athens. The staff was extremely helpful and friendly. We'll come again!", date: "May 2026" },
  { name: "Jamilya, mt", rating: 10, review: "We had a wonderful stay at this apartment in Athens. The apartment was exceptionally clean, very spacious, and beautifully modern with stylish furnishings and all the amenities needed for a comfortable stay. Everything was thoughtfully arranged, making it feel welcoming and relaxing from the moment we arrived. The owner was incredibly responsive, friendly, and helpful throughout our stay, always quick to answer questions and provide assistance whenever needed. Their hospitality and attention to detail truly made the experience even better. The location was also very convenient, making it easy to explore Athens and enjoy the surrounding area. We would definitely stay here again and highly recommend this apartment to anyone visiting the city.", date: "May 2026" },
  { name: "Peter19552, au", rating: 10, review: "We loved the spacious apartment and terrace with awning for eating 'al fresco'. There were fly screens to keep out mosquitoes and rollover shutters to keep out afternoon heat. Also the location while in Exarchia with it graffiti was safe and lots of cafes and restaurants all around. It was easy walking to Archialogical Museum and the metro etc.", date: "June 2025" },
  { name: "אורי, il", rating: 10, review: "Wonderful apartment, great location in the heart of Exarchia, close to the metro. The apartment is very new, beautifully decorated, clean and very spacious. Panos is a wonderful host, communication with him was very fast and courteous. One of the most wonderful apartments I have ever stayed in, without a doubt. I recommend it wholeheartedly!", date: "May 2025" },
  { name: "Julianne, fr", rating: 10, review: "The location of the apartment, in a less touristy but very lively area. A few steps from the metro, convenient for sightseeing, coming from the airport, going to Piraeus. Super comfortable apartment, very well equipped, excellent bedding and bath linens. Very pleasant terrace for having breakfast. Very convenient for picking up and leaving keys. Thanks to our hosts who allowed us to check in early.", date: "June 2023" },
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
      <style>{`
        @keyframes alice-fadeup { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .alice-hero-title { animation: alice-fadeup 0.7s ease 0.1s both; }
        .alice-hero-sub   { animation: alice-fadeup 0.7s ease 0.27s both; }
        .alice-hero-stats { animation: alice-fadeup 0.7s ease 0.44s both; }
      `}</style>

      {/* Hero */}
      <section className="relative h-[65vh] overflow-hidden">
        <img src="/images/alice-main.jpg" alt="Alice Apartment" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(27,13,5,0.55) 0%, rgba(27,13,5,0.08) 45%, rgba(27,13,5,0.72) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
          <h1 className="alice-hero-title font-serif text-5xl md:text-7xl font-bold mb-3 leading-tight" style={{ color: C.cream }}>Alice Apartment</h1>
          <p className="alice-hero-sub text-lg md:text-xl mb-8" style={{ color: `${C.cream}CC` }}>Spacious 2-bedroom for up to 4 guests</p>
          <div className="alice-hero-stats flex flex-wrap justify-center gap-3">
            {[{ label: "4 guests", sub: "max" }, { label: "2 bedrooms", sub: "queen & double" }, { label: "5th floor", sub: "Exarcheia" }].map(({ label, sub }) => (
              <div key={label} className="px-5 py-2.5 rounded-full text-center backdrop-blur-sm" style={{ background: "rgba(251,246,238,0.12)", border: "1px solid rgba(251,246,238,0.25)", color: C.cream }}>
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block text-xs uppercase tracking-widest" style={{ opacity: 0.7 }}>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-14 space-y-16">

        {/* Overview */}
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-5">
              <h2 className="font-serif text-3xl font-bold">Welcome to Alice</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Alice, a modern and stylish apartment fully renovated in 2022, in the heart of central Athens,
                nestled on the 5th floor of a peaceful building, ready to host 4 guests in 2 bedrooms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Explore the elegant Lycabettus and Kolonaki districts, the colorful Exarchia famous street art and the most
                vibrant neighbourhood of Athens. The apartment is 15 min walk from Archaeological Museum of Athens, 20 min
                walk from Syntagma and 10 min walk from Panepistimio metro stations.
              </p>
            </div>

            {/* Booking card */}
            <div className="rounded-2xl overflow-hidden shadow-md border" style={{ borderColor: "rgba(184,90,53,0.18)" }}>
              <div className="px-6 py-4" style={{ background: `linear-gradient(130deg, ${C.dark} 0%, #3A1A08 100%)` }}>
                <h3 className="font-serif text-xl font-semibold" style={{ color: C.cream }}>Quick Info</h3>
              </div>
              <div className="p-6 bg-white space-y-3">
                {[{ Icon: Users, text: "Up to 4 guests" }, { Icon: Bed, text: "2 bedrooms" }, { Icon: MapPin, text: "5th floor, Exarcheia" }].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-base">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: C.terracotta }} />
                    <span>{text}</span>
                  </div>
                ))}
                <div className="pt-4 mt-2 border-t space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Book Now</p>
                  <a href="https://www.booking.com/hotel/gr/modern-stylish-apartment-in-exarchia-with-balcony-athina.el.html" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                    style={{ background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)` }}>
                    Booking.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://www.airbnb.com/rooms/977490881571697287" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:opacity-85"
                    style={{ border: `1.5px solid ${C.terracotta}`, color: C.terracotta }}>
                    Airbnb <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Amenities */}
        <RevealSection>
          <h2 className="font-serif text-3xl font-bold mb-8">Thoughtfully Curated Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((amenity, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${C.terracotta}18` }}>
                    <amenity.icon className="w-5 h-5" style={{ color: C.terracotta }} />
                  </div>
                  <span className="text-base font-medium">{amenity.label}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </RevealSection>

        {/* Apartment Features */}
        <RevealSection>
          <h2 className="font-serif text-3xl font-bold mb-8">Apartment Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Bedrooms & Living", items: ["Master bedroom with queen-sized bed, air conditioning, and makeup desk", "Second bedroom with double bed, air conditioning, and working desk", 'Spacious living room with 55" TV and resting armchair', "Large shaded balcony with seating for 4"] },
              { title: "Kitchen & Amenities", items: ["Fully-equipped kitchen with modern appliances", "Espresso machine and full cooking oven", "Welcoming dining area with seating for four", "Bathroom located next to entrance"] },
            ].map(({ title, items }) => (
              <div key={title} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold pb-3 border-b" style={{ borderColor: `${C.terracotta}25` }}>{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: C.terracotta }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Photo Gallery */}
        <RevealSection>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.terracotta }}>Browse the Space</p>
            <h2 className="font-serif text-3xl font-bold">Photo Gallery</h2>
          </div>
          <Gallery images={galleryImages} />
        </RevealSection>

        {/* Testimonials */}
        <RevealSection>
          <h2 className="font-serif text-3xl font-bold mb-8">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="group relative bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" style={{ color: C.gold }} />)}
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${C.terracotta}15`, color: C.terracotta }}>{t.rating}/10</span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed italic flex-1 mb-4">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold">— {t.name}</span>
                    <span className="text-muted-foreground">{t.date}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl" style={{ background: `linear-gradient(90deg, ${C.terracotta}, ${C.gold})` }} />
                </div>
              </RevealSection>
            ))}
          </div>
        </RevealSection>

        {/* CTA */}
        <RevealSection>
          <div className="rounded-2xl text-center py-14 px-6 overflow-hidden relative" style={{ background: `linear-gradient(145deg, ${C.dark} 0%, #3A1A08 50%, ${C.terracotta} 100%)` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3" style={{ color: C.cream }}>Questions About Your Stay?</h3>
              <p className="max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed" style={{ color: `${C.cream}BB` }}>
                Contact us directly for any questions about Alice apartment or special requirements for your stay.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-85" style={{ background: C.cream, color: C.dark }}>
                Contact Us
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </div>
  );
}
