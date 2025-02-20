"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const UpdateSchemaOrg = () => {
  const pathname = usePathname();
  const fullUrl = `https://astralcloud.fr${pathname}`;

  useEffect(() => {
    const metaName = document.title || "Default Name";
    const metaDescription =
      document
        .querySelector("meta[name='description']")
        ?.getAttribute("content") || "Default Description";

    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: metaName,
      legalName: "AstralCloud",
      foundingDate: "1998",
      logo: "https://astralcloud.fr/assets/images/logo.png",
      image:
        "https://astralcloud.fr/assets/images/logo.png",
      url: fullUrl,
      description: metaDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Jl. Boulevard Bar. Raya No.6a, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
        addressLocality: "Jakarta",
        addressRegion: "Daerah Khusus Ibu Kota Jakarta",
        postalCode: "14240",
        addressCountry: "IDN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Support Agent",
        url: "https://astralcloud.fr/contact",
      },
      sameAs: [
        "https://www.facebook.com/astralcloud",
        "https://www.instagram.com/astralcloud/",
        "https://twitter.com/astralcloud",
        "https://www.youtube.com/channel/astralcloud",
      ],
    };

    const webSiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: fullUrl,
      name: metaName,
      description: metaDescription,
      image: {
        "@type": "ImageObject",
        url: "https://astralcloud.fr/assets/images/logo.png",
        width: "400",
        height: "400",
      },
      sameAs: [
        "https://www.facebook.com/astralcloud",
        "https://www.instagram.com/astralcloud/",
        "https://twitter.com/astralcloud",
        "https://www.youtube.com/channel/astralcloud",
      ],
    };

    const webPageData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metaName,
      description: metaDescription,
      inLanguage: "id-ID",
      url: fullUrl,
      mainEntity: {
        "@type": "Service",
        name: metaName,
        serviceType: "Gaming",
        provider: {
          "@type": "Organization",
          name: metaName,
          description: metaDescription,
          url: fullUrl,
          logo: "https://astralcloud.fr/assets/images/logo.png",
        },
        areaServed: "Worldwide",
        description: metaDescription,
        alternateName: [
          "Best game server hosting providers",
          "Game server solutions",
          "Game server hosting with modpack support",
          "Top-rated game server hosting services",
        ],
      },
    };

    const webPageElementData = {
      "@context": "https://schema.org",
      "@type": "WebPageElement",
      keywords:
        "astralcloud, astralcloudhosting, astralcloud hosting, game server hosting, Minecraft server",
      text: metaDescription,
      mentions: {
        "@type": "Thing",
        name: metaName,
      },
    };

    const productData = {
      "@context": "https://schema.org",
      "@type": "Product",
      aggregateRating: {
        "@type": "AggregateRating",
        bestRating: "5",
        ratingCount: "8000",
        ratingValue: "5",
        worstRating: "1",
      },
      image:
        "https://astralcloud.fr/assets/images/logo.png",
      name: metaName,
      sku: "mainPage",
      description: metaDescription,
      brand: { "@type": "Brand", name: "AstralCloud" },
      offers: {
        "@type": "AggregateOffer",
        url: fullUrl,
        availability: "https://schema.org/InStock",
        offerCount: 40,
        lowPrice: 3,
        highPrice: 97,
        priceCurrency: "EUR",
      },
    };

    const schemas = [
      organizationData,
      webSiteData,
      webPageData,
      webPageElementData,
      productData,
    ];

    schemas.forEach((schema) => {
      const existingScript = document.querySelector(
        `script[type="application/ld+json"][data-schema="${schema["@type"]}"]`,
      );
      const scriptContent = JSON.stringify(schema);
      if (existingScript) {
        existingScript.textContent = scriptContent;
      } else {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-schema", schema["@type"]);
        script.textContent = scriptContent;
        document.head.appendChild(script);
      }
    });
  }, [fullUrl, pathname]);

  return null;
};

export default UpdateSchemaOrg;
