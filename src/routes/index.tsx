import { createFileRoute } from "@tanstack/react-router";
import bottleImg from "@/assets/sarkar-vesper-bottle.webp";
import lineupImg from "@/assets/sarkar-lineup.webp";
import packagingImg from "@/assets/sarkar-packaging.webp";

const TITLE = "VESPER (100ml) by Sarkar | Smoky Amber Parfum — ₹1,499";
const DESCRIPTION =
  "VESPER by Sarkar: a smoky amber parfum of cardamom, saffron leather and oud. 100ml parfum, ₹1,499, ships in 24-36 hours with two 7ml freebies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      // LCP image — fetch it as early as possible.
      { rel: "preload", as: "image", href: bottleImg, fetchpriority: "high" },
    ],
  }),

  component: Index,
});

const STORE = "https://www.sarkar.store/";

const notes = [
  {
    stage: "Top",
    title: "Cardamom · Black Plum · Bergamot",
    copy: "A dark, spiced opening — cold bergamot cut with green cardamom.",
  },
  {
    stage: "Heart",
    title: "Saffron · Leather · Damask Rose",
    copy: "Saffron threads over soft leather, rounded by rose. This is the signature.",
  },
  {
    stage: "Base",
    title: "Oud · Amber · Tonka",
    copy: "Smoke-soft oud and amber resin that stay on skin for 8–10 hours.",
  },
];

const facts = [
  ["Family", "Smoky Amber"],
  ["Wear", "Evenings · Dinners · Late drives"],
  ["Longevity", "8–10 hours"],
  ["Size", "100ml Parfum"],
];

const timeline = [
  ["0–15 min", "Cold spice. Cardamom and plum, sharp enough to make someone look up."],
  ["1–3 hrs", "Saffron leather settles in. This is the hour people ask what you're wearing."],
  ["4–6 hrs", "Amber warmth, rose gone soft, oud starting to hum underneath."],
  ["7–10 hrs", "A skin-close smoke trail. Still there when you get home."],
];

const offers = [
  {
    name: "The One Bottle",
    price: "₹1,499",
    was: "₹1,999",
    line: "100ml Vesper parfum",
    perks: ["Two 7ml freebies", "Free shipping across India", "Ships in 24–36 hrs"],
    cta: "Add to cart",
    featured: false,
  },
  {
    name: "The Night Set",
    price: "₹2,599",
    was: "₹3,498",
    line: "Vesper 100ml + Orion 100ml",
    perks: [
      "Save ₹899 on the pair",
      "Four 7ml freebies",
      "Day scent + night scent, covered",
    ],
    cta: "Get the set",
    featured: true,
  },
  {
    name: "The Try-First",
    price: "₹299",
    was: "",
    line: "7ml Vesper travel spray",
    perks: ["≈70 sprays", "₹299 back as credit on a 100ml", "Fits a jacket pocket"],
    cta: "Try 7ml",
    featured: false,
  },
];

const quotes = [
  ["“Wore it to a wedding. Three people, same question.”", "Rehan, Lucknow"],
  ["“Smells expensive in a way that isn't loud about it.”", "Ananya, Pune"],
  ["“Two sprays at 8pm, still on my collar at 6am.”", "Vikram, Delhi"],
];

