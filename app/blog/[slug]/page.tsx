import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/shared/blog";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} - YourAthens Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, alt: post.coverImageAlt }],
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <div>
      {/* Hero image */}
      <div className="relative min-h-[58dvh] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,13,5,0.82) 0%, rgba(27,13,5,0.48) 45%, rgba(27,13,5,0.15) 80%, transparent 100%), linear-gradient(to top, rgba(27,13,5,0.65) 0%, transparent 45%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 md:px-14 lg:px-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{
                    background: "rgba(251,246,238,0.15)",
                    border: "1px solid rgba(251,246,238,0.28)",
                    color: C.cream,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="animate-hero-fadeup font-serif text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: C.cream, animationDelay: "0.1s" }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: C.terracotta }}
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
            <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>
          </div>

          <RevealSection>
            <p
              className="text-lg text-muted-foreground mb-10 leading-relaxed pb-8 border-b"
              style={{ borderColor: `${C.terracotta}22` }}
            >
              {post.excerpt}
            </p>

            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-6 prose-p:leading-relaxed prose-ul:my-6 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </RevealSection>
        </div>
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
              Two apartments in Athens&apos; most vibrant neighbourhood. Book
              directly on Booking.com or Airbnb.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-85"
                style={{ background: C.cream, color: C.dark }}
              >
                View Apartments
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors duration-200 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(251,246,238,0.4)",
                  color: C.cream,
                }}
              >
                More Articles
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
