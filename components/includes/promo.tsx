"use client";
import { useState } from "react";
import { faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Promo = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess("Copié!");
        setIsCopied(true);
        setTimeout(() => {
          setCopySuccess("");
          setIsCopied(false);
        }, 2000);
      },
      (err) => {
        setCopySuccess("Échec de la copie!");
      },
    );
  };

  const closeBadge = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="bg-teritiary px-6 py-2.5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <div className="flex flex-col items-center gap-2 lg:flex-row">
              <div
                className={`flex cursor-pointer items-center gap-2 rounded-xl border-2 border-dashed px-5 py-1 ${isCopied ? "cursor-default opacity-50" : ""}`}
                onClick={() => !isCopied && copyToClipboard("BIENVENUE")}
              >
                <FontAwesomeIcon icon={faCopy} />
                <p>{isCopied ? "COPIÉ ✓" : "BIENVENUE"}</p>
              </div>
              <p>
                Voici un code de <span className="font-bold">10%</span> sur votre première commande !
              </p>
            </div>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={closeBadge}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
