import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: {
    default: "Vaalpenskraal Game Reserve | Waterberg Hunting",
    template: "%s | Vaalpenskraal",
  },
  description:
    "Premium fair-chase hunting and Waterberg stays: four guest chalets on camp, full-board bush hospitality, plains and dangerous game, and international safari support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-espresso text-canvas-cream font-sans antialiased">
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
}
