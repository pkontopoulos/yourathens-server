import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { getVersionDisplay } from "@/shared/version";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#B85A35",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourathens.gr"),
  title: {
    default: "YourAthens – Apartments in Exarcheia, Athens",
    template: "%s – YourAthens",
  },
  description:
    "Modern renovated apartments in the heart of Exarcheia, Athens. Book directly or via Booking.com and Airbnb.",
  openGraph: {
    title: "YourAthens – Apartments in Exarcheia, Athens",
    description:
      "Modern renovated apartments in the heart of Exarcheia, Athens. Book directly or via Booking.com and Airbnb.",
    type: "website",
    url: "https://yourathens.gr",
    siteName: "YourAthens",
    locale: "en_US",
    images: [
      {
        url: "/images/jack-main.jpg",
        width: 1200,
        height: 630,
        alt: "YourAthens – Modern Apartments in Exarcheia, Athens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YourAthens – Apartments in Exarcheia, Athens",
    description:
      "Modern renovated apartments in the heart of Exarcheia, Athens.",
    images: ["/images/jack-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MQM45XR7');`,
          }}
        />
        {/* LodgingBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "YourAthens",
              description:
                "Modern renovated apartments in the heart of Exarcheia, Athens.",
              url: "https://yourathens.gr",
              telephone: "+306973800584",
              email: "info@yourathens.gr",
              image: "https://yourathens.gr/images/jack-main.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "31 Themistokleous Str",
                addressLocality: "Athens",
                addressRegion: "Attica",
                postalCode: "10677",
                addressCountry: "GR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.9849061,
                longitude: 23.7324895,
              },
              sameAs: [
                "https://www.facebook.com/yourathens",
                "https://www.instagram.com/your_athens_apartments",
              ],
              numberOfRooms: 2,
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
                { "@type": "LocationFeatureSpecification", name: "Balcony", value: true },
                { "@type": "LocationFeatureSpecification", name: "Fully equipped kitchen", value: true },
                { "@type": "LocationFeatureSpecification", name: "Espresso machine", value: true },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQM45XR7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navigation />
        <main>{children}</main>

        <footer className="bg-primary text-primary-foreground py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src="/images/yourathens-logo.jpg"
                  alt="YourAthens"
                  className="h-12 w-auto mb-4 filter brightness-0 invert"
                />
                <p className="text-sm text-primary-foreground/80">
                  Modern apartments in the heart of Athens, Exarcheia district.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-primary-foreground/80">
                  <p>31 Themistokleous Str</p>
                  <p>Exarcheia, Athens, Greece</p>
                  <p>Tel: +30 6973800584</p>
                  <p>Email: info@yourathens.gr</p>
                  <p>
                    <a href="/contact">Contact Us Form</a>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-semibold mb-4">Follow Us</h4>
                <div className="space-y-2 text-sm">
                  <a
                    href="https://www.facebook.com/yourathens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="http://instagram.com/your_athens_apartments"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
              <p>
                &copy; 2022-26 YourAthens. All rights reserved. • Release{" "}
                {getVersionDisplay()}
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
