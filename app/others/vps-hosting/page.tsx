import Pricing from "@/app/games/minecraft-java-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VPS Server Hosting - AstralCloud",
  description:
    "Create the best Minecraft server with AstralCloud. Support provided for modded server hosting, modpacks, mods, and plugins. Play your game how you want.",
  keywords:
    "minecraft server, minecraft servers, create minecraft server, 247 minecraft server",
  openGraph: {
    title: "Minecraft Server Hosting - AstralCloud",
    description:
      "Create the best Minecraft server with AstralCloud. Support provided for modded server hosting, modpacks, mods, and plugins. Play your game how you want.",
  },
  twitter: {
    title: "Minecraft Server Hosting - AstralCloud",
    description:
      "Create the best Minecraft server with AstralCloud. Support provided for modded server hosting, modpacks, mods, and plugins. Play your game how you want.",
  },
};

const VPSServerHosting = () => {
  return <Pricing />;
};

export default VPSServerHosting;
