import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - AstralCloud",
  description:
    "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  keywords:
    "AstralCloud, AstralCloudhosting, AstralCloud hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "Politique de Confidentialité - AstralCloud",
    description:
      "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  },
  twitter: {
    title: "Politique de Confidentialité - AstralCloud",
    description:
      "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  },
};

const PrivacyPolicy = () => {
  return (
    <section className="bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="sticky top-20 max-w-[250px] rounded-xl border border-gray-200 p-5">
              <span className="text-secondary-200 mb-1 block text-sm font-medium">
                Table of Contents
              </span>
              <ul className="ml-5 flex list-decimal flex-col gap-2">
                {[
                  { id: "introduction", label: "Introduction" },
                  { id: "info-we-collect", label: "Information We Collect" },
                  { id: "use-of-info", label: "Use of Your Information" },
                  {
                    id: "personal-data",
                    label: "Our Stance on Selling Personal Data",
                  },
                  { id: "data-process", label: "Data Processing & GDPR" },
                  { id: "data-disclosure", label: "Data Disclosure" },
                  { id: "your-rights", label: "Your Rights Under GDPR" },
                  { id: "changes", label: "Changes to This Politique de Confidentialité" },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="documentStyling col-span-4 lg:col-span-3">
            <h1>Politique de Confidentialité</h1>
            <p>
              Last Updated: <strong>October 22, 2024</strong>
            </p>

            <Section
              id="introduction"
              title="Introduction"
              content={
                <p>
                  Welcome to AstralCloud, your trusted game service provider. We
                  are committed to safeguarding the privacy and security of your
                  data. This Politique de Confidentialité sets out our practices in compliance
                  with the General Data Protection Regulation (GDPR) and
                  relevant United Kingdom legislation.
                </p>
              }
            />

            <Section
              id="info-we-collect"
              title="Information We Collect"
              content={
                <>
                  <Subsection
                    number="2.1"
                    title="Information you provide to us"
                    items={[
                      "Account Information: Username, email address, password, and address.",
                      "Payment Information: We collect payment details such as credit card numbers, processed in strict compliance with the GDPR.",
                      "Personal Details: Names, addresses, and other identifiable information.",
                    ]}
                  />
                  <Subsection
                    number="2.2"
                    title="Automatically collected data"
                    items={[
                      "Log Data: IP address, browser type, device information, etc.",
                      "Game Data: Game saves, custom configurations, in-game interactions.",
                    ]}
                  />
                  <Subsection
                    number="2.3"
                    title="Information from third-party sources"
                    items={[
                      "Data we receive from affiliates, payment processors, and other partners.",
                    ]}
                  />
                </>
              }
            />

            <Section
              id="use-of-info"
              title="Use of Your Information"
              content={
                <ul className="ml-5 list-decimal">
                  {[
                    "Account Management: To set up, manage, and maintain your account.",
                    "Service Provision: To deliver, maintain, and improve our services.",
                    "Billing and Payments: To process transactions securely.",
                    "Communication: For service updates, billing alerts, and promotional content.",
                    "Support and Feedback: To address your queries and enhance user experience.",
                    "Analytics: To understand user behavior and optimize our services.",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
            />

            <Section
              id="personal-data"
              title="Our Stance on Selling Personal Data"
              content={
                <p>
                  We value your trust: we do not sell any of your personal data.
                  This commitment extends to every user without exception.
                </p>
              }
            />

            <Section
              id="data-process"
              title="Data Processing & GDPR"
              content={
                <>
                  <ul className="ml-5 list-decimal">
                    {[
                      "Transparency about how we use your data.",
                      "Purpose Limitation: We only collect data necessary for specified and legitimate purposes.",
                      "Data Minimisation: Only the minimal necessary data is collected.",
                      "Accuracy: We take steps to correct or delete inaccurate data.",
                      "Retention Control: We store data only for the necessary period.",
                      "Data Protection: We employ advanced security measures.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              }
            />

            <Section
              id="data-disclosure"
              title="Data Disclosure"
              content={
                <>
                  <ul className="ml-5 list-decimal">
                    {[
                      "Third-Party Service Providers: Exclusively to support our offerings, under strict GDPR-compliant agreements.",
                      "Legal Obligations: If required by law within the United Kingdom.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              }
            />

            <Section
              id="your-rights"
              title="Your Rights Under GDPR"
              content={
                <>
                  <ul className="ml-5 list-decimal">
                    {[
                      "Access your data.",
                      "Rectify incorrect data.",
                      "Erase your data.",
                      "Restrict or object to data processing.",
                      "Data portability.",
                      "Lodge a complaint with a supervisory authority.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              }
            />

            <Section
              id="changes"
              title="Changes to This Politique de Confidentialité"
              content={
                <p>
                  Periodically, we may update our Politique de Confidentialité. Any changes
                  will be communicated and made accessible on our platform.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => (
  <>
    <h2 id={id}>{title}</h2>
    {content}
    <br />
  </>
);

interface SubsectionProps {
  number: string;
  title: string;
  items: string[];
}

const Subsection: React.FC<SubsectionProps> = ({ number, title, items }) => (
  <>
    <strong>{`${number}. `}</strong>
    {title}
    <ul className="ml-5 list-decimal">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <br />
  </>
);

export default PrivacyPolicy;
