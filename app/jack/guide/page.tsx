"use client";

import { useState, useCallback } from "react";
import {
  MapPin,
  Wifi,
  Car,
  Key,
  Home,
  Droplets,
  Tv,
  Sun,
  Bell,
  Copy,
  Check,
  ChevronRight,
  Navigation2,
  Phone,
  Layers,
} from "lucide-react";

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

const SECTIONS = [
  { id: "location", label: "Location", icon: MapPin },
  { id: "parking", label: "Parking", icon: Car },
  { id: "building", label: "Building", icon: Key },
  { id: "apartment", label: "Apartment", icon: Home },
  { id: "hot-water", label: "Hot Water", icon: Droplets },
  { id: "wifi", label: "Wi-Fi", icon: Wifi },
  { id: "blinds", label: "Blinds", icon: Layers },
  { id: "tv", label: "Smart TV", icon: Tv },
  { id: "balcony", label: "Balcony", icon: Sun },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 select-none"
      style={{
        background: copied ? `${C.terracotta}20` : `${C.dark}0D`,
        color: copied ? C.terracotta : "#78716c",
      }}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function SectionAnchor({
  icon: Icon,
  title,
  id,
}: {
  icon: React.ElementType;
  title: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5" id={id}>
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${C.terracotta}18` }}
      >
        <Icon className="w-4 h-4" style={{ color: C.terracotta }} />
      </div>
      <h2
        className="font-serif text-2xl font-bold leading-tight"
        style={{ color: C.dark }}
      >
        {title}
      </h2>
    </div>
  );
}

function InfoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-4 ${className}`}
      style={{ background: C.cream }}
    >
      {children}
    </div>
  );
}

function Step({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
        style={{ background: C.terracotta, color: "white" }}
      >
        {number}
      </div>
      <p className="text-sm leading-relaxed text-stone-700 pt-1">{children}</p>
    </div>
  );
}

function MapButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-85 active:opacity-70"
      style={{
        background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
      }}
    >
      <Navigation2 className="w-4 h-4 shrink-0" />
      {label}
      <ChevronRight className="w-4 h-4 ml-auto" />
    </a>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 68;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function JackGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[55dvh] overflow-hidden">
        <img
          src="/images/jack-main.jpg"
          alt="Jack Apartment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(27,13,5,0.15) 0%, rgba(27,13,5,0.72) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 max-w-lg mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: `${C.cream}99` }}
          >
            YourAthens · Guest Guide
          </p>
          <h1
            className="font-serif text-4xl font-bold leading-tight"
            style={{ color: C.cream }}
          >
            Welcome to
            <br />
            Jack
          </h1>
          <p className="text-sm mt-2" style={{ color: `${C.cream}BB` }}>
            31 Themistokleous Str., Exarcheia, Athens
          </p>
        </div>
      </section>

      {/* Sticky Section Nav */}
      <nav
        className="sticky top-0 z-40 border-b border-stone-100 bg-white"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          className="flex gap-2 px-4 py-3 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors hover:opacity-80 active:opacity-60"
              style={{ background: C.cream, color: C.dark }}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Guide Content */}
      <div className="max-w-lg mx-auto px-4 py-8 space-y-12">

        {/* ── Location ── */}
        <section>
          <SectionAnchor icon={MapPin} title="The Location" id="location" />
          <div className="space-y-3">
            <InfoCard>
              <p className="font-semibold text-sm" style={{ color: C.dark }}>
                31 Themistokleous Str.
              </p>
              <p className="text-sm text-stone-500 mt-0.5">
                Exarcheia, Athens, Greece
              </p>
            </InfoCard>

            <MapButton
              href="https://maps.app.goo.gl/BZokTfy8AhTE3yWu6"
              label="Open in Maps"
            />

            <InfoCard>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: C.dark }}
              >
                Getting Here from the Airport
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-xl mt-0.5">🚕</span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: C.dark }}>
                      Taxi
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed mt-0.5">
                      30–50 min from El. Venizelos Airport depending on traffic.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl mt-0.5">🚇</span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: C.dark }}>
                      Metro — ~50 min
                    </p>
                    <ol className="mt-1.5 space-y-1 text-sm text-stone-600">
                      <li>1. Take Line 3 → Syntagma Station</li>
                      <li>2. Change to Line 2 → Omonia Station</li>
                      <li>3. 5 min walk to the apartment</li>
                    </ol>
                    <a
                      href="https://www.emetro.gr/?page_id=4449&lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium mt-2"
                      style={{ color: C.terracotta }}
                    >
                      Official Metro Map & Schedule
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </section>

        {/* ── Parking ── */}
        <section>
          <SectionAnchor icon={Car} title="Parking" id="parking" />
          <div className="space-y-3">
            <InfoCard>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                The apartment does{" "}
                <strong className="text-stone-900">not</strong> include a
                parking slot, but we recommend a nearby option:
              </p>
              <div
                className="rounded-xl p-3"
                style={{ background: `${C.gold}18` }}
              >
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: C.dark }}
                >
                  Polis Park — Kaniggos Sq. Station
                </p>
                <div className="space-y-1 text-xs text-stone-600">
                  <p>Open 24/7 · 491 parking spots · Safe & staffed</p>
                  <a
                    href="tel:2103816330"
                    className="inline-flex items-center gap-1.5 mt-1 font-medium"
                    style={{ color: C.terracotta }}
                  >
                    <Phone className="w-3 h-3" />
                    210 38 16 330
                  </a>
                </div>
              </div>
            </InfoCard>
            <MapButton
              href="https://maps.app.goo.gl/e3ic2J3YhohNM8FL8"
              label="Directions to Polis Park"
            />
          </div>
        </section>

        {/* ── Building ── */}
        <section>
          <SectionAnchor icon={Key} title="Building Access" id="building" />
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden mb-3">
              <img
                src="/images/outdoor-s.png"
                alt="Building entrance at 31 Themistokleous"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden mb-3">
              <img
                src="/images/Jack-Lockbox-s.png"
                alt="Jack lockbox location"
                className="w-full object-cover"
              />
            </div>

            <InfoCard>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: C.dark }}
              >
                Collecting Your Keys
              </p>
              <div className="space-y-3">
                <Step number={1}>
                  At the front door, look to the{" "}
                  <strong>wall on the right</strong>.
                </Step>
                <Step number={2}>
                  Find the <strong>bottom right lockbox</strong> — it's labeled{" "}
                  <strong>"JACK"</strong>.
                </Step>
                <Step number={3}>
                  Enter your <strong>4-digit code</strong>. This is sent to you
                  the day before arrival via your booking platform.
                </Step>
                <Step number={4}>Collect your keys and you're in!</Step>
              </div>
            </InfoCard>

            <InfoCard>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${C.terracotta}15` }}
                >
                  <Bell className="w-4 h-4" style={{ color: C.terracotta }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: C.dark }}
                  >
                    Doorbell
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Next to the main door you'll find the intercom panel. Jack's
                    bell is the <strong>upper one</strong>, labeled{" "}
                    <strong>5B</strong>.
                  </p>
                  <p className="text-xs text-stone-500 mt-1.5">
                    For food delivery or guest entry.
                  </p>
                </div>
              </div>
            </InfoCard>
          </div>
        </section>

        {/* ── Apartment ── */}
        <section>
          <SectionAnchor icon={Home} title="The Apartment" id="apartment" />
          <div className="rounded-2xl overflow-hidden mb-3">
            <img
              src="/images/Jack-Door.jpeg"
              alt="Jack apartment door on the 5th floor"
              className="w-full object-cover"
            />
          </div>
          <InfoCard>
            <div className="divide-y divide-stone-200">
              <div className="flex items-center gap-4 py-3">
                <span className="text-2xl">🏢</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: C.dark }}>
                    5th Floor
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Take the elevator up
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3">
                <span className="text-2xl">🚪</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: C.dark }}>
                    Door on the Left
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    As you exit the elevator, Jack's door is on the left
                  </p>
                </div>
              </div>
            </div>
          </InfoCard>
        </section>

        {/* ── Hot Water ── */}
        <section>
          <SectionAnchor icon={Droplets} title="Hot Water" id="hot-water" />
          <InfoCard>
            <p
              className="text-sm font-semibold mb-2"
              style={{ color: C.dark }}
            >
              Please read before showering
            </p>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              Like many homes across Europe, Asia, and the Middle East, this
              apartment does not keep water hot all day. The heater works on
              demand — switch it on <strong>20–25 minutes</strong> before your
              shower or bath.
            </p>
            <div className="space-y-3 mb-4">
              <Step number={1}>
                As you enter the apartment, find the small closet on the wall
                next to the <strong>main bedroom door</strong> — it contains the
                electricity switches.
              </Step>
              <Step number={2}>
                Open it and press the button in position{" "}
                <strong>#19</strong> once. The light turns{" "}
                <strong>orange</strong> — the water is heating.
              </Step>
              <Step number={3}>
                Wait <strong>20–25 minutes</strong>. When the water is hot, the
                heater switches off by itself and the light turns{" "}
                <strong>green</strong>. You don't need to do anything.
              </Step>
            </div>
            <div
              className="rounded-xl p-3 text-xs text-stone-700 leading-relaxed"
              style={{ background: `${C.gold}20` }}
            >
              <strong>Important:</strong> once the hot water is used up, you'll
              need to press the button again and wait before the next shower. We
              recommend pressing it as soon as you wake up or return to the
              apartment, so the water is ready when you are.
            </div>
          </InfoCard>
        </section>

        {/* ── Wi-Fi ── */}
        <section>
          <SectionAnchor icon={Wifi} title="Wi-Fi" id="wifi" />
          <InfoCard>
            <div className="divide-y divide-stone-200">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Speed</p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: C.dark }}
                  >
                    50/5 Mbps
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Network</p>
                  <p
                    className="text-sm font-semibold font-mono tracking-wide"
                    style={{ color: C.dark }}
                  >
                    Jack_wifi
                  </p>
                </div>
                <CopyButton text="Jack_wifi" />
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Password</p>
                  <p
                    className="text-sm font-semibold font-mono tracking-wide"
                    style={{ color: C.dark }}
                  >
                    jack1234
                  </p>
                </div>
                <CopyButton text="jack1234" />
              </div>
            </div>
          </InfoCard>
        </section>

        {/* ── Roller Blinds ── */}
        <section>
          <SectionAnchor icon={Layers} title="Roller Blinds" id="blinds" />
          <InfoCard>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              All windows have <strong>electric roller blinds</strong> operated
              via wall buttons next to each window door.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div
                className="flex flex-col items-center gap-2 p-3.5 rounded-xl text-center"
                style={{ background: `${C.terracotta}12` }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: C.terracotta }}
                >
                  ▲
                </span>
                <p className="text-xs font-semibold" style={{ color: C.dark }}>
                  Up Arrow
                </p>
                <p className="text-xs text-stone-500">
                  Press &amp; hold to raise
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2 p-3.5 rounded-xl text-center"
                style={{ background: `${C.dark}08` }}
              >
                <span className="text-xl font-bold text-stone-700">▼</span>
                <p className="text-xs font-semibold" style={{ color: C.dark }}>
                  Down Arrow
                </p>
                <p className="text-xs text-stone-500">
                  Press &amp; hold to lower
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Note: each window has two pairs of buttons — one pair for the
              roller blinds, one for electric shades (not currently installed).
            </p>
          </InfoCard>
        </section>

        {/* ── Smart TV ── */}
        <section>
          <SectionAnchor icon={Tv} title="Smart TV" id="tv" />
          <InfoCard>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              You'll find a <strong>43" Smart TV</strong> in the living room,
              connected to the internet.
            </p>
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-3"
              style={{ color: C.terracotta }}
            >
              Available
            </p>
            <ul className="space-y-2.5">
              {[
                "Greek & foreign live TV channels",
                "Netflix — use your own account",
                "Disney+ — use your own account",
                "Amazon Prime Video — use your own account",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ background: C.terracotta }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </InfoCard>
        </section>

        {/* ── Balcony ── */}
        <section>
          <SectionAnchor icon={Sun} title="Balcony" id="balcony" />
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden h-52">
              <img
                src="/images/jack/6.jpg"
                alt="Jack apartment balcony"
                className="w-full h-full object-cover"
              />
            </div>
            <InfoCard>
              <p className="text-sm text-stone-700 leading-relaxed">
                Step outside to your private balcony with seating for two —
                surrounded by the authentic urban energy of Exarcheia. Perfect
                for a morning coffee or a relaxed lunch in the sun.
              </p>
            </InfoCard>
          </div>
        </section>

        {/* Contact CTA */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: `linear-gradient(135deg, ${C.terracotta} 0%, ${C.gold} 100%)`,
          }}
        >
          <p className="font-serif text-xl font-bold text-white mb-1">
            Need help?
          </p>
          <p className="text-sm text-white/80 mb-5 leading-relaxed">
            We're here to make your stay perfect. Reach out anytime.
          </p>
          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+306973800584"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85"
              style={{ background: "white", color: C.terracotta }}
            >
              <Phone className="w-4 h-4" />
              +30 697 380 0584
            </a>
            <a
              href="mailto:info@yourathens.gr"
              className="flex items-center justify-center py-3 px-5 rounded-xl text-sm font-semibold text-white/90 border border-white/30 transition-opacity hover:opacity-80"
            >
              info@yourathens.gr
            </a>
          </div>
        </div>

        <div className="pb-4" />
      </div>
    </div>
  );
}
