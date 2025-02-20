"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTurnDown } from "@fortawesome/free-solid-svg-icons";

const games = [
  {
    name: "Minecraft Java",
    src: "/assets/images/homepage/java.png",
    alt: "Serveurs de jeu Minecraft Java",
    background: { src: "/assets/images/homepage/background-java.png" },
  },
  {
    name: "Minecraft Bedrock",
    src: "/assets/images/homepage/bedrock.png",
    alt: "Serveurs de jeu Minecraft Bedrock",
    background: { src: "/assets/images/homepage/background-bedrock.png" },
  },
  {
    name: "Bot Discord",
    src: "/assets/images/homepage/discord.png",
    alt: "Serveur Bot Discord",
    background: { src: "/assets/images/homepage/background-discord.png" },
  },
];
const others = [
  {
    name: "Serveurs VPS",
    src: "/assets/images/homepage/vps.png",
    alt: "Serveurs VPS",
    background: { src: "/assets/images/homepage/background-vps.png" },
  },
  {
    name: "Serveurs Pterodactyl",
    src: "/assets/images/homepage/pterodactyl.png",
    alt: "Serveurs Pterodactyl",
    background: { src: "/assets/images/homepage/background-pterodactyl.png" },
  }
]

const defaultBackground = "/assets/images/homepage/background.jpg";

const ScrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HomePage = () => {
  const [activeGame, setActiveGame] = useState<string>("Jeux");
  const [activeOther, setActiveOther] = useState<string>("");
  const [backgroundIndex, setBackgroundIndex] = useState<number>(-1);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
      setBackgroundIndex(games.findIndex((game) => game.name === activeGame));
    }, 200);

    return () => clearTimeout(timeout);
  }, [activeGame]);

  const handleBackgroundChange = (name: string) => {
    if (name !== activeGame) {
      setFade(false);
      setActiveGame(name);
    }
  };

  return (
    <section className="relative overflow-hidden bg-secondary p-5 lg:p-16">
      <div
        className={`absolute inset-0 h-[20rem] w-full bg-cover bg-center transition-opacity duration-200 ease-in-out lg:h-[40rem] ${
          fade ? "opacity-100" : "opacity-10"
        }`}
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, .70), #23272E), url(${backgroundIndex === -1 ? defaultBackground : games[backgroundIndex].background.src})`,
        }}
      ></div>
      <div className="container relative mx-auto flex max-w-7xl flex-col gap-10">
        <div className="mx-auto flex max-w-[48rem] flex-col items-center gap-6 text-center lg:mx-0 lg:items-start lg:text-left">
          <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
            {activeGame === "Jeux"
              ? "AstralCloud"
              : `Des serveurs ${activeGame}`}
          </h1>
          <p className="max-w-xl">
            Des serveurs pour vos plus grands défis !
          </p>
        </div>
        <Link href="/games" className="lg:hidden">
          <button className="w-full rounded-xl border border-teritiary bg-primary py-3 text-center text-sm font-semibold active:opacity-80">
            Voir tout les jeux
          </button>
        </Link>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="hidden flex-col gap-5 lg:flex">
            <Link href="/games">
              <span className="flex cursor-pointer items-center gap-2 hover:underline hover:underline-offset-2">
                {activeGame}
                <FontAwesomeIcon icon={faPlay} className="opacity-80" />
              </span>
            </Link>
            <div className="relative flex w-full flex-col gap-5 lg:w-[37.75rem]">
              <div className="flex gap-3 overflow-hidden">
                {games.map((game, index) => (
                  <div key={index} className="aspect-[3/4]">
                    <Image
                      src={game.src}
                      alt={game.alt}
                      width={300}
                      height={400}
                      className={`shrink-0 origin-top-right cursor-pointer rounded-xl border-2 border-teritiary object-cover transition duration-200 ${
                        game.name === activeGame
                          ? "opacity-100"
                          : "scale-90 opacity-50 hover:opacity-100"
                      }`}
                      onClick={() => handleBackgroundChange(game.name)}
                    />
                  </div>
                ))}
                {others.map((other, index) => (
                    <div key={index} className="aspect-[3/4]">
                      <Image
                          src={other.src}
                          alt={other.alt}
                          width={300}
                          height={400}
                          className={`shrink-0 origin-top-right cursor-pointer rounded-xl border-2 border-teritiary object-cover transition duration-200 ${
                              other.name === activeGame
                                  ? "opacity-100"
                                  : "scale-90 opacity-50 hover:opacity-100"
                          }`}
                          onClick={() => handleBackgroundChange(other.name)}
                      />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden cursor-pointer lg:block">
          <FontAwesomeIcon
            icon={faTurnDown}
            size="2x"
            onClick={() => ScrollToElement("trustpilot")}
            className="text-gray-500 opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
