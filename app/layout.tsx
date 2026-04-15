import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteMetadataBase } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const defaultTitle = "Vaalpenskraal Game Reserve | Waterberg Hunting";
const defaultDescription =
  "Premium fair-chase hunting in the Waterberg, Limpopo: four guest chalets on camp, fully catered hospitality at Vark Kraal, PH-led plains and dangerous game where law and ethics allow, census-driven quarry (not a static menu).";

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: defaultTitle,
    template: "%s | Vaalpenskraal",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteMetadataBase,
    siteName: "Vaalpenskraal Game Reserve",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[3000] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-semibold focus:text-espresso focus:ring-2 focus:ring-burnished-copper"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
