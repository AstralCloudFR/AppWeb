import Image from "next/image";
import GameCard from "@/app/games/gamecard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Server Hosting - AstralCloud",
  description:
    "See our list of all games you can rent a server for from AstralCloud. Find private game server hosting for Minecraft, Valheim, ARK, Terraria, and many others.",
  keywords:
    "Game servers, game server hosting, host games AstralCloud, AstralCloudhosting, AstralCloud hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "Game Server Hosting - AstralCloud",
    description:
      "See our list of all games you can rent a server for from AstralCloud. Find private game server hosting for Minecraft, Valheim, ARK, Terraria, and many others.",
  },
  twitter: {
    title: "Game Server Hosting - AstralCloud",
    description:
      "See our list of all games you can rent a server for from AstralCloud. Find private game server hosting for Minecraft, Valheim, ARK, Terraria, and many others.",
  },
};

const Games = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(30,34,39,.80) 100%, rgba(30,34,39,.80) 100%), url('/assets/images/games/breadcrumb.webp')`,
              }}
            ></div>
            <div className="relative mx-auto max-w-7xl">
              <div className="relative flex flex-row gap-5 overflow-hidden p-8">
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-bold lg:text-3xl">
                    Nos services
                  </h1>
                  <p className="text-gray-300">
                    AstralCloud propose l&apos;hébergement de serveurs pour les jeux les plus populaires auxquels vous pouvez penser.
                  </p>
                </div>
                <Image
                  src="/assets/images/games/bcr.webp"
                  alt="Breadcrumb"
                  width={200}
                  height={0}
                  className="absolute right-12 top-2 hidden drop-shadow-md lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <GameCard />
    </>
  );
};

export default Games;
