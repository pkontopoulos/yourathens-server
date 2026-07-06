import type { Metadata } from "next";
import { ExternalLink, MapPin, Utensils, Wine, Sandwich } from "lucide-react";
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
  { name: "Giantes Restaurant", description: "Giantes is a celebrated Athens restaurant known for its organic cuisine and unique architecture. The high-quality food features organic ingredients, and the well-stocked cellar offers a variety of organic wines. Dine in the beautiful garden, enjoying standout dishes like Byzantine chicken and pork with honey, raisins, and coriander, or pan-fried manouri cheese with sesame and honey sauce. Conveniently located between the Omonoia and Panepistimiou metro stations, Giantes provides a delightful organic dining experience.", image: "/images/giantes.jpg", mapLink: "https://maps.app.goo.gl/rjhqcmHV7BvswqRt9" },
  { name: "Rosalia Tavern", description: "Rozalia is a unique restaurant-tavern in Athens, located in Exarchia. It's a garden oasis that's been a part of the community for 35 years. The owner, Achilleas, prioritizes creating satisfied friends over customers. The food is made from fresh, high-quality ingredients and blends with new culinary explorations.", image: "/images/rozalia.jpg", mapLink: "https://maps.app.goo.gl/vpgZBwNue1MtTB5n9" },
  { name: "Pharaoh Restaurant", description: "The space is warm and casual with an open kitchen, a few tables and a large bar that serves solo diners and sets of two. Front of house, the team of chefs, sommeliers and music curators work together to create an experience that sits somewhere between restaurant and wine bar. Walls are stacked with vinyl and firewood – a nod to the restaurant's music and cooking philosophies.", image: "/images/pharao.jpg", mapLink: "https://maps.app.goo.gl/rFAbsvNFzCv9F3sQ6" },
  { name: "Gamay Wine Bar", description: "Gamay is a new casual wine bar in Exarchia, Athens, housed in a 1928 modernist building. It features 135 labels focusing on natural wines, with Greek and international selections. The bar has no traditional tables, just a central green marble bar. Popular dishes include pinsa with mortadella and pistachio, plus house-made labneh cheese. It's designed as an unpretentious hangout for wine lovers and casual drinkers alike.", image: "/images/gamay.jpg", mapLink: "https://maps.app.goo.gl/8yXuzMkjnkfuRg6E7" },
  { name: "Stepa Bar-Restaurant", description: "STEPA is a cozy bar-restaurant in Exarchia, Athens. It offers a relaxed atmosphere with cocktails, brunch options including lamb and cheese pies, and spetsofai pie. The venue features DJs playing interesting music even on weeknights, no indoor smoking, and bright, calm ambiance. Prices range €15-20 per person, with friendly staff and quality cuisine. It's described as exactly what you'd want from a simple street bar in Athens.", image: "/images/stepa.jpg", mapLink: "https://maps.app.goo.gl/XN32b5dXgS41mZE5A" },
  { name: "The Black Salami MicroBakery", description: "After three years of experimenting with flours and techniques, The Black Salami Microbakery developed a unique, naturally leavened dough that's flavourful, easily digestible, and free from raising agents. Their flour—semi-milled, three-grain, and vitamin-rich—comes from the Bongiovanni family mill in Italy, while the oil, low in acidity, is sourced from Mani, Greece. Black Salami Microbakery offers a variety of artisanal breads, focaccia, and standout sandwiches.", image: "/images/blacksalami.jpg", mapLink: "https://maps.app.goo.gl/G84VGS7w9h8GH93Z8" },
  { name: "Prigkipas Souvlaki", description: "Experience a \"royal\" street food journey with ingredients from all over Greece. Indulge in dishes like Black Pig in a Straw, juicy Buffalo Burgers, Florina Kebap, Smoked Trout Fillet, and Eel wrapped in Corn Pie, all served with handmade Fava Beans, Capers, and Lemon Sauce. All meat is sourced from small-scale Greek farmers.", image: "/images/prigkipas.jpg", mapLink: "https://maps.app.goo.gl/LoRPcCS28Nxmxy3s6" },
  { name: "Talking Breads Burgers", description: "Delicious burgers and sandwiches for meat-eaters, vegetarians and vegans. The superfood salad is a must. The pizza rolls are to die for — especially the Chica one. The brioche buns are just perfect. And everything is super affordable, which makes Talking Breads a gem in Exarchia. They open at 5pm and are closed on Sundays, but open until late.", image: "/images/talkingbreads.jpg", mapLink: "https://maps.app.goo.gl/jwYmyf4g3gnseSe17" },
  { name: "Valtezziana 2.0 Pizza", description: "Valtezziana 2.0 is a pizzeria in Exarchia featuring 13 unique pizzas made with signature dough from three sourdough starters, fermented 48-72 hours for a light, airy texture. The concept maintains comfort food appeal using Neapolitan-style dough. Reviews praise the authentic Italian-style pizza with a nice, easy-going atmosphere.", image: "/images/valtezziana.jpg", mapLink: "https://maps.app.goo.gl/q7pwcmMtpaR5cEe57" },
  { name: "Ouzeri Lesvos", description: "Welcome to a traditional ouzeri, where the essence of Greek culture comes alive. Nestled in a charming corner, they serve fresh fish prepared with love and authenticity. Accompany your meal with carefully selected ouzo, each sip offering a taste of Greece's rich heritage. From grilled octopus and tender calamari to succulent sardines and flavorful sea bream.", image: "/images/ouzerilesvos.jpg", mapLink: "https://maps.app.goo.gl/zmiRUQwnNe1YLbBG8" },
];

