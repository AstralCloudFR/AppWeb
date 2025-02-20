"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHardDrive,
  faHeadset,
  faMemory,
  faMicrochip,
  faShield,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "DIRT",
    memory: "1024 MB",
    pricebasic: "3.00€",
    pricepremium: "4.00€",
    vCore: 2,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/stone.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#7A8998",
  },
  {
    name: "COAL",
    memory: "2048 MB",
    pricebasic: "6.00€",
    pricepremium: "7.00€",
    vCore: 2,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/coal.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#474747",
  },
  {
    name: "IRON",
    memory: "3072 MB",
    pricebasic: "9.00€",
    pricepremium: "10.00€",
    vCore: 6,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/iron.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#FCB577",
  },
  {
    name: "GOLD",
    memory: "4096 MB",
    pricebasic: "12.00€",
    pricepremium: "13.00€",
    vCore: 8,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/gold.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#DECD2E",
  },
  {
    name: "LAPIS",
    memory: "5120 MB",
    pricebasic: "15.00€",
    pricepremium: "16.00€",
    vCore: 10,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/lapis.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#0063CD",
  },
  {
    name: "REDSTONE",
    memory: "6144 MB",
    pricebasic: "18.00€",
    pricepremium: "19.00€",
    vCore: 12,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/redstone.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#DC362B",
  },
  {
    name: "DIAMOND",
    memory: "8192 MB",
    pricebasic: "24.00",
    pricepremium: "25.00€",
    vCore: 14,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/diamond.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#1DCDE2",
  },
  {
    name: "EMERALD",
    memory: "12288 MB",
    pricebasic: "36.00€",
    pricepremium: "37.00€",
    vCore: 16,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/emerald.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#65E185",
  },
  {
    name: "AMETHYST",
    memory: "16384 MB",
    pricebasic: "48.00€",
    pricepremium: "49.00€",
    vCore: 18,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/amethyst.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#BD4CD8",
  },
  {
    name: "BEACON",
    memory: "32768 MB",
    pricebasic: "96.00€",
    pricepremium: "97.00€",
    vCore: 20,
    diskSpace: "1GB",
    image: "/assets/images/games/minecraft-java-hosting/beacon.webp",
    linkbasic: "",
    linkpremium: "",
    color: "#09A9D7",
  },
];

const features = [
  "Node.js",
  "Python",
  "Java",
  "PHP",
  "100% Uptime",
];

const PlanCard = ({ plan, isPremium }: { plan: any; isPremium: boolean }) => (
  <div
    className="flex flex-col rounded-xl bg-primary px-6 py-10 hover:outline"
    style={{ outlineColor: plan.color }}
  >
    <div className="flex items-center justify-between">
      <div className="flex flex-col text-xl font-bold">
        <small style={{ color: plan.color }}>{plan.name}</small>
        {plan.memory}
      </div>
      <Image src={plan.image} alt={`${plan.name} Plan`} width={75} height={0} />
    </div>
    <ul className="mt-6">
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUsers} className="w-5" />
        {plan.vCore} vCore
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHardDrive} className="w-5" />
        {plan.diskSpace}Espace disque
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faShield} className="w-5" />
        Anti DDoS
      </li>
    </ul>
    <div className="mt-6 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[12px]">À partir de</span>
        <h3 className="text-xl font-bold">
          {isPremium ? plan.pricepremium : plan.pricebasic}
          <small>/mo</small>
        </h3>
      </div>
      <Link
        href={isPremium ? plan.linkpremium : plan.linkbasic}
        className="flex items-end"
      >
        <div
          className="rounded-full bg-teritiary p-5 hover:bg-primary hover:outline active:bg-secondary"
          style={{ outlineColor: plan.color }}
        >
          <FontAwesomeIcon icon={faGear} className="w-6" />
        </div>
      </Link>
    </div>
  </div>
);

const Pricing = () => {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/games/minecraft-server-hosting/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            MINECRAFT SERVER HOSTING
          </h1>
          <p className="w-full text-lg md:w-[700px]">
            Upgrade to premium to unlock all locations randomly and enjoy the
            benefits of our premium hardware and exclusive features.
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex flex-row gap-1 text-center md:mb-0">
              {["Basic", "Premium"].map((label, index) => {
                const isActive = (label === "Premium") === isPremium;
                return (
                  <button
                    key={label}
                    className={`w-40 rounded-xl py-4 hover:cursor-pointer ${
                      isActive
                        ? "bg-secondary"
                        : "bg-none hover:outline hover:outline-teritiary"
                    }`}
                    onClick={() => setIsPremium(label === "Premium")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col items-center gap-4 text-center md:flex-row">
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMicrochip} className="w-5" /> CPU:{" "}
                {isPremium ? "5 GHz" : "3.2 GHz"} AMD Ryzen 7 PRO 3700
              </div>
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMemory} className="w-5" /> RAM:{" "}
                {isPremium ? "DDR4 2400 MHz" : "DDR4 2133 MHz"}
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faHardDrive} className="w-5" /> SSD:{" "}
                {isPremium
                  ? "NVMe (2500+ MB/s r/w)"
                  : "SOFT RAID 1 (400 MB/s r/w)"}
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} isPremium={isPremium} />
            ))}
          </div>

          <div className="mt-5 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex gap-2 md:mb-0">
              <FontAwesomeIcon
                size="3x"
                icon={faHeadset}
                className="h-12 text-blue-500"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">Need help picking a plan?</h2>
                <p>
                  Our sales team is available to answer any questions you may
                  have.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <button className="w-40 rounded-xl bg-teritiary py-4 hover:bg-opacity-0 hover:outline hover:outline-teritiary active:bg-teritiary">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat px-6"
        style={{
          backgroundImage: `linear-gradient(164deg, rgba(124, 58, 237, 0.9) 11.33%, rgba(124, 58, 237, 0.9) 88.67%), 
        url('/assets/images/games/minecraft-server-hosting/features.webp')`,
        }}
      >
        <div className="container relative mx-auto flex max-w-7xl flex-col gap-6 py-12">
          <div className="flex justify-center">
            <h2 className="text-center text-xl font-bold lg:text-3xl">
              Included With All Plans
            </h2>
          </div>
          <Image
            src="/assets/images/games/minecraft-server-hosting/minecraft-characters.webp"
            alt="Minecraft characters"
            width={250}
            height={0}
            className="-z-1 absolute bottom-0 left-40 hidden -translate-x-full scale-x-[-1] transform 2xl:block"
            priority
          />
          <Image
            src="/assets/images/games/minecraft-server-hosting/minecraft-characters.webp"
            alt="Minecraft characters"
            width={250}
            height={0}
            className="-z-1 absolute -right-80 bottom-0 hidden -translate-x-full 2xl:block"
            priority
          />
          <ul className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 rounded-xl bg-primary/60 px-5 py-2.5 backdrop-blur"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg> */}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default Pricing;
