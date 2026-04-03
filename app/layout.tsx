import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soothrx.net"),
  title: "SoothRx — Prescription Pain Relief Cream, Delivered Monthly",
  description:
    "Doctor-prescribed, compounded topical pain creams for arthritis, back pain, neuropathy, and more. No pills. No opioids. Ships to your door. Starting at $69/month.",
  openGraph: {
    title: "SoothRx — Prescription Pain Relief Cream, Delivered Monthly",
    description:
      "Doctor-prescribed, compounded topical pain creams for arthritis, back pain, neuropathy, and more. No pills. No opioids. Ships to your door.",
    url: "https://soothrx.net",
    siteName: "SoothRx",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoothRx — Prescription Pain Relief Cream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoothRx — Prescription Pain Relief Cream, Delivered Monthly",
    description:
      "Doctor-prescribed, compounded topical pain creams. No pills. No opioids. Ships to your door.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "SoothRx",
              url: "https://soothrx.net",
              description:
                "Doctor-prescribed, compounded topical pain creams delivered monthly.",
              priceRange: "$$",
              medicalSpecialty: "Pain Management",
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1672375480422939');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1672375480422939&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
