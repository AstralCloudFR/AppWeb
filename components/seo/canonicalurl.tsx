"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const UpdateMetaTags = () => {
  const pathname = usePathname();
  const fullUrl = `https://astralcloud.fr${pathname}`;

  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullUrl);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", fullUrl);
      document.head.appendChild(link);
    }

    const ogUrlMeta = document.querySelector("meta[property='og:url']");
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", fullUrl);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      meta.setAttribute("content", fullUrl);
      document.head.appendChild(meta);
    }
  }, [fullUrl]);

  return null;
};

export default UpdateMetaTags;
