import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

// Configure Syne for headers and visual branding elements
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
  display: "swap",
});

// Configure Outfit for readable paragraphs, numbers and clean UI elements
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijayanand B Rathod | Creative Visual & UI/UX Designer Portfolio",
  description:
    "Portfolio of Vijayanand B Rathod, a Creative Visual Designer specializing in bold graphic design systems, Swiss typography grids, interactive UI/UX interfaces, and motion graphics.",
  keywords: [
    "Vijayanand B Rathod",
    "Visual Designer",
    "UI/UX Design Portfolio",
    "Swiss Typography Grid",
    "Brand Rebranding Case Study",
    "Figma Designer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Vijayanand B Rathod" }],
  openGraph: {
    title: "Vijayanand B Rathod | Creative Visual & UI/UX Designer Portfolio",
    description:
      "Explore the portfolio of Vijayanand B Rathod, featuring Swiss grid branding, responsive UI/UX dashboards, and dynamic art photography.",
    url: "https://vijayanandrathod.design",
    siteName: "Vijayanand B Rathod Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Vijayanand B Rathod design canvas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijayanand B Rathod | Creative Visual Designer",
    description:
      "Portfolio of Vijayanand B Rathod, featuring Swiss grid branding, responsive UI/UX dashboards, and dynamic art photography.",
    images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"],
  },
  metadataBase: new URL("https://vijayanandrathod.design"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${outfit.variable} font-sans antialiased bg-[#e5e5e5] text-stone-900`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
