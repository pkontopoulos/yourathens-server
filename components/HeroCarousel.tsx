"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
};

const heroImages = [
  {
    src: "/images/alice-main.jpg",
    alt: "Spacious apartment living room",
    title: "Alice Apartment",
    subtitle: "Spacious 2-bedroom for up to 4 guests",
    cta: { label: "Visit Alice", href: "/alice" },
  },
  {
    src: "/images/jack-main.jpg",
    alt: "Modern apartment interior",
    title: "Jack Apartment",
    subtitle: "Modern 1-bedroom for 2 guests in central Athens",
    cta: { label: "Visit Jack", href: "/jack" },
  },
  {
    src: "/images/athens-plaka.jpg",
    alt: "Athens Plaka cityscape",
    title: "Welcome to YourAthens",
    subtitle: "Experience the heart of Athens from our elegant apartments",
    cta: { label: "Read our Blog", href: "/blog" },
  },
  {
    src: "/images/exarcheia-main.jpg",
    alt: "Exarcheia neighborhood",
    title: "Exarcheia District",
    subtitle: "Vibrant neighbourhood with street art and authentic culture",
    cta: { label: "Where to Eat", href: "/eat" },
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>
    setCurrentIndex((i) => (i === 0 ? heroImages.length - 1 : i - 1));

  const goToNext = () =>
    setCurrentIndex((i) => (i === heroImages.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(goToNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(27,13,5,0.82) 0%, rgba(27,13,5,0.48) 45%, rgba(27,13,5,0.15) 80%, transparent 100%), linear-gradient(to top, rgba(27,13,5,0.55) 0%, transparent 40%)",
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-end pb-28 px-6 md:px-14 lg:px-20 max-w-3xl">
            <p
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              style={{ color: C.cream }}
            >
              {image.title}
            </p>
            <p
              className="text-lg md:text-xl font-light mb-9 max-w-md"
              style={{ color: `${C.cream}CC` }}
            >
              {image.subtitle}
            </p>
            <Link
              href={image.cta.href}
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-lg text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
              style={{
                background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
                color: C.cream,
              }}
            >
              {image.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full p-3 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full p-3 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-12 left-6 md:left-14 lg:left-20 flex gap-2.5 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="rounded-full transition-all duration-300"
            style={{
              width: index === currentIndex ? "24px" : "10px",
              height: "10px",
              background:
                index === currentIndex
                  ? C.terracotta
                  : "rgba(255,255,255,0.45)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          style={{ display: "block", height: "48px", width: "100%" }}
        >
          <path d="M0,48 C360,0 1080,40 1440,16 L1440,48 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
