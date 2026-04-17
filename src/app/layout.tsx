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
    default: "Orbita Collective | Design & CX Consultancy",
    template: "%s | Orbita Collective",
  },
  description:
    "We reinvented consultancy so you could reinvent your products & services. 18+ years of experience in Customer Experience, Service Design, and Design Thinking.",
  keywords: [
    "customer experience consultancy",
    "service design",
    "design thinking",
    "CX strategy",
    "product design consultancy",
    "user research",
    "design consultancy London",
    "Orbita Collective",
  ],
  authors: [
    { name: "Elisa Facondo", url: "https://orbitacollective.com" },
    { name: "Joe La Trobe", url: "https://orbitacollective.com" },
  ],
  creator: "Orbita Collective",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://orbitacollective.com",
    siteName: "Orbita Collective",
    title: "Orbita Collective | Design & CX Consultancy",
    description:
      "We reinvented consultancy so you could reinvent your products & services. 18+ years of experience in Customer Experience, Service Design, and Design Thinking.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orbita Collective — Design & CX Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbita Collective | Design & CX Consultancy",
    description:
      "We reinvented consultancy so you could reinvent your products & services.",
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
      <body className="min-h-full flex flex-col font-sans">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
