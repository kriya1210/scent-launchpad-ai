import { describe, expect, test } from "bun:test";
import { conceptFaqs, pageSchema, SITE_URL } from "./site-seo.ts";

describe("concept search identity", () => {
  test("uses the published website, not the editor, as canonical identity", () => {
    expect(SITE_URL).toBe("https://scent-launchpad-ai.lovable.app");
    expect(pageSchema["@graph"][0].url).toBe(`${SITE_URL}/`);
  });

  test("represents Vesper as a creative concept, not a purchasable product", () => {
    const concept = pageSchema["@graph"].find((entity) => entity["@type"] === "CreativeWork");
    expect(concept?.author?.name).toBe("Kriya Mehta");
    expect(pageSchema["@graph"].some((entity) => entity["@type"] === "Product")).toBe(false);
    expect(pageSchema["@graph"].some((entity) => "offers" in entity)).toBe(false);
  });

  test("FAQ schema uses the same complete answer data as the visible FAQ", () => {
    const faq = pageSchema["@graph"].find((entity) => entity["@type"] === "FAQPage");
    expect(faq?.url).toBe(`${SITE_URL}/#faq`);
    expect(faq?.mainEntity).toEqual(conceptFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })));
  });
});