export default function EatInExarcheia() {
  return (
    <div>
      <style>{`
        @keyframes eat-fadeup { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes eat-icon-float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
        .eat-hero-title  { animation: eat-fadeup 0.7s ease 0.1s both; }
        .eat-hero-sub    { animation: eat-fadeup 0.7s ease 0.28s both; }
        .eat-hero-stats  { animation: eat-fadeup 0.7s ease 0.45s both; }
        .eat-icon-1 { animation: eat-icon-float 3.2s ease-in-out infinite; }
        .eat-icon-2 { animation: eat-icon-float 3.2s ease-in-out 1.1s infinite; }
        .eat-icon-3 { animation: eat-icon-float 3.2s ease-in-out 2.1s infinite; }
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden pt-20 pb-28" style={{ background: `linear-gradient(145deg, ${C.dark} 0%, #3A1A08 45%, ${C.terracotta} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`, backgroundSize: "22px 22px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center gap-10 mb-8">
            <Utensils className="eat-icon-1 w-7 h-7 opacity-60" style={{ color: C.cream }} />
            <Wine className="eat-icon-2 w-7 h-7 opacity-60" style={{ color: C.cream }} />
            <Sandwich className="eat-icon-3 w-7 h-7 opacity-60" style={{ color: C.cream }} />
          </div>
          <h1 className="eat-hero-title font-serif text-5xl md:text-7xl font-bold mb-5 leading-tight" style={{ color: C.cream }}>Eat in Exarcheia</h1>
          <p className="eat-hero-sub text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: `${C.cream}CC` }}>
            Athens&apos; most soulful neighbourhood has a food scene to match — organic gardens, natural wine bars, royal souvlaki, and legendary tavernas that have fed the community for decades.
          </p>
          <div className="eat-hero-stats flex flex-wrap justify-center gap-4">
            {[{ label: "10 spots", sub: "curated picks" }, { label: "5–10 min", sub: "walking distance" }, { label: "All tastes", sub: "welcome" }].map(({ label, sub }) => (
              <div key={label} className="px-5 py-3 rounded-full text-center backdrop-blur-sm" style={{ background: `rgba(251,246,238,0.10)`, border: `1px solid rgba(251,246,238,0.22)`, color: C.cream }}>
                <span className="block text-base font-semibold">{label}</span>
                <span className="block text-xs uppercase tracking-widest mt-0.5" style={{ opacity: 0.7 }}>{sub}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display: "block", height: "64px", width: "100%" }}>
            <path d="M0,64 C280,10 560,54 720,32 C880,10 1160,56 1440,28 L1440,64 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restaurants.map((r, i) => (
            <RevealSection key={r.name} delay={(i % 2) * 110}>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="absolute top-3.5 left-3.5 z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md select-none" style={{ background: C.terracotta }}>
                  {i + 1}
                </div>
                <div className="h-52 overflow-hidden shrink-0">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <h2 className="font-serif text-2xl font-bold leading-snug">{r.name}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed flex-1">{r.description}</p>
                  <a href={r.mapLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                    style={{ background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)` }}>
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    Open in Maps
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: `linear-gradient(90deg, ${C.terracotta}, ${C.gold})` }} />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  );
}
