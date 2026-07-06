import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { getVersionDisplay } from "@/shared/version";

export const metadata: Metadata = {
  title: "YourAthens – Apartments in Exarcheia, Athens",
  description:
    "Modern renovated apartments in the heart of Exarcheia, Athens. Book directly or via Booking.com and Airbnb.",
  openGraph: {
    title: "YourAthens – Apartments in Exarcheia, Athens",
    description:
      "Modern renovated apartments in the heart of Exarcheia, Athens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MQM45XR7');`,
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
