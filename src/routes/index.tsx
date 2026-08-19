import { createFileRoute } from "@tanstack/react-router";
import bottleImg from "@/assets/sarkar-vesper-bottle.png";
import lineupImg from "@/assets/sarkar-lineup.webp";

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

        {/* Product image area / shelf */}
        <section className="border-t border-border px-5 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl uppercase sm:text-4xl">On the same shelf</h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Vesper keeps the Sarkar house bottle and packaging exactly as it is
              — the chess-king flacon, the debossed SARKAR base, the black cap.
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
        </section>

        {/* Buy */}
        <section id="buy" className="border-t border-border bg-secondary px-5 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <img
              src={bottleImg}
              alt="Sarkar VESPER 100ml parfum bottle"
              width={1000}
              height={1000}
              loading="lazy"
              className="mx-auto w-full max-w-xs"
            />
            <div>
              <h2 className="text-3xl uppercase sm:text-4xl">Vesper · 100ml</h2>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-display text-4xl">₹1,499</span>
                <span className="pb-1 text-sm text-muted-foreground line-through">
                  ₹1,999
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Incl. of all taxes
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>· Two 7ml freebies with every order</li>
                <li>· Ships within 24–36 hours, free across India</li>
                <li>· Launch batch — 300 bottles only</li>
              </ul>
              <a
                href={STORE}
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-primary px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85 sm:w-auto"
              >
                Add to cart
              </a>
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
