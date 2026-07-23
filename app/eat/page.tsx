import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Eat in Exarcheia – YourAthens",
  description:
    "Discover the best restaurants, tavernas, and food spots in Exarcheia, Athens. Curated picks within walking distance of our apartments.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

const restaurants = [
  {
    name: "Giantes Restaurant",
    description:
      "A celebrated Athens restaurant known for its organic cuisine and unique architecture. The high-quality food features organic ingredients, and the well-stocked cellar offers a variety of organic wines. Dine in the beautiful garden, enjoying standout dishes like Byzantine chicken and pork with honey, raisins, and coriander, or pan-fried manouri cheese with sesame and honey sauce.",
    image: "/images/giantes.jpg",
    mapLink: "https://maps.app.goo.gl/rjhqcmHV7BvswqRt9",
  },
  {
    name: "Rosalia Tavern",
    description:
      "A unique restaurant-tavern in Exarchia that has been a garden oasis at the heart of the community for 35 years. The owner, Achilleas, prioritizes creating satisfied friends over customers. The food is made from fresh, high-quality ingredients and blends with new culinary explorations.",
    image: "/images/rozalia.jpg",
    mapLink: "https://maps.app.goo.gl/vpgZBwNue1MtTB5n9",
  },
  {
    name: "Pharaoh Restaurant",
    description:
      "The space is warm and casual with an open kitchen, a few tables and a large bar that serves solo diners and sets of two. Front of house, chefs, sommeliers and music curators work together to create an experience that sits somewhere between restaurant and wine bar. Walls are stacked with vinyl and firewood.",
    image: "/images/pharao.jpg",
    mapLink: "https://maps.app.goo.gl/rFAbsvNFzCv9F3sQ6",
  },
  {
    name: "Gamay Wine Bar",
    description:
      "A casual wine bar in Exarchia housed in a 1928 modernist building, featuring 135 labels with a focus on natural wines. The bar has no traditional tables, just a central green marble bar. Popular dishes include pinsa with mortadella and pistachio, plus house-made labneh cheese.",
    image: "/images/gamay.jpg",
    mapLink: "https://maps.app.goo.gl/8yXuzMkjnkfuRg6E7",
  },
  {
    name: "Stepa Bar-Restaurant",
    description:
      "A cozy bar-restaurant in Exarchia offering a relaxed atmosphere with cocktails, brunch options including lamb and cheese pies, and spetsofai pie. The venue features DJs playing interesting music even on weeknights, a bright calm ambiance, and quality cuisine at prices around 15-20 per person.",
    image: "/images/stepa.jpg",
    mapLink: "https://maps.app.goo.gl/XN32b5dXgS41mZE5A",
  },
  {
    name: "The Black Salami MicroBakery",
    description:
      "After three years of experimenting with flours and techniques, this microbakery developed a unique naturally leavened dough that is flavourful, easily digestible, and free from raising agents. Their flour comes from the Bongiovanni family mill in Italy, while the oil is sourced from Mani, Greece.",
    image: "/images/blacksalami.jpg",
    mapLink: "https://maps.app.goo.gl/G84VGS7w9h8GH93Z8",
  },
  {
    name: "Prigkipas Souvlaki",
    description:
      "Experience a royal street food journey with ingredients from all over Greece. Indulge in dishes like Black Pig in a Straw, juicy Buffalo Burgers, Florina Kebap, Smoked Trout Fillet, and Eel wrapped in Corn Pie. All meat is sourced from small-scale Greek farmers.",
    image: "/images/prigkipas.jpg",
    mapLink: "https://maps.app.goo.gl/LoRPcCS28Nxmxy3s6",
  },
  {
    name: "Talking Breads Burgers",
    description:
      "Delicious burgers and sandwiches for meat-eaters, vegetarians and vegans. The superfood salad is a must. The pizza rolls are outstanding and the brioche buns are perfect. Everything is super affordable, making Talking Breads a gem in Exarchia. Open from 5pm, closed Sundays.",
    image: "/images/talkingbreads.jpg",
    mapLink: "https://maps.app.goo.gl/jwYmyf4g3gnseSe17",
  },
  {
    name: "Valtezziana 2.0 Pizza",
    description:
      "A pizzeria in Exarchia featuring 13 unique pizzas made with signature dough from three sourdough starters, fermented 48-72 hours for a light, airy texture. Authentic Italian-style pizza with Neapolitan-style dough in a nice, easy-going atmosphere.",
    image: "/images/valtezziana.jpg",
    mapLink: "https://maps.app.goo.gl/q7pwcmMtpaR5cEe57",
  },
  {
    name: "Ouzeri Lesvos",
    description:
      "A traditional ouzeri where the essence of Greek culture comes alive. Nestled in a charming corner, they serve fresh fish prepared with love and authenticity. Accompany your meal with carefully selected ouzo, each sip offering a taste of heritage. Grilled octopus, tender calamari, succulent sardines.",
    image: "/images/ouzerilesvos.jpg",
    mapLink: "https://maps.app.goo.gl/zmiRUQwnNe1YLbBG8",
  },
];

