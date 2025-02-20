import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV/CGU - AstralCloud",
  description:
    "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  keywords:
    "AstralCloud, AstralCloudhosting, AstralCloud hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "CGV/CGU - AstralCloud",
    description:
      "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  },
  twitter: {
    title: "CGV/CGU - AstralCloud",
    description:
      "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  },
};

const ServiceLevelAgreement = () => {
  return (
    <section className="bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="border-secondary-400 sticky top-20 max-w-[250px] rounded-xl border p-5">
              <span className="text-secondary-200 mb-1 block text-sm font-medium">
                Table of Contents
              </span>
              <ul className="ml-5 flex list-decimal flex-col gap-2">
                {[
                  { id: "introduction", label: "A Brief Introduction" },
                  { id: "sla-coverage", label: "SLA Coverage" },
                  { id: "sla-limitations", label: "SLA Limitations" },
                  {
                    id: "non-compliance-claims",
                    label: "Non-Compliance Claims",
                  },
                  { id: "amendment", label: "Amendment" },
                  { id: "contact-us", label: "Contact Us" },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="documentStyling col-span-4 lg:col-span-3">
            <h1>Service Level Agreement (SLA)</h1>

            <Section
              id="introduction"
              title="A Brief Introduction"
              content={
                <p>
                  We are very confident in the reliability of the service we
                  provide with a proven track record of over 5 years. We
                  understand firsthand how crucial it is for an online service
                  to maintain high-availability, which is why we provide an SLA
                  (Service Level Agreement) to cover our clients in the event of
                  a service disruption. The following services of ours are
                  covered by this Service Level Agreement: Minecraft server
                  hosting, Minecraft Pocket Edition server hosting, TeamSpeak
                  server hosting.
                </p>
              }
            />

            <Section
              id="sla-coverage"
              title="SLA Coverage"
              content={
                <>
                  <p>
                    Our SLA only applies to the following types of
                    interruptions:
                  </p>
                  <ul className="ml-5 list-decimal">
                    <li>
                      <strong>Network</strong> - We guarantee 100% network
                      availability to all applicable services. If at any time
                      our service does not maintain this agreement for 5
                      consecutive minutes, the affected service will be covered
                      by our SLA.
                    </li>
                    <li>
                      <strong>Hardware</strong> - We guarantee our physical
                      machines will be able to supply service at all times for
                      all applicable services. If at any time our machines are
                      not able to maintain this agreement for 5 consecutive
                      minutes, the affected service will be covered by our SLA.
                    </li>
                    <li>
                      <strong>Denial of Service Attack (DoS/DDoS)</strong> - We
                      guarantee protection against all types of Denial of
                      Service attacks. If we are unable to mitigate a denial of
                      service attack within 5 minutes, the affected service will
                      be covered by our SLA.
                    </li>
                  </ul>
                </>
              }
            />

            <Section
              id="sla-limitations"
              title="SLA Limitations"
              content={
                <>
                  <p>
                    Our SLA does not apply under the following circumstances:
                  </p>
                  <ul className="ml-5 list-decimal">
                    <li>
                      Planned Maintenance - Occasionally we need to perform
                      maintenance on our services that may result in temporary
                      downtime. We announce all planned maintenance in advance
                      via email or on our website.
                    </li>
                    <li>
                      Software Error/Failures - Software is not within the scope
                      of our service. Therefore we do not cover errors, crashes
                      or any service interruptions caused by software.
                    </li>
                    <li>
                      Interruptions caused by the client - We do not cover
                      issues caused by the client such as installing third-party
                      files and software or custom scripts.
                    </li>
                    <li>
                      Exceeding allocated resources - Interruptions due to the
                      affected service using more resources than available are
                      not covered.
                    </li>
                    <li>
                      Circumstances beyond our control - Force majeure or any
                      act of God which results in failure of service.
                    </li>
                  </ul>
                </>
              }
            />

            <Section
              id="non-compliance-claims"
              title="Non-Compliance Claims"
              content={
                <>
                  <p>
                    In the event of non-compliance, the client will be
                    compensated as per the terms below:
                  </p>
                  <ul className="ml-5 list-decimal">
                    <li>
                      For every minute of downtime, we will provide an
                      equivalent extension to the affected service, rounded up
                      to the nearest day.
                    </li>
                    <li>
                      To receive service compensation, the client must create an
                      SLA claim via support ticket from their authorised client
                      account.
                    </li>
                    <li>
                      SLA claims must be submitted within one week (seven days)
                      of the outage.
                    </li>
                    <li>
                      All SLA claims will be investigated. The outcome of such
                      claims will be decided at the sole discretion of our
                      company.
                    </li>
                    <li>
                      Any SLA claims we deem to be fraudulent will be rejected.
                    </li>
                    <li>
                      We reserve the right to deny SLA claims if we believe the
                      client has purposely attempted to cause a service
                      disruption to claim against our SLA (e.g: if we believe
                      the client was involved in initiating a denial of service
                      attack against their own service).
                    </li>
                    <li>
                      This SLA is only valid for direct clients. We are not
                      liable for downtime caused by any reseller of our
                      services.
                    </li>
                  </ul>
                </>
              }
            />

            <Section
              id="amendment"
              title="Amendment"
              content={
                <p>
                  We reserve the right to amend or vary the terms of our SLA at
                  any time. Any changes will be reflected immediately on this
                  page.
                </p>
              }
            />

            <Section
              id="contact-us"
              title="Contact Us"
              content={
                <p>
                  If you require any clarification of our SLA or have any
                  questions, please contact us.
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

export default ServiceLevelAgreement;
