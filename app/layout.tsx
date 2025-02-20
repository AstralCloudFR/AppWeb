// STYLE
import "./globals.css";
import { Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// SEO
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import UpdateSchemaOrg from "@/components/seo/updateschemaorg";
import CanonicalURL from "@/components/seo/canonicalurl";

// NAVBAR & FOOTER
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// INCLUDES
import Promo from "@/components/includes/promo";
import Trustpillot from "@/components/includes/trustpilot";
import WhyChooseUs from "@/components/includes/whyschooseus";
import DataCenter from "@/components/includes/datacenter";
import GamePanel from "@/components/includes/gamepanel";
import Faq from "@/components/includes/faq";
import BlogCards from "@/components/includes/blogcards";
import CookieBanner from "@/components/includes/cookie";

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AstralCloud - Game Server Hosting",
  description:
    "AstralCloud provides the best Minecraft server hosting since 1998. Easy to set up, 24/7 support, with instant modpack and plugin install. Starting at $3.",
  keywords:
    "AstralCloud, AstralCloudhosting, AstralCloud hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  authors: [{ name: "AstralCloud" }],
  applicationName: "AstralCloud",
  robots: "index, follow",
  openGraph: {
    title: "AstralCloud - Game Server Hosting",
    description:
      "AstralCloud provides the best Minecraft server hosting since 1998. Easy to set up, 24/7 support, with instant modpack and plugin install. Starting at $3.",
    url: "https://astralcloud.fr",
    siteName: "AstralCloud",
    type: "website",
    images: [
      {
        url: "https://astralcloud.fr/assets/images/seo/1200x630.webp",
        width: 1200,
        height: 630,
        alt: "Logo AstralCloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AstralCloud",
    title: "AstralCloud - Game Server Hosting",
    description:
      "AstralCloud provides the best Minecraft server hosting since 1998. Easy to set up, 24/7 support, with instant modpack and plugin install. Starting at $3.",
    images: [
      {
        url: "https://astralcloud.fr/assets/images/seo/1200x630.webp",
        width: 1200,
        height: 630,
        alt: "Logo AstralCloud",
      },
    ],
  },
  icons: {
    apple: "/assets/images/logo.png",
    icon: [
      { url: "/assets/images/logo.png", sizes: "32x32" },
      { url: "/assets/images/logo.png", sizes: "16x16" },
    ],
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
      className="scrollbar-thin scrollbar-thumb-astralcloud scrollbar-track-primary scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg"
    >
      {/* 
      <GoogleTagManager gtmId="GTM-ABCDEFGH" />
      <GoogleAnalytics gaId="G-ABCDEFGH" /> 
      */}
      <body className={montserrat.className}>
        <div className="text-white">
          <UpdateSchemaOrg />
          <CanonicalURL />
          <Promo />
          <Navbar />
          {children}
          <Trustpillot />
          <WhyChooseUs />
          <DataCenter />
          <GamePanel />
          <Faq />
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