export default function EatInExarcheia() {
  const featured = restaurants[0];
  const rest = restaurants.slice(1);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[65dvh] overflow-hidden">
        <img
          src="/images/giantes.jpg"
          alt="Giantes restaurant garden in Exarcheia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,13,5,0.82) 0%, rgba(27,13,5,0.48) 45%, rgba(27,13,5,0.15) 80%, transparent 100%), linear-gradient(to top, rgba(27,13,5,0.65) 0%, transparent 45%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-14 lg:px-20 max-w-3xl">
          <h1
            className="animate-hero-fadeup font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            style={{ color: C.cream, animationDelay: "0.1s" }}
          >
            Eat in Exarcheia
          </h1>
          <p
            className="animate-hero-fadeup text-lg md:text-xl font-light"
            style={{ color: `${C.cream}CC`, animationDelay: "0.25s" }}
          >
            Athens&apos; most soulful neighbourhood has a food scene to match.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <RevealSection
            delay={0}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { value: "10", label: "Curated spots" },
              { value: "5–10 min", label: "Walking distance" },
              { value: "All", label: "Tastes welcome" },
            ].map(({ value, label }, i) => (
              <div
                key={value}
                className={i > 0 ? "pl-6 border-l border-stone-300" : ""}
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

      {/* Featured restaurant */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RevealSection>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-8"
              style={{ color: C.terracotta }}
            >
              Top Pick
            </p>
            <div
              className="group grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              style={{ border: `1px solid rgba(184,90,53,0.12)` }}
            >
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full self-start mb-5"
                  style={{
                    background: `${C.terracotta}15`,
                    color: C.terracotta,
                  }}
                >
                  #1
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4 leading-snug">
                  {featured.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm lg:text-base">
                  {featured.description}
                </p>
                <a
                  href={featured.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                  style={{
                    background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
                  }}
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  Open in Maps
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Restaurant grid */}
      <section className="py-16" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <RevealSection>
            <h2 className="font-serif text-3xl font-bold mb-8">
              More to Explore
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((r, i) => (
              <RevealSection key={r.name} delay={i * 60}>
                <div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
                  style={{ border: `1px solid rgba(184,90,53,0.10)` }}
                >
                  <div className="absolute top-3.5 left-3.5 z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md select-none"
                    style={{ background: C.terracotta }}>
                    {i + 2}
                  </div>
                  <div className="aspect-[16/10] overflow-hidden shrink-0">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-bold mb-3 leading-snug">
                      {r.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {r.description}
                    </p>
                    <a
                      href={r.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 pt-4 border-t border-stone-100 transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: C.terracotta }}
                    >
                      Open in Maps
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
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

      {/* CTA */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img
          src="/images/exarcheia-main.jpg"
          alt="Exarcheia neighbourhood"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,13,5,0.88) 0%, rgba(27,13,5,0.58) 55%, rgba(27,13,5,0.3) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <RevealSection className="max-w-xl">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-5"
              style={{ color: C.cream }}
            >
              Stay in Exarcheia
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: `${C.cream}BB` }}
            >
              Two carefully renovated apartments steps away from all of these
              spots.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-85"
              style={{ background: C.cream, color: C.dark }}
            >
              View Apartments
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
