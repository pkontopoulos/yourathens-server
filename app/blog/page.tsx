import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/shared/blog";
import { Clock, ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Blog - YourAthens",
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
      {/* Header */}
      <div className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <p
            className="animate-hero-fadeup text-xs uppercase tracking-widest font-semibold mb-4"
            style={{ color: C.terracotta, animationDelay: "0.05s" }}
          >
            Travel Stories &amp; Guides
          </p>
          <h1
            className="animate-hero-fadeup font-serif text-5xl md:text-6xl font-bold mb-5 leading-tight"
            style={{ animationDelay: "0.15s" }}
          >
            YourAthens Blog
          </h1>
          <p
            className="animate-hero-fadeup text-lg text-muted-foreground leading-relaxed max-w-lg"
            style={{ animationDelay: "0.28s" }}
          >
            Stories, tips, and insights about Athens and your perfect stay.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-14 space-y-10">

        {/* Featured post */}
        {featured && (
          <RevealSection>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article
                className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                style={{ border: `1px solid rgba(184,90,53,0.12)` }}
              >
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.coverImage}
                    alt={featured.coverImageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${C.terracotta}15`, color: C.terracotta }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <time>{formatDate(featured.publishedAt)}</time>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime} min read
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                      style={{ color: C.terracotta }}
                    >
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </RevealSection>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <RevealSection key={post.id} delay={i * 60}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article
                    className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                    style={{ border: `1px solid rgba(184,90,53,0.1)` }}
                  >
                    <div className="aspect-[16/10] overflow-hidden shrink-0">
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ background: `${C.terracotta}12`, color: C.terracotta }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-serif text-lg font-bold mb-3 leading-snug flex-1">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-3 border-t border-stone-100">
                        <time>{formatDate(post.publishedAt)}</time>
                        <div className="flex items-center gap-1 ml-auto">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ background: `linear-gradient(90deg, ${C.terracotta}, ${C.gold})` }}
                    />
                  </article>
                </Link>
              </RevealSection>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
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
              Two carefully renovated apartments in Athens&apos; most vibrant
              neighbourhood.
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
