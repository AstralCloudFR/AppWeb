"use client";
import { useState, useRef } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleCollapse = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleTransitionEnd = (index: number) => {
    if (activeIndex !== index && contentRefs.current[index]) {
      contentRefs.current[index]!.style.height = "0px";
    }
  };

  const faqData = [
    {
      question: "⚡ Vos serveurs sont-ils performants pour éviter les lags ?",
      answer: "Oui ! Nos serveurs sont équipés de processeurs haut de gamme et de disques NVMe pour garantir des performances optimales. Nous offrons également une protection anti-DDoS avancée pour assurer la stabilité de votre serveur.",
    },
    {
      question: "💰 Quels sont vos tarifs et y a-t-il une offre gratuite ?",
      answer: "Nous proposons différentes offres adaptées à tous les budgets. Vous pouvez consulter nos tarifs sur notre site. Une offre gratuite avec des ressources limitées est disponible pour tester nos services avant de passer à une offre premium.",
    },
    {
      question: "📞 Proposez-vous un support technique en cas de problème ?",
      answer: "Oui ! Notre équipe est disponible via ticket support sur le site ou discord & e-mail pour vous aider en cas de problème. Nous faisons de notre mieux pour répondre rapidement à toutes vos demandes.",
    },
    {
      question: "🛠 Comment gérer mon serveur ?",
      answer: "Nous utilisons le panneau Pterodactyl, une interface intuitive qui vous permet de gérer votre serveur facilement : redémarrage, installation de plugins, gestion des fichiers, et bien plus encore.",
    },
    {
      question: "💾 Faites-vous des sauvegardes régulières des serveurs ?",
      answer: "Oui, nous proposons un système de sauvegarde automatique pour protéger vos données. Vous pouvez également effectuer des sauvegardes manuelles via le panneau d’administration.",
    },
    {
      question: "🔄 Puis-je changer de plan ou upgrader mon serveur plus tard ?",
      answer: "Bien sûr, vous pouvez upgrader votre serveur à tout moment en fonction de vos besoins. Nous facilitons la transition sans interruption de service.",
    }
  ];

  return (
    <section className="overflow-hidden bg-secondary p-5 lg:p-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative flex flex-col items-center lg:items-start">
          <h2 className="text-center text-xl font-bold lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-md text-center text-gray-300 lg:text-left">
            Vous avez des questions ? Consultez ces FAQ issues de nos derniers clients.
            Si vous avez besoin d&apos;une aide supplémentaire, explorez notre base de connaissances ou contactez notre équipe d&apos;assistance.
          </p>
        </div>
        <ul className="space-y-2">
          {faqData.map((faq, index) => (
            <li
              key={index}
              className={`rounded-xl bg-primary p-5 hover:cursor-pointer hover:bg-teritiary ${
                activeIndex === index ? "bg-teritiary" : ""
              }`}
              onClick={() => toggleCollapse(index)}
            >
              <button className="flex w-full items-center justify-between text-left font-semibold">
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-6 w-6 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                  if (el && activeIndex === index) {
                    const scrollHeight = el.scrollHeight;
                    el.style.height = `${scrollHeight}px`;
                  }
                }}
                onTransitionEnd={() => handleTransitionEnd(index)}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "mt-2 opacity-100" : "mt-0 opacity-0"
                }`}
                style={{
                  height:
                    activeIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <p className="text-dark-n-500">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQs;
