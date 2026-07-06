import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/shared/blog";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog – YourAthens",
  description:
    "Travel stories, tips, and insights about Athens and the Exarcheia neighbourhood from the YourAthens team.",
};

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogListing() {
  const { posts } = getBlogPosts(1, 100);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      <style>{`
        @keyframes blog-fadeup { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .blog-hero-eyebrow { animation: blog-fadeup 0.6s ease 0.05s both; }
        .blog-hero-title   { animation: blog-fadeup 0.7s ease 0.18s both; }
        .blog-hero-sub     { animation: blog-fadeup 0.7s ease 0.32s both; }
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden pt-16 pb-24" style={{ background: `linear-gradient(145deg, ${C.dark} 0%, #3A1A08 50%, ${C.terracotta} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`, backgroundSize: "22px 22px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="blog-hero-eyebrow inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold" style={{ background: `rgba(251,246,238,0.12)`, border: `1px solid rgba(251,246,238,0.22)`, color: C.cream }}>
            <BookOpen className="w-3.5 h-3.5" />
            Travel Stories &amp; Guides
          </div>
          <h1 className="blog-hero-title font-serif text-5xl md:text-6xl font-bold mb-5 leading-tight" style={{ color: C.cream }}>YourAthens Blog</h1>
          <p className="blog-hero-sub text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: `${C.cream}CC` }}>
            Stories, tips, and insights about Athens and your perfect stay.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display: "block", height: "64px", width: "100%" }}>
            <path d="M0,64 C280,10 560,54 720,32 C880,10 1160,56 1440,28 L1440,64 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-14 space-y-10">

        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300" style={{ border: `1px solid rgba(184,90,53,0.12)` }}>
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img src={featured.coverImage} alt={featured.coverImageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featured.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${C.terracotta}15`, color: C.terracotta }}>{tag}</span>
                  ))}
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4 leading-snug">{featured.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">{featured.excerpt}</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <time>{formatDate(featured.publishedAt)}</time>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime} min read
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3" style={{ color: C.terracotta }}>
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                <article className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col" style={{ border: `1px solid rgba(184,90,53,0.1)` }}>
                  <div className="aspect-[16/10] overflow-hidden shrink-0">
                    <img src={post.coverImage} alt={post.coverImageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${C.terracotta}12`, color: C.terracotta }}>{tag}</span>
                      ))}
                    </div>
                    <h2 className="font-serif text-lg font-bold mb-3 leading-snug flex-1">{post.title}</h2>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-3 border-t border-stone-100">
                      <time>{formatDate(post.publishedAt)}</time>
                      <div className="flex items-center gap-1 ml-auto">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: `linear-gradient(90deg, ${C.terracotta}, ${C.gold})` }} />
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
