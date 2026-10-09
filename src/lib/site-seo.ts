export const SITE_URL = "https://scent-launchpad-ai.lovable.app";
export const PAGE_TITLE = "Vesper by Sarkar — Smoky Amber Fragrance Concept";
export const PAGE_DESCRIPTION =
  "Explore Vesper, Kriya Mehta’s imagined 100ml smoky amber fragrance for Sarkar Perfume: cardamom, saffron leather and oud, with original Sarkar packaging.";

export const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Vesper — Sarkar Fragrance Concept",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#concept` },
      inLanguage: "en",
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#concept`,
      name: "Vesper fragrance concept",
      description: "An imagined smoky amber parfum and launch offer, retaining Sarkar Perfume’s existing bottle and packaging. Not an available retail product.",
      author: { "@type": "Person", name: "Kriya Mehta" },
      about: { "@type": "Brand", name: "Sarkar Perfume", url: "https://www.sarkar.store/" },
    },
  ],
};