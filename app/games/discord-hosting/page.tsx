import Pricing from "@/app/games/discord-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord Bot Hosting - AstralCloud",
  description:
    "Hébergez votre meilleur bot discord grâce à un serveur AstralCloud.",
  keywords:
    "bot discord, discord servers, creer bot discord, 247 minecraft server",
  openGraph: {
    title: "Discord Bot Hosting - AstralCloud",
    description:
      "Hébergez votre meilleur bot discord grâce à un serveur AstralCloud.",
  },
  twitter: {
    title: "Discord Bot Hosting - AstralCloud",
    description:
      "Hébergez votre meilleur bot discord grâce à un serveur AstralCloud.",
  },
};

const DiscordServerHosting = () => {
  return <Pricing />;
};

export default DiscordServerHosting;
