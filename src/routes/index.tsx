import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/noor-oud-hero.jpg";
import notesImg from "@/assets/noor-oud-notes.jpg";

const TITLE = "ZAHAAR by Sarkar Perfume | Saffron & Rose Extrait de Parfum";
const DESCRIPTION =
  "ZAHAAR is a saffron and rose extrait by Sarkar Perfume — Kashmiri saffron, Taif rose and aged oud. 50 ml, ₹2,499. Free shipping across India.";

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

const notes = [
  {
    stage: "Top",
    title: "Kashmiri Saffron & Bergamot",
    copy: "A bright, resinous opening — saffron threads warmed by cold-pressed bergamot.",
  },
  {
    stage: "Heart",
    title: "Taif Rose & Jasmine Sambac",
    copy: "Velvet rose folded into night-blooming jasmine. Rich, but never sweet.",
  },
  {
    stage: "Base",
    title: "Aged Oud, Amber & Cedar",
    copy: "Twelve hours of smoke-soft oud, amber resin and dry cedarwood on skin.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-5 py-5 sm:px-10">
        <a href="#" className="font-display text-lg tracking-brand uppercase">
          Sarkar
        </a>
        <a
          href="#buy"
          className="rounded-full border border-gold/50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          Buy
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroImg}
            alt="ZAHAAR extrait de parfum bottle beside its black and gold Sarkar gift box"
            width={1280}
            height={1600}
            className="h-[78vh] w-full object-cover sm:h-[86vh]"
          />
          <div className="absolute inset-0 bg-veil" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-12 text-center sm:pb-16">
            <p className="text-[10px] uppercase tracking-brand text-muted-foreground">
              Sarkar Perfume · Extrait de Parfum
            </p>
            <h1 className="mt-4 text-5xl leading-none sm:text-7xl">
              <span className="text-gradient-gold">ZAHAAR</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md font-display text-xl italic text-foreground/85 sm:text-2xl">
              Saffron at dusk, rose after rain.
            </p>
            <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
              Born from an evening in old Lucknow — a fragrance for people who
              arrive quietly and are remembered loudly.
            </p>
            <a
              href="#buy"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-3 text-xs uppercase tracking-[0.22em] text-gold-foreground shadow-lux"
            >
              Shop ₹2,499
            </a>
          </div>
        </section>

        {/* Notes */}
        <section className="border-t border-border px-5 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-[10px] uppercase tracking-brand text-gold">
              The Composition
            </p>
            <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
              Three movements, twelve hours.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {notes.map((n) => (
                <article
                  key={n.stage}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.24em] text-gold">
                    {n.stage} Notes
                  </span>
                  <h3 className="mt-3 text-xl">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {n.copy}
                  </p>
                </article>
              ))}
            </div>
            <img
              src={notesImg}
              alt="Saffron threads, oud wood, dried rose petals, amber resin and cedar shavings on dark stone"
              width={1280}
              height={912}
              loading="lazy"
              className="mt-10 aspect-[16/10] w-full rounded-2xl object-cover shadow-lux"
            />
          </div>
        </section>

        {/* Product / buy */}
        <section
          id="buy"
          className="border-t border-border px-5 py-16 sm:px-10 sm:py-24"
        >
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <img
              src={heroImg}
              alt="ZAHAAR 50 ml extrait de parfum in Sarkar's signature black and gold packaging"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lux"
            />
            <div>
              <h2 className="text-3xl sm:text-4xl">ZAHAAR · 50 ml</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                24% fragrance concentration, filled and boxed in Sarkar's
                signature black-and-gold presentation case. Made in India.
              </p>
              <div className="mt-6 flex items-end gap-3">
                <span className="font-display text-4xl text-gold">₹2,499</span>
                <span className="pb-1 text-sm text-muted-foreground line-through">
                  ₹3,200
                </span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>· Free shipping across India</li>
                <li>· Complimentary 2 ml travel vial with every order</li>
                <li>· 7-day no-questions return</li>
              </ul>
              <a
                href="https://sarkar.store/"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-gold-foreground shadow-lux sm:w-auto"
              >
                Add to bag
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Launch batch — 300 bottles only.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-base tracking-brand uppercase text-foreground">
            Sarkar
          </span>
          <nav className="flex flex-wrap gap-4">
            <a href="https://sarkar.store/" className="hover:text-gold">
              Store
            </a>
            <a href="#buy" className="hover:text-gold">
              Shop ZAHAAR
            </a>
            <a href="mailto:hello@sarkar.store" className="hover:text-gold">
              Contact
            </a>
          </nav>
          <span>© {new Date().getFullYear()} Sarkar Perfume</span>
        </div>
      </footer>
    </div>
  );
}
