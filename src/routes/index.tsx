import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { FloatingPill, SignatureFooter } from "@/components/RovocheSignature";

export const Route = createFileRoute("/")({
  component: Home,
});

const px = (id: string | number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const IMG = {
  livingFire: px(36353380),
  livingLight: px(36353382),
  livingMinimal: px(36353383),
  kitchen1: px(33314763),
  kitchen2: px(33314762),
  kitchenStair: px(33314767),
  kitchenRestaurant: px(33314766),
  bedroom1: px(32177991),
  bedroom2: px(32177992),
  bathMarble: px(31525748),
  bathGlass: px(36177447),
  bathHotel: px(26886816),
  sofaWall: px(8987432),
  livingSofa: px(8987431),
  louisXIV: px(14531186),
  wooden: px(8349174),
  floralCarpet: px(8135276),
  graySofa: px(8135277),
  brownSofa: px(8135275),
  velvet: px(8135267),
  goldChair: px(31766271),
  brownSofa2: px(8135268),
  loungeMin: px(36962662),
  diningTable: px(8120948),
  cafeCorner: px(15352196),
  restaurantWarm: px(37737840),
  restaurantWood: px(27969787),
  framesWall: px(7019021),
  handmadeDecor: px(20130620),
  photosWall: px(8488980),
  framedPaint: px(6127435),
  framedWhite: px(6127448),
  shelfDecor: px(34117279),
  mirror: px(12715512),
  baskets: px(30480965),
  pottery: px(10252300),
  potPlant: px(20079538),
};

const BRAND = "ORVELLE";

function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M20 4 A16 16 0 0 1 20 36" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 4 A16 16 0 0 0 20 36" stroke="currentColor" strokeWidth="1.2" />
      <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function Nav() {
  const items = ["Collections", "Projects", "About", "Journal", "Contact"];
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-bone/80 backdrop-blur-md border-b border-ink/5">
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10 h-16">
        <nav className="hidden md:flex gap-8 text-[12px] tracking-[0.2em] uppercase text-ink/75">
          {items.slice(0, 2).map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-gold transition-colors">{i}</a>
          ))}
        </nav>
        <a href="#" className="flex items-center gap-2.5 justify-self-center text-ink">
          <Monogram className="h-5 w-5" />
          <span className="font-display text-2xl tracking-[0.18em]">{BRAND}</span>
        </a>
        <nav className="hidden md:flex gap-8 text-[12px] tracking-[0.2em] uppercase text-ink/75 justify-self-end">
          {items.slice(2).map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-gold transition-colors">{i}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-40 overflow-hidden">
      <div className="mx-auto grid grid-cols-12 gap-6 px-6 md:px-10">
        {/* Left column: eyebrow + oversized headline */}
        <div className="col-span-12 md:col-span-7 relative">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-gold/70" />
            <span className="label-eyebrow">Maison — Est. Milano · 2011</span>
          </div>
          <Reveal mode="text">
            <h1 className="font-display text-[13vw] md:text-[9.5vw] leading-[0.88] tracking-[-0.03em]">
              Interiors of
              <br />
              <em className="italic text-taupe">considered</em>
              <br />
              permanence.
            </h1>
          </Reveal>
          <div className="mt-14 grid grid-cols-12 gap-6 items-end">
            <p className="col-span-12 md:col-span-6 text-[15px] leading-[1.7] text-ink/80 max-w-md">
              A house of interior architects, cabinet makers, and quiet obsessives — furnishing residences from Antwerp to the Aegean since two thousand eleven.
            </p>
            <div className="col-span-12 md:col-span-6 flex items-center gap-8">
              <a href="#collections" className="group inline-flex items-center gap-3 text-sm tracking-[0.18em] uppercase">
                <span className="border-b border-ink pb-1 group-hover:border-gold group-hover:text-gold transition-colors">See the Collection</span>
              </a>
              <a href="#contact" className="text-[12px] tracking-[0.2em] uppercase text-taupe hover:text-ink transition-colors">
                Request a visit ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right column: tall image */}
        <div className="col-span-12 md:col-span-5 md:pl-8 md:-mt-6">
          <Reveal className="relative">
            <img src={IMG.livingFire} alt="Living room with fireplace" className="w-full h-[70vh] object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-bone px-3 py-1.5">
              <span className="label-eyebrow">N° I — Casa Miravel, Como</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee-ish drift line */}
      <div className="mt-24 md:mt-32 border-y border-ink/10 py-4 overflow-hidden">
        <div className="flex gap-16 text-[11px] tracking-[0.3em] uppercase text-taupe whitespace-nowrap px-6">
          <span>Milano</span><span>·</span><span>Antwerp</span><span>·</span><span>Kyoto</span><span>·</span>
          <span>Notting Hill</span><span>·</span><span>Cap Ferrat</span><span>·</span><span>Athens</span><span>·</span>
          <span>Copenhagen</span><span>·</span><span>Marrakech</span><span>·</span><span>New York</span>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-6">
      <span className="font-display italic text-taupe text-2xl">{n}</span>
      <span className="label-eyebrow">{title}</span>
      <span className="flex-1 h-px bg-ink/10" />
    </div>
  );
}

