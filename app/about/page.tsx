import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos De Nous - AstralCloud",
  description:
    "Learn about AstralCloud, where you can rent servers for Minecraft and 50++ different games. See how we make it easy to host your own server community.",
  keywords:
    "AstralCloud, AstralCloudhosting, AstralCloud hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "À Propos De Nous - AstralCloud",
    description:
      "Learn about AstralCloud, where you can rent servers for Minecraft and 50++ different games. See how we make it easy to host your own server community.",
  },
  twitter: {
    title: "À Propos De Nous - AstralCloud",
    description:
      "Learn about AstralCloud, where you can rent servers for Minecraft and 50++ different games. See how we make it easy to host your own server community.",
  },
};

const About = () => {
  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/about/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            About AstralCloud
          </h1>
          <p className="w-full text-gray-300 md:w-[700px]">
            Based in Jakarta, Indonesia, AstralCloud is a leading player-owned
            game server hosting provider since 1998.
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="mx-auto max-w-7xl">
          <div className="bg relative w-full px-6 py-[3.75rem]">
            <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="order-2 mx-auto flex w-full flex-col sm:max-w-[28rem] lg:order-1 lg:mx-0 lg:block">
                <div className="flex gap-x-4 text-center lg:text-left">
                  <div className="w-full">
                    <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem]">
                      Our Company
                    </h2>
                  </div>
                </div>
                <div className="text-dark-n-300 mt-3 flex flex-col gap-3 text-center text-base leading-6 lg:text-left">
                  <p>
                    AstralCloud offers{" "}
                    <b>premium services at unbeatable prices</b>. Founded in
                    March 1998, we&apos;re among the longest-running Minecraft
                    server hosting providers.
                  </p>
                  <p>
                    We&apos;re committed to delivering an{" "}
                    <b>exceptional user experience</b> by leveraging{" "}
                    <b>top-tier hardware</b> and maintaining a{" "}
                    <b>24/7 global support team</b>. Plus, with our risk-free
                    72-hour money-back guarantee, there&apos;s no reason to
                    wait. Join us today!
                  </p>
                </div>
              </div>
              <div className="order-1 flex items-center justify-center overflow-hidden rounded-xl lg:order-2">
                <Image
                  alt="Company"
                  src="/assets/images/about/about1.webp"
                  className="h-[16.75rem] w-[25rem] object-cover sm:h-[27rem] sm:w-[40rem]"
                  width={1280}
                  height={0}
                />
              </div>
            </div>
          </div>

          <section className="bg-dark-n-0 relative w-full px-6 py-[3.75rem]">
            <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="order-2 mx-auto flex w-full flex-col sm:max-w-[28rem] lg:mx-0 lg:block lg:pl-10">
                <div className="flex gap-x-4 text-center lg:text-left">
                  <div className="w-full">
                    <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem]">
                      Our Mission
                    </h2>
                  </div>
                </div>
                <div className="text-dark-n-300 mt-3 flex flex-col gap-3 text-center text-base leading-6 lg:text-left">
                  <p>
                    Our mission is to make it easy and affordable for anyone to
                    operate any kind of internet service at any scale.
                  </p>
                  <p>
                    Our team, consisting of passionate gamers and experienced
                    developers, with years of experience in the game server
                    hosting industry.
                  </p>
                </div>
              </div>
              <div className="order-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image
                  width={1280}
                  height={0}
                  alt="Mission"
                  src="/assets/images/about/about2.webp"
                  className="h-[16.75rem] w-[25rem] object-cover sm:h-[27rem] sm:w-[40rem]"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
