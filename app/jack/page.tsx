import type { Metadata } from "next";
import { ExternalLink, MapPin, Users, Bed, Coffee, Tv, Wind, UtensilsCrossed, Star } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Jack Apartment – YourAthens",
  description:
    "Modern 1-bedroom apartment for 2 guests in Exarcheia, Athens. Fully renovated 2022, 5th floor with balcony and city views.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

const amenities = [
  { icon: Bed, label: "Master bedroom with double bed" },
  { icon: Wind, label: "Air conditioning" },
  { icon: Coffee, label: "Espresso machine" },
  { icon: UtensilsCrossed, label: "Fully-equipped kitchen" },
  { icon: Tv, label: '43" TV in living room' },
  { icon: MapPin, label: "Balcony with city view" },
];

const testimonials = [
  { name: "Viktoria, de", rating: 10, review: "Absolutely beautiful, very well organized, very thoughtfully equipped, great location in an alternative neighborhood with lots of graffiti, vegan food and great little bars", date: "June 2026" },
  { name: "Tomáš, cz", rating: 10, review: "Great place, everything is within walking distance of 1-1.5 km, equipped apartment, even salt, pepper, oil.", date: "May 2026" },
  { name: "Saadia, be", rating: 10, review: "It was very beautifully and cozily decorated. Everything you needed was present. We felt right at home immediately.", date: "May 2026" },
  { name: "Finlay, gb", rating: 10, review: "Perfectly clean. Small but functional. Great storage and amenities", date: "May 2026" },
  { name: "Alexi, gb", rating: 10, review: "Fantastically located - 30 minute walk to the Acropolis, 5 minute walk to Zara and great restaurants and coffee bars just at your door step. The property was so clean and stylish. The bed was good quality and very comfortable. The towels were also very nice, and there is a smart tv and a large balcony which was lovely to have a coffee on (there is a Nespresso machine). Albeit it's small but it has everything you need. We really enjoyed our time here and missed it when we left. The hosts are also very responsive via the booking.com app. Genuinely, we were over the moon with our stay.", date: "September 2025" },
  { name: "Rebecca, gb", rating: 10, review: "Really great comfortable apartment. Has all the amenities you would need for a stay. We stayed for 5 nights, check-in and check-out was very easy. Really great location with easy metro access.", date: "May 2025" },
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
      <style>{`
        @keyframes jack-fadeup { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .jack-hero-title { animation: jack-fadeup 0.7s ease 0.1s both; }
        .jack-hero-sub   { animation: jack-fadeup 0.7s ease 0.27s both; }
        .jack-hero-stats { animation: jack-fadeup 0.7s ease 0.44s both; }
      `}</style>

      {/* Hero */}
      <section className="relative h-[65vh] overflow-hidden">
        <img src="/images/jack-main.jpg" alt="Jack Apartment" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(27,13,5,0.55) 0%, rgba(27,13,5,0.08) 45%, rgba(27,13,5,0.72) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
          <h1 className="jack-hero-title font-serif text-5xl md:text-7xl font-bold mb-3 leading-tight" style={{ color: C.cream }}>Jack Apartment</h1>
          <p className="jack-hero-sub text-lg md:text-xl mb-8" style={{ color: `${C.cream}CC` }}>Modern 1-bedroom in central Athens</p>
          <div className="jack-hero-stats flex flex-wrap justify-center gap-3">
            {[{ label: "2 guests", sub: "max" }, { label: "1 bedroom", sub: "double bed" }, { label: "5th floor", sub: "Exarcheia" }].map(({ label, sub }) => (
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
              <h2 className="font-serif text-3xl font-bold">Welcome to Jack</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Jack, a modern and stylish apartment fully renovated in 2022, in the heart of central Athens,
                nestled on the 5th floor of a peaceful building, ready to host 2 guests in 1 bedroom.
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
                {[{ Icon: Users, text: "2 guests maximum" }, { Icon: Bed, text: "1 bedroom" }, { Icon: MapPin, text: "5th floor, Exarcheia" }].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-base">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: C.terracotta }} />
                    <span>{text}</span>
                  </div>
                ))}
                <div className="pt-4 mt-2 border-t space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Book Now</p>
                  <a href="https://www.booking.com/hotel/gr/cozy-stylish-apartment-in-exarchia-with-balcony-athina.el.html" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                    style={{ background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)` }}>
                    Booking.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://www.airbnb.com/rooms/986155388923922881" target="_blank" rel="noopener noreferrer"
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
              { title: "Living Spaces", items: ["Master bedroom with luxurious double-sized bed and air conditioning", 'Comfort living room with 43" TV and air conditioning', "Sizeable shaded balcony with urban city view and seating for 2", "Bathroom located next to entrance"] },
              { title: "Kitchen & Dining", items: ["Fully-equipped kitchen with modern appliances", "Espresso machine for perfect morning coffee", "Water boiler and full cooking oven", "Cozy dining area with seating for two"] },
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
          <h2 className="font-serif text-3xl font-bold mb-8">Photo Gallery</h2>
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
                Contact us directly for any questions about Jack apartment or special requirements for your stay.
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
