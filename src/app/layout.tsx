import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import BookingProvider from "@/components/BookingProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orbitacollective.com"),
  title: {
    default: "Orbita Collective | Customer Experience & Service Design Consultancy",
    template: "%s | Orbita Collective",
  },
  description:
    "Orbita Collective is a CX and service design consultancy with 18+ years of experience. We deliver inspiring, impactful, and affordable Customer Experience strategy, user research, and design thinking — without the traditional consultancy premium.",
  keywords: [
    "customer experience consultancy",
    "CX consultancy UK",
    "service design consultancy",
    "design thinking consultancy",
    "CX strategy",
    "user research agency",
    "product design consultancy",
    "customer experience strategy",
    "service design agency London",
    "design consultancy London",
    "UX consultancy",
    "customer journey mapping",
    "design thinking agency",
    "Orbita Collective",
    "Elisa Facondo",
    "Joe La Trobe",
  ],
  authors: [
    { name: "Elisa Facondo", url: "https://orbitacollective.com" },
    { name: "Joe La Trobe", url: "https://orbitacollective.com" },
  ],
  creator: "Orbita Collective",
  icons: {
    icon: "/logos/favicon.png",
    shortcut: "/logos/favicon.png",
    apple: "/logos/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://orbitacollective.com",
    siteName: "Orbita Collective",
    title: "Orbita Collective | Customer Experience & Service Design Consultancy",
    description:
      "CX and service design consultancy with 18+ years of experience. Inspiring, impactful, and affordable — without the traditional consultancy premium.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orbita Collective — Customer Experience & Service Design Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbita Collective | CX & Service Design Consultancy",
    description:
      "18+ years of CX, service design and design thinking. Inspiring, impactful and affordable — without the consultancy premium.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://orbitacollective.com",
  },
};

// Structured data — tells Google exactly who you are
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://orbitacollective.com/#organization",
      name: "Orbita Collective",
      url: "https://orbitacollective.com",
      logo: {
        "@type": "ImageObject",
        url: "https://orbitacollective.com/logos/logo-dark.png",
      },
      description:
        "Customer Experience and Service Design consultancy with 18+ years of experience delivering inspiring, impactful, and affordable CX strategy, user research, and design thinking.",
      email: "elisa@orbitacollective.com",
      sameAs: [],
      founders: [
        {
          "@type": "Person",
          name: "Elisa Facondo",
          jobTitle: "Co-Founder, Customer Experience",
          email: "elisa@orbitacollective.com",
          worksFor: { "@id": "https://orbitacollective.com/#organization" },
        },
        {
          "@type": "Person",
          name: "Joe La Trobe",
          jobTitle: "Co-Founder, Design & Innovation",
          email: "joe@orbitacollective.com",
          worksFor: { "@id": "https://orbitacollective.com/#organization" },
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://orbitacollective.com/#service",
      name: "Orbita Collective",
      url: "https://orbitacollective.com",
      description:
        "CX strategy, service design, user research, and design thinking consultancy.",
      priceRange: "££",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Consultancy Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "User Research" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Service & Experience Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CX Strategy & Facilitation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design Thinking" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer Engagement Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Upskilling & Training" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://orbitacollective.com/#website",
      url: "https://orbitacollective.com",
      name: "Orbita Collective",
      publisher: { "@id": "https://orbitacollective.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
