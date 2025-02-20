import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation - AstralCloud",
  description:
      "AstralCloud propose des solutions d'hébergement performantes pour vos serveurs de jeux et vos sites web. Profitez d'un service fiable et d'un support réactif dès 2,99€/mois.",
  keywords:
      "AstralCloud, hébergement de serveurs, serveur Minecraft, Pterodactyl, hébergement web, solutions cloud, VPS, serveur dédié, gestion de serveurs, support premium, offre abordable, gaming hosting, modpacks, serveur performant",
  openGraph: {
    title: "Conditions d'utilisation - AstralCloud",
    description:
        "AstralCloud propose des solutions d'hébergement performantes pour vos serveurs de jeux et vos sites web. Profitez d'un service fiable et d'un support réactif dès 2,99€/mois.",
  },
  twitter: {
    title: "Conditions d'utilisation - AstralCloud",
    description:
        "AstralCloud propose des solutions d'hébergement performantes pour vos serveurs de jeux et vos sites web. Profitez d'un service fiable et d'un support réactif dès 2,99€/mois.",
  },
};

const TermsOfService = () => {
  return (
      <section className="bg-secondary p-5 lg:p-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-4">
            <div className="col-span-1 lg:col-span-1">
              <div className="border-secondary-400 sticky top-20 max-w-[250px] rounded-xl border p-5">
              <span className="text-secondary-200 mb-1 block text-sm font-medium">
                Table des matières
              </span>
                <ul className="ml-5 flex list-decimal flex-col gap-2">
                  {[
                    { id: "header1", label: "Définitions" },
                    { id: "header2", label: "Compte et accès aux services" },
                    { id: "header3", label: "Utilisation des services" },
                    { id: "header4", label: "Facturation et paiements" },
                    { id: "header5", label: "Propriété intellectuelle et données" },
                    { id: "header6", label: "Responsabilité et garanties" },
                    { id: "header7", label: "Suspension et résiliation" },
                    { id: "header8", label: "Confidentialité et sécurité" },
                    { id: "header9", label: "Remboursements et annulations" },
                    { id: "header10", label: "Droit applicable et litiges" },
                  ].map(({ id, label }) => (
                      <li key={id}>
                        <a href={`#${id}`}>{label}</a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="documentStyling col-span-4 lg:col-span-3">
              <h1>Conditions d&apos;utilisation</h1>
              <p>Date d&apos;entrée en vigueur : <strong>01/02/2025</strong></p>

              <Section id="header1" title="Définitions" content={
                <>
                  <p><strong>1.1.</strong> &quot;AstralCloud&quot; désigne la plateforme d&apos;hébergement de serveurs et de sites web exploitée par BRUMON Muriel.</p>
                  <p><strong>1.2.</strong> &quot;Client&quot; désigne toute personne ou entité utilisant nos services d&apos;hébergement.</p>
                  <p><strong>1.3.</strong> &quot;Services&quot; désigne l&apos;hébergement de serveurs de jeux (Minecraft, PocketMine, etc.), l&apos;hébergement web et les services connexes proposés par AstralCloud.</p>
                </>
              } />

              <Section id="header2" title="Compte et accès aux services" content={
                <>
                  <p><strong>2.1.</strong> Pour accéder à nos services, le client doit créer un compte et fournir des informations exactes.</p>
                  <p><strong>2.2.</strong> L&apos;utilisation frauduleuse ou abusive du compte entraîne une suspension immédiate.</p>
                </>
              } />

              <Section id="header3" title="Utilisation des services" content={
                <>
                  <p><strong>3.1.</strong> Les services doivent être utilisés conformément aux lois en vigueur et aux règles d&apos;AstralCloud.</p>
                  <p><strong>3.2.</strong> L&apos;hébergement de contenu illégal, nuisible ou portant atteinte aux droits d&apos;autrui est interdit.</p>
                </>
              } />

              <Section id="header4" title="Facturation et paiements" content={
                <>
                  <p><strong>4.1.</strong> Nos services sont facturés mensuellement ou annuellement selon l&apos;offre choisie.</p>
                  <p><strong>4.2.</strong> Aucune prestation ne sera fournie en cas de non-paiement.</p>
                </>
              } />

              <Section id="header5" title="Propriété intellectuelle et données" content={
                <>
                  <p><strong>5.1.</strong> Le client conserve la propriété de ses données, mais accorde à AstralCloud le droit de les utiliser pour fournir les services.</p>
                  <p><strong>5.2.</strong> AstralCloud ne pourra être tenu responsable des pertes de données causées par le client.</p>
                </>
              } />

              <Section id="header6" title="Responsabilité et garanties" content={
                <>
                  <p><strong>6.1.</strong> AstralCloud ne garantit pas une disponibilité continue et sans erreur des services.</p>
                  <p><strong>6.2.</strong> La responsabilité d&apos;AstralCloud est limitée aux montants payés par le client.</p>
                </>
              } />

              <Section id="header7" title="Suspension et résiliation" content={
                <>
                  <p><strong>7.1.</strong> AstralCloud se réserve le droit de suspendre ou de résilier un compte en cas de non-respect des conditions d&apos;utilisation.</p>
                </>
              } />

              <Section id="header8" title="Confidentialité et sécurité" content={
                <>
                  <p><strong>8.1.</strong> Les données clients sont protégées et ne seront jamais revendues à des tiers.</p>
                </>
              } />

              <Section id="header9" title="Remboursements et annulations" content={
                <>
                  <p><strong>9.1.</strong> Aucun remboursement n&apos;est possible après activation du service, sauf en cas de dysfonctionnement avéré imputable à AstralCloud.</p>
                  <p><strong>9.2.</strong> Les clients peuvent annuler leur abonnement à tout moment, mais aucun remboursement ne sera effectué pour la période restante.</p>
                </>
              } />
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

export default TermsOfService;
