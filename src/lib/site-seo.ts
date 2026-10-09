export const SITE_URL = "https://scent-launchpad-ai.lovable.app";
export const PAGE_TITLE = "Vesper by Sarkar — Smoky Amber Fragrance Concept";
export const PAGE_DESCRIPTION =
  "Explore Vesper, Kriya Mehta’s imagined 100ml smoky amber fragrance for Sarkar Perfume: cardamom, saffron leather and oud, with original Sarkar packaging.";

// Shared by the visible answers and FAQPage markup; keep claims identical.
export const conceptFaqs = [
  {
    question: "What is Vesper by Sarkar?",
    answer: "Vesper is an imagined 100ml smoky amber parfum created by Kriya Mehta as a fragrance concept for Sarkar Perfume. It is a creative exercise, not an official Sarkar launch or a confirmed retail product.",
  },
  {
    question: "What are the fragrance notes in the Vesper concept?",
    answer: "Vesper’s proposed top notes are cardamom, black plum and bergamot. Its heart notes are saffron, leather and Damask rose; its base notes are oud, amber and tonka. These describe the imagined scent, not a verified commercial formula.",
  },
  {
    question: "Does Vesper change the Sarkar bottle or packaging?",
    answer: "No. The Vesper concept keeps the existing Sarkar chess-king bottle and original outer packaging unchanged. The bottle and packaging images come from the official Sarkar Perfume store; they do not show a newly manufactured Vesper product.",
  },
  {
    question: "Is the Vesper concept unisex, and when would you wear it?",
    answer: "Vesper is imagined as a unisex smoky amber fragrance for evenings, dinners and late drives. Its saffron, leather, oud and amber character is a creative scent direction, not a tested wear recommendation.",
  },
  {
    question: "How long does Vesper last, and what is its concentration?",
    answer: "The concept proposes 8–10 hours of longevity and a 24% parfum oil concentration. Neither figure has been independently tested for Vesper. Actual longevity depends on the finished formula, skin, application and climate; the page’s IFRA-safety statement is not a verified certification.",
  },
  {
    question: "What are the proposed Vesper prices and launch offers?",
    answer: "The imagined launch offers are The One Bottle at ₹1,499 for 100ml Vesper, The Night Set at ₹2,599 for Vesper 100ml plus Orion 100ml, and The Try-First at ₹299 for a 7ml Vesper travel spray. Freebies, discounts and sample credit are creative proposals, not live Sarkar store offers.",
  },
  {
    question: "Can I buy Vesper or add it to a cart on this page?",
    answer: "No. This page does not sell Vesper, process payments or add items to a cart. Its store links open the official Sarkar Perfume website at https://www.sarkar.store/, where you can check available fragrances and current prices.",
  },
  {
    question: "Are shipping, tax and return terms confirmed for Vesper?",
    answer: "No. Tax-inclusive pricing, free shipping across India, dispatch in 24–36 hours and 7-day returns on unopened bottles are proposed terms for the imagined launch. They are not verified Sarkar policies. Check the official store’s current terms before buying any available product.",
  },
  {
    question: "Who created this page, and is it affiliated with Sarkar Perfume?",
    answer: "Kriya Mehta created the Vesper fragrance concept. Sarkar Perfume is the brand used for the creative exercise and the source of the original packaging imagery. This page does not claim official affiliation, endorsement or approval by Sarkar Perfume.",
  },
  {
    question: "Where can I verify Sarkar products and product information?",
    answer: "Use the official Sarkar Perfume store at https://www.sarkar.store/ for available products, product descriptions, prices and purchasing policies. This concept page is a source for Kriya Mehta’s Vesper idea only, not evidence of an available product, laboratory-tested performance or customer reviews.",
  },
];

export const DATE_PUBLISHED = "2026-10-09";

export const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Vesper — Sarkar Fragrance Concept",
      inLanguage: "en",
      hasPart: { "@id": `${SITE_URL}/#faq` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#concept` },
      author: { "@id": `${SITE_URL}/#author` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_PUBLISHED,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#author`,
      name: "Kriya Mehta",
      description: "Creator of the Vesper fragrance concept for Sarkar Perfume — an independent creative exercise, not an official Sarkar launch.",
      knowsAbout: ["fragrance design", "perfume notes", "brand concept development"],
    },
    {
      "@type": "Organization",
      "@id": "https://www.sarkar.store/#organization",
      name: "Sarkar Perfume",
      url: "https://www.sarkar.store/",
      description: "Indian perfume house whose existing chess-king bottle and packaging the Vesper concept retains unchanged.",
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#concept`,
      name: "Vesper fragrance concept",
      description: "An imagined smoky amber parfum and launch offer, retaining Sarkar Perfume’s existing bottle and packaging. Not an available retail product.",
      author: { "@id": `${SITE_URL}/#author` },
      about: { "@id": "https://www.sarkar.store/#organization" },
      datePublished: DATE_PUBLISHED,
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      url: `${SITE_URL}/#faq`,
      name: "Vesper fragrance concept FAQs",
      isPartOf: { "@id": `${SITE_URL}/#webpage` },
      mainEntity: conceptFaqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};