const faqs = [
  [
    "Is this a new bottle?",
    "No. Vesper ships in the same Sarkar chess-king flacon and the same box you already know. The idea is new, the packaging is untouched.",
  ],
  [
    "How many sprays?",
    "Two on the neck, one on the chest. It's a parfum concentration, so more is not better.",
  ],
  [
    "Is it too heavy for Indian summers?",
    "Wear it after sundown. In peak heat, one spray on clothing carries it well.",
  ],
  [
    "Returns?",
    "Unopened bottles, 7 days, no questions. The 7ml is yours to keep either way.",
  ],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary px-4 py-2 text-center text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
        Claim two 7ml freebies with every order
      </div>

      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/90 px-5 py-4 backdrop-blur sm:px-10">
        <a href={STORE} className="font-display text-base tracking-brand uppercase">
          Sarkar
        </a>
        <a
          href="#buy"
          className="rounded-sm bg-primary px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
        >
          Buy Now
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-stage px-5 pt-12 pb-16 sm:px-10 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="flex flex-wrap gap-2">
                {["Unisex", "Smoky", "Parfum"].map((t) => (
                  <span
                    key={t}
                    className="rounded-sm bg-secondary px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 text-5xl uppercase leading-[0.95] sm:text-7xl">
                Vesper
                <span className="block text-base tracking-brand text-muted-foreground sm:text-lg">
                  100ml
                </span>
              </h1>
              <p className="mt-5 max-w-md font-display text-xl sm:text-2xl">
                It smells like saffron, smoke and the last hour of the night.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Built for the version of you that shows up after work is done —
                unhurried, warm, impossible to place. Same Sarkar bottle. A new
                mood inside it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#buy"
                  className="rounded-sm bg-gradient-amber px-8 py-4 text-xs uppercase tracking-[0.2em] text-amber-foreground shadow-lux"
                >
                  Shop ₹1,499
                </a>
                <span className="text-xs text-muted-foreground">
                  Incl. of all taxes · Ships in 24–36 hrs
                </span>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Launch batch · 300 bottles · 2 freebies per order
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={bottleImg}
                alt="Sarkar VESPER 100ml parfum in the signature amber chess-king bottle"
                width={1000}
                height={1000}
                className="mx-auto w-full max-w-sm"
              />
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:grid-cols-4">
            <span>Parfum · 24% oil</span>
            <span>Unisex</span>
            <span>Alcohol-based, IFRA safe</span>
            <span>Made in India</span>
          </div>
        </section>

        {/* Notes */}
        <section className="border-t border-border px-5 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-brand text-amber">
              The Notes
            </p>
            <h2 className="mt-3 max-w-xl text-3xl uppercase sm:text-4xl">
              Three moves, one impression
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {notes.map((n) => (
                <article
                  key={n.stage}
                  className="rounded-sm border border-border bg-card p-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-amber">
                    {n.stage}
                  </span>
                  <h3 className="mt-3 text-lg">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {n.copy}
                  </p>
                </article>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* How it wears */}
        <section className="border-t border-border bg-stage px-5 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-brand text-amber">
              Ten hours
            </p>
            <h2 className="mt-3 max-w-xl text-3xl uppercase sm:text-4xl">
              How Vesper reads an evening
            </h2>
            <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
              {timeline.map(([time, copy]) => (
                <li key={time} className="bg-card p-6">
                  <span className="font-display text-2xl text-amber">{time}</span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Product image area / shelf */}
        <section className="border-t border-border px-5 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl uppercase sm:text-4xl">On the same shelf</h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                Vesper keeps the Sarkar house bottle and packaging exactly as it
                is — the chess-king flacon, the debossed SARKAR base, the black
                cap. Nothing about the outside changed. Everything about the
                inside did.
              </p>
              <img
                src={lineupImg}
                alt="The Sarkar chess-piece parfum bottle line-up, packaging unchanged"
                width={1600}
                height={1600}
                loading="lazy"
                className="mt-8 w-full rounded-sm object-cover shadow-lux"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={packagingImg}
                alt="Sarkar parfum in its original unchanged outer packaging"
                width={1200}
                height={1200}
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-lux"
              />
              <div className="rounded-sm border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  If you already own a Sarkar, Vesper will look identical on your
                  dresser. That's on purpose — the house look stays, the
                  fragrance is the new part.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quotes */}
        <section className="border-t border-border px-5 py-14 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {quotes.map(([q, who]) => (
              <blockquote key={who} className="border-l-2 border-amber pl-4">
                <p className="font-display text-lg leading-snug">{q}</p>
                <cite className="mt-2 block text-[11px] uppercase not-italic tracking-[0.18em] text-muted-foreground">
                  {who}
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Offer */}
        <section
          id="buy"
          className="border-t border-border bg-secondary px-5 py-16 sm:px-10 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-brand text-amber">
              Launch offer · ends when 300 bottles do
            </p>
            <h2 className="mt-3 text-3xl uppercase sm:text-4xl">
              Pick your way in
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {offers.map((o) => (
                <article
                  key={o.name}
                  className={`flex flex-col rounded-sm border p-6 ${
                    o.featured
                      ? "border-amber bg-card shadow-lux"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg uppercase">{o.name}</h3>
                    {o.featured && (
                      <span className="rounded-sm bg-gradient-amber px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-amber-foreground">
                        Best value
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{o.line}</p>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="font-display text-4xl">{o.price}</span>
                    {o.was && (
                      <span className="pb-1 text-sm text-muted-foreground line-through">
                        {o.was}
                      </span>
                    )}
                  </div>
                  <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                    {o.perks.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                  <a
                    href={STORE}
                    className={`mt-7 inline-flex w-full items-center justify-center rounded-sm px-6 py-4 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-85 ${
                      o.featured
                        ? "bg-gradient-amber text-amber-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {o.cta}
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Incl. of all taxes · Free shipping across India · 7-day returns on
              unopened bottles
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border px-5 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.4fr]">
            <h2 className="text-3xl uppercase sm:text-4xl">Before you buy</h2>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map(([q, a]) => (
                <details key={q} className="group py-4">
                  <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.12em]">
                    {q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-base uppercase tracking-brand text-foreground">
            Sarkar
          </span>
          <nav className="flex flex-wrap gap-4">
            <a href={STORE} className="hover:text-foreground">
              Store
            </a>
            <a href="#buy" className="hover:text-foreground">
              Shop Vesper
            </a>
            <a href="mailto:hello@sarkar.store" className="hover:text-foreground">
              Contact
            </a>
          </nav>
          <span>© {new Date().getFullYear()} Sarkar Perfume. Vesper is a concept fragrance.</span>
        </div>
      </footer>
    </div>
  );
}
