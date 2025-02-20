import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap - AstralCloud",
  description:
    "The best Minecraft server hosting starting at just $3/month with unlimited slots, 24/7/365 support, 2,000+ modpacks on one-click installs at 20 locations.",
  keywords:
    "AstralCloud, AstralCloudhosting, AstralCloud hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "Sitemap - AstralCloud",
    description:
      "The best Minecraft server hosting starting at just $3/month with unlimited slots, 24/7/365 support, 2,000+ modpacks on one-click installs at 20 locations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AstralCloud",
    title: "Sitemap - AstralCloud",
    description:
      "The best Minecraft server hosting starting at just $3/month with unlimited slots, 24/7/365 support, 2,000+ modpacks on one-click installs at 20 locations.",
  },
};

const Sitemap = () => {
  const sitemaps = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Sitemap", url: "/sitemap" },
    { name: "Politique de Confidentialité", url: "/privacy" },
    { name: "Terms Of Service", url: "/tos" },
    { name: "Service Level Agreement", url: "/sla" },
    { name: "Games Server Hosting", url: "/games" },
    { name: "Minecraft Server Hosting", url: "/minecraft-server-hosting" },
    // Add more sitemap here
  ];

  return (
    <section className="bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-2xl font-bold">AstralCloud Sitemap</div>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {sitemaps.map((sitemap, index) => (
            <li
              key={index}
              className="text-md grid- font-robotomono mb-4 font-normal"
            >
              <a href={sitemap.url}>{sitemap.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sitemap;
