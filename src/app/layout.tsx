import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const sans = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Teranga App — AESS",
  description:
    "La communauté des étudiants sénégalais de Sorbonne : guides, entraide, parrainage Teranga et vie de l'association.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <div className="site-main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
