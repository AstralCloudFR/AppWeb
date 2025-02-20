import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - AstralCloud",
  description:
    "We provide the best support in the industry with 24/7/365 support tickets along with chat support.",
  keywords:
    "AstralCloud, AstralCloudhosting, AstralCloud hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "Contact Us - AstralCloud",
    description:
      "We provide the best support in the industry with 24/7/365 support tickets along with chat support.",
  },
  twitter: {
    title: "Contact Us - AstralCloud",
    description:
      "We provide the best support in the industry with 24/7/365 support tickets along with chat support.",
  },
};

const Contact = () => {
  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/contact/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            Contact AstralCloud
          </h1>
          <p className="w-full text-gray-300 md:w-[700px]">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {["Open Ticket", "Knowledge Base", "Live Chat"].map(
            (title, index) => {
              const href =
                title === "Open Ticket"
                  ? "#openticket"
                  : title === "Knowledge Base"
                    ? "#knowledgebase"
                    : "#livechat";
              return (
                <Link key={index} href={href}>
                  <div className="rounded-xl bg-gray-700 p-6 text-center hover:cursor-pointer hover:outline hover:outline-gray-200">
                    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                    <p>
                      {title === "Open Ticket"
                        ? "Open a support ticket for service related issues."
                        : title === "Knowledge Base"
                          ? "Find answers to common questions in our knowledge base."
                          : "Chat with our support team for immediate assistance."}
                    </p>
                  </div>
                </Link>
              );
            },
          )}
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="col-span-2">
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl bg-gray-700 p-3"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl bg-gray-700 p-3"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl bg-gray-700 p-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl bg-gray-700 p-3"
                />
              </div>
              <textarea
                placeholder="Message"
                className="h-44 w-full rounded-xl bg-gray-700 p-3"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3 hover:bg-teritiary"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Company Information</h2>
            <p className="mb-4">
              Our company is committed to providing the best services to our
              clients. Please reach out to us using the contact information
              below.
            </p>
            <div className="space-y-2">
              <div>
                <h3 className="font-bold">Address</h3>
                <p>
                  SILVER LAKE, United States 1941 Late Avenue Zip Code/Postal
                  code:03875
                </p>
              </div>
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p>
                  Call us to speak to a member of our team. We are always happy
                  to help. +1 (646) 786-5060
                </p>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p>support@AstralCloud.id</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
