import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/shared/blog";
import { Clock, ArrowLeft } from "lucide-react";

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
    title: `${post.title} – YourAthens Blog`,
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
      <div className="relative h-[58vh] overflow-hidden">
        <img src={post.coverImage} alt={post.coverImageAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(27,13,5,0.35) 0%, rgba(27,13,5,0.05) 40%, rgba(27,13,5,0.78) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 pb-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm" style={{ background: "rgba(251,246,238,0.15)", border: "1px solid rgba(251,246,238,0.28)", color: C.cream }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight" style={{ color: C.cream }}>
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 transition-all duration-200 hover:gap-3" style={{ color: C.terracotta }}>
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-5 text-base text-muted-foreground mb-6 pb-6 border-b" style={{ borderColor: `${C.terracotta}22` }}>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{post.excerpt}</p>

          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-6 prose-p:leading-relaxed prose-ul:my-6 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom CTA */}
          <div className="mt-14 pt-8 border-t" style={{ borderColor: `${C.terracotta}20` }}>
            <div className="rounded-2xl text-center py-12 px-6 relative overflow-hidden" style={{ background: `linear-gradient(145deg, ${C.dark} 0%, #3A1A08 50%, ${C.terracotta} 100%)` }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />
              <div className="relative z-10">
                <p className="font-serif text-xl font-bold mb-2" style={{ color: C.cream }}>Explore more stories</p>
                <p className="text-base mb-7 leading-relaxed" style={{ color: `${C.cream}AA` }}>
                  Discover more guides and insights about Athens and the neighbourhood.
                </p>
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-opacity duration-200 hover:opacity-85" style={{ background: C.cream, color: C.dark }}>
                  <ArrowLeft className="w-4 h-4" />
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