function Collections() {
  const cols = [
    { name: "Volumi", meaning: "Living & Lounge", img: IMG.livingLight, count: "24 pieces" },
    { name: "Focolare", meaning: "Kitchens & Cabinetry", img: IMG.kitchen1, count: "16 systems" },
    { name: "Notturno", meaning: "Bedrooms & Wardrobes", img: IMG.bedroom1, count: "18 pieces" },
    { name: "Bagno", meaning: "Bath & Stone", img: IMG.bathMarble, count: "11 fixtures" },
  ];
  return (
    <section id="collections" className="px-6 md:px-10 py-28">
      <SectionLabel n="i." title="The Collections — Autumn / Winter" />
      <div className="mt-10 grid grid-cols-12 gap-6 items-end">
        <h2 className="col-span-12 md:col-span-8 font-display text-6xl md:text-8xl leading-[0.95]">
          Four rooms, <em className="italic">one grammar.</em>
        </h2>
        <p className="col-span-12 md:col-span-4 text-[15px] leading-[1.7] text-ink/75">
          Every collection begins in the workshop and ends in the residence. Nothing between is outsourced.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-6">
        {cols.map((c, i) => (
          <Reveal key={c.name} className={
            i === 0 ? "col-span-12 md:col-span-7 md:mt-16" :
            i === 1 ? "col-span-12 md:col-span-5" :
            i === 2 ? "col-span-12 md:col-span-5 md:mt-24" :
            "col-span-12 md:col-span-7"
          }>
            <div className="group">
              <div className="overflow-hidden">
                <img src={c.img} alt={c.name} className={`w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03] ${i % 2 === 0 ? "h-[70vh]" : "h-[55vh]"}`} />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-3xl">{c.name}</h3>
                  <p className="mt-1 text-sm text-taupe italic">{c.meaning}</p>
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-taupe">{c.count} — 2026</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { name: "Villa Serena", place: "Lake Como, IT", year: "2024", scope: "Full residence · 640 m²", img: IMG.livingMinimal },
    { name: "Maison Hauteville", place: "Paris, FR", year: "2023", scope: "Kitchen · Living", img: IMG.kitchen2 },
    { name: "Casa Anahera", place: "Mykonos, GR", year: "2024", scope: "New build · 12 rooms", img: IMG.bedroom2 },
  ];
  return (
    <section id="projects" className="bg-[#eee7dc] px-6 md:px-10 py-32">
      <SectionLabel n="ii." title="Signature Projects" />
      <div className="mt-10 grid grid-cols-12 gap-6 items-end">
        <p className="col-span-12 md:col-span-5 text-[15px] leading-[1.7] text-ink/75 order-2 md:order-1">
          A selection of recent commissions — private residences, discreet clients, long timelines. Each is documented in a bound volume archived at the atelier.
        </p>
        <h2 className="col-span-12 md:col-span-7 font-display text-6xl md:text-8xl leading-[0.95] md:text-right order-1 md:order-2">
          Houses we <em className="italic">still visit.</em>
        </h2>
      </div>

      <div className="mt-24 space-y-32">
        {projects.map((p, i) => (
          <div key={p.name} className="grid grid-cols-12 gap-6 items-center">
            <Reveal className={`col-span-12 md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={p.img} alt={p.name} className="w-full h-[70vh] object-cover" />
            </Reveal>
            <div className={`col-span-12 md:col-span-4 ${i % 2 ? "md:col-start-2 md:order-1" : "md:col-start-9"}`}>
              <span className="label-eyebrow">Project N° {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">{p.name}</h3>
              <p className="mt-4 italic text-taupe text-lg">{p.place}</p>
              <div className="mt-8 h-px w-full bg-ink/15" />
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-taupe">Year</dt><dd>{p.year}</dd></div>
                <div className="flex justify-between"><dt className="text-taupe">Scope</dt><dd className="text-right">{p.scope}</dd></div>
                <div className="flex justify-between"><dt className="text-taupe">Architect</dt><dd>ORVELLE Studio</dd></div>
              </dl>
              <a href="#" className="mt-10 inline-block text-[12px] tracking-[0.22em] uppercase border-b border-ink pb-1 hover:border-gold hover:text-gold transition-colors">
                Read the file
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Craft() {
  return (
    <section id="about" className="px-6 md:px-10 py-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <span className="vrule inline-block">Craftsmanship · The Workshop</span>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Reveal mode="text">
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
              We hold onto <em className="italic">seven trades</em> the industry has largely let go of.
            </h2>
            <p className="mt-10 text-[15px] leading-[1.8] text-ink/80 max-w-xl">
              A lacquer that takes eleven weeks to cure. Brass patinated by hand, not machine. Marble book-matched at the quarry, chosen by our head of stone. Cabinetry joined with mortise and tenon because it will still be square in a hundred years.
            </p>
            <p className="mt-6 text-[15px] leading-[1.8] text-ink/80 max-w-xl">
              We are slower than most. We prefer it that way.
            </p>
          </Reveal>
        </div>
        <Reveal className="col-span-12 md:col-span-3 md:mt-24">
          <img src={IMG.wooden} alt="Wooden armchair detail" className="w-full h-[50vh] object-cover" />
          <p className="mt-3 text-xs italic text-taupe">Detail — hand-carved oak, Focolare series.</p>
        </Reveal>
      </div>

      {/* stat strip */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-y border-ink/10">
        {[
          { n: "14", l: "Years in practice" },
          { n: "62", l: "Residences completed" },
          { n: "9", l: "In-house artisans" },
          { n: "1", l: "Workshop, Brianza" },
        ].map((s) => (
          <div key={s.l} className="py-10 px-2 border-r border-ink/10 last:border-r-0">
            <div className="font-display text-6xl">{s.n}</div>
            <div className="mt-3 label-eyebrow">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Furniture() {
  const items = [
    { name: "Perla", type: "Lounge chair · walnut, bouclé", img: IMG.goldChair, price: "€ 8,400" },
    { name: "Volta", type: "Modular sofa · cashmere", img: IMG.graySofa, price: "€ 21,600" },
    { name: "Miroir", type: "Console · travertine", img: IMG.mirror, price: "€ 6,900" },
    { name: "Rive", type: "Sectional · linen", img: IMG.brownSofa, price: "€ 19,200" },
    { name: "Solène", type: "Armchair · velvet, brass", img: IMG.louisXIV, price: "€ 7,200" },
    { name: "Baldi", type: "Sofa · handwoven wool", img: IMG.velvet, price: "€ 24,000" },
  ];
  return (
    <section className="px-6 md:px-10 py-32">
      <SectionLabel n="iii." title="Selected Furniture — In Stock at the Milano Atelier" />
      <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-20">
        {items.map((it, i) => (
          <Reveal key={it.name} className={`col-span-6 md:col-span-4 ${i === 1 ? "md:mt-16" : ""} ${i === 4 ? "md:mt-20" : ""}`}>
            <div className="overflow-hidden">
              <img src={it.img} alt={it.name} className="w-full aspect-[4/5] object-cover transition-transform duration-[1400ms] hover:scale-[1.04]" />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <div>
                <h4 className="font-display text-2xl">{it.name}</h4>
                <p className="mt-1 text-xs text-taupe">{it.type}</p>
              </div>
              <span className="text-xs tracking-wider text-ink/80">{it.price}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-20 text-center">
        <a href="#" className="text-[12px] tracking-[0.22em] uppercase border-b border-ink pb-1 hover:border-gold hover:text-gold transition-colors">
          The full catalogue — 148 pieces
        </a>
      </div>
    </section>
  );
}

function EditorialGallery() {
  const shots = [
    IMG.kitchenStair, IMG.bathGlass, IMG.shelfDecor, IMG.loungeMin,
    IMG.diningTable, IMG.framesWall, IMG.pottery, IMG.bathHotel,
  ];
  return (
    <section id="journal" className="bg-ink text-bone px-6 md:px-10 py-32">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-6">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-gold/70" />
            <span className="label-eyebrow" style={{ color: "#c9c1ad" }}>Journal — Volume XIV</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.95]">
            An editorial <em className="italic text-bone/70">in progress.</em>
          </h2>
        </div>
        <p className="col-span-12 md:col-span-5 md:col-start-8 text-[15px] leading-[1.7] text-bone/70">
          Photographs from recent installations, workshops, and travel. Published quarterly in print, mailed to clients and to a short list of friends.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-4 md:gap-6">
        {shots.map((src, i) => {
          // hand-tuned asymmetric spans
          const layouts = [
            "col-span-6 md:col-span-5 aspect-[4/5]",
            "col-span-6 md:col-span-4 md:mt-32 aspect-[3/4]",
            "col-span-6 md:col-span-3 aspect-square md:mt-16",
            "col-span-6 md:col-span-4 aspect-[5/4]",
            "col-span-12 md:col-span-8 aspect-[16/9]",
            "col-span-6 md:col-span-4 md:mt-20 aspect-[4/5]",
            "col-span-6 md:col-span-3 aspect-square",
            "col-span-6 md:col-span-5 md:mt-10 aspect-[4/3]",
          ];
          return (
            <Reveal key={i} className={layouts[i]}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="px-6 md:px-10 py-40">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <span className="vrule inline-block">§ Design Philosophy</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal mode="text">
            <p className="font-display text-3xl md:text-5xl leading-[1.15] text-ink/90">
              &ldquo;A room should hold its silence. Furniture should be quiet enough to be lived with for thirty years, and generous enough that a child, a dog, and a decade of dinners leave it more beautiful, not less.&rdquo;
            </p>
          </Reveal>
          <div className="mt-12 flex items-center gap-4">
            <span className="h-px w-16 bg-gold/70" />
            <span className="label-eyebrow">Elena Vasari — Founder & Creative Director</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientExperience() {
  const steps = [
    { t: "Introduction", d: "A visit at the Milano atelier, or in your home. No brief required." },
    { t: "Proposal", d: "A single bound document — plans, materials, provenance, timeline, price." },
    { t: "Making", d: "Ten to eighteen months in the workshop, documented weekly." },
    { t: "Installation", d: "A four-person team on site. Handover with a hardbound care volume." },
  ];
  return (
    <section className="bg-[#eee7dc] px-6 md:px-10 py-32">
      <SectionLabel n="iv." title="The Client Experience" />
      <div className="mt-16 grid grid-cols-12 gap-6">
        <h2 className="col-span-12 md:col-span-6 font-display text-6xl md:text-7xl leading-[0.95]">
          Four rooms, <em className="italic">four seasons.</em>
        </h2>
        <div className="col-span-12 md:col-span-5 md:col-start-8 space-y-10">
          {steps.map((s, i) => (
            <div key={s.t} className="grid grid-cols-[auto_1fr] gap-6 pb-8 border-b border-ink/15 last:border-0">
              <span className="font-display italic text-3xl text-gold">{`0${i + 1}`}</span>
              <div>
                <h4 className="font-display text-2xl">{s.t}</h4>
                <p className="mt-2 text-sm text-ink/75 leading-[1.7]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <span className="label-eyebrow">Enquiries</span>
          <h2 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
            Write, or come <em className="italic">for tea.</em>
          </h2>
          <p className="mt-10 max-w-lg text-[15px] leading-[1.8] text-ink/80">
            We take on a small number of residences each year. Introductions are welcome by letter, telephone, or in person at the Milano atelier.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 max-w-lg text-sm">
            <div>
              <p className="label-eyebrow">Atelier</p>
              <p className="mt-3 leading-relaxed">Via della Spiga 14<br />20121 Milano · Italia</p>
            </div>
            <div>
              <p className="label-eyebrow">Contact</p>
              <p className="mt-3 leading-relaxed">
                <a href="mailto:studio@orvelle.it" className="border-b border-ink/40 hover:border-gold hover:text-gold transition-colors">studio@orvelle.it</a>
                <br />
                + 39 02 7600 0000
              </p>
            </div>
          </div>
        </div>
        <Reveal className="col-span-12 md:col-span-5">
          <img src={IMG.potPlant} alt="Interior detail" className="w-full h-[70vh] object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

function BrandFooter() {
  const cols = [
    { h: "House", links: ["Collections", "Projects", "Journal", "Atelier"] },
    { h: "Studio", links: ["About", "Craftsmanship", "Press", "Careers"] },
    { h: "Client", links: ["Trade Programme", "Care & Provenance", "Delivery", "Private Enquiries"] },
    { h: "Elsewhere", links: ["Instagram", "Pinterest", "Are.na", "Newsletter"] },
  ];
  return (
    <footer className="bg-bone px-6 md:px-10 pt-24 pb-10 border-t border-ink/10">
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3">
            <Monogram className="h-6 w-6" />
            <span className="font-display text-3xl tracking-[0.15em]">{BRAND}</span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-ink/70 leading-[1.7]">
            A house of interior architects and cabinet makers. Milano — Antwerp — Kyoto.
          </p>
          <p className="mt-8 label-eyebrow">On the bench, this season</p>
          <p className="mt-2 italic text-taupe text-sm">Villa Anahera · Mykonos — completing spring 2026.</p>
        </div>
        {cols.map((c) => (
          <div key={c.h} className="col-span-6 md:col-span-2">
            <p className="label-eyebrow">{c.h}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-ink/80 hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-20 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-taupe">
        <span>© MMXXVI {BRAND} · All works reserved</span>
        <span>VAT IT 04431 · Registered Milano</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="bg-bone text-ink">
      <Nav />
      <main>
        <Hero />
        <Collections />
        <Projects />
        <Craft />
        <Furniture />
        <EditorialGallery />
        <Philosophy />
        <ClientExperience />
        <Contact />
      </main>
      <BrandFooter />
      <SignatureFooter brand={BRAND} />
      <FloatingPill />
    </div>
  );
}
