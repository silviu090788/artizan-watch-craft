import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import logo from "@/assets/craterhand-logo.png.asset.json";
import lunar from "@/assets/ceas-lunar.jpg.asset.json";
import living from "@/assets/ceas-living.jpg.asset.json";
import relief from "@/assets/atelier-relief.jpg.asset.json";
import detail from "@/assets/atelier-2.jpg.asset.json";
import mask from "@/assets/atelier-3.jpg.asset.json";
import workshop from "@/assets/atelier-lucru.jpg.asset.json";
import v1 from "@/assets/video-1.mp4.asset.json";
import v2 from "@/assets/video-2.mp4.asset.json";
import v3 from "@/assets/video-3.mp4.asset.json";
import { WhatsAppIcon, WhatsAppSticky } from "@/components/WhatsAppButton";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Craterhand | Ceasuri de perete handmade" },
      { name: "description", content: "Ceasuri de perete lucrate manual în atelier: relief lunar, lumină LED ambientală, piese unice și personalizare." },
      { property: "og:title", content: "Craterhand | Ceasuri de perete handmade" },
      { property: "og:description", content: "Piese unice, sculptate manual, cu lumină ambientală. Comandă direct pe WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Luna Gold", desc: "Relief lunar alb, cifre romane aurii, lumină LED caldă.", price: "1.450 lei", img: lunar.url, tag: "BESTSELLER" },
  { name: "Ember Helm", desc: "Cârmă vintage pe fond de lavă incandescentă, ramă de piatră.", price: "1.890 lei", img: living.url, tag: "EDIȚIE LIMITATĂ" },
  { name: "Silent Moon", desc: "Crater gri-grafit cu mască sculptată — piesă de artă.", price: "1.650 lei", img: mask.url, tag: "PIESĂ UNICĂ" },
];

const steps = [
  ["01", "Schița", "Alegem împreună dimensiunea, culoarea și motivul."],
  ["02", "Sculptura", "Relieful e modelat manual, strat cu strat, cu spaclul."],
  ["03", "Patina", "Pigmenți, metal și lac pentru textură și adâncime."],
  ["04", "Lumina", "Montăm mecanismul silențios și banda LED ambientală."],
];

const faqs = [
  ["Cât durează realizarea unui ceas?", "Între 7 și 14 zile lucrătoare, în funcție de complexitate și personalizare."],
  ["Pot personaliza culoarea sau dimensiunea?", "Da. Fiecare ceas e făcut la comandă — scrie-ne pe WhatsApp ce îți dorești."],
  ["Mecanismul face zgomot?", "Nu. Folosim mecanisme silențioase (sweep), potrivite și pentru dormitor."],
  ["Livrați în toată țara?", "Da, prin curier, ambalat sigur în cutie de lemn sau carton dublu."],
];

function Index() {
  const [origin, setOrigin] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => setOrigin(window.location.origin), []);
  const reviewUrl = `${origin}/review`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-cream px-3 py-2 text-center text-[9px] font-bold tracking-[0.15em] md:py-2.5 md:text-[11px] md:tracking-[0.2em] text-cream-foreground">
        LIVRARE ÎN TOATĂ ȚARA • FIECARE CEAS ESTE O PIESĂ UNICĂ
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:h-20 md:px-6">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <img src={logo.url} alt="Craterhand logo" className="h-11 w-11 shrink-0 rounded-full bg-cream p-0.5 md:h-12 md:w-12" />
            <span className="truncate font-display text-base font-extrabold tracking-[0.2em] md:text-lg">CRATERHAND</span>
          </a>
          <div className="hidden gap-8 text-xs font-bold md:flex">
            <a href="#colectie" className="hover:text-primary">Colecție</a>
            <a href="#atelier" className="hover:text-primary">Atelier</a>
            <a href="#video" className="hover:text-primary">Video</a>
            <a href="#faq" className="hover:text-primary">Întrebări</a>
            <Link to="/review" className="hover:text-primary">Recenzii</Link>
          </div>
          <a href={waLink("Bună! Aș dori o ofertă pentru un ceas.")} target="_blank" rel="noreferrer"
            className="hidden items-center gap-2 bg-primary px-5 py-3 text-[11px] md:inline-flex font-bold uppercase tracking-wider text-primary-foreground transition hover:opacity-90">
            <WhatsAppIcon className="h-4 w-4" /> Comandă
          </a>
          <button type="button" aria-label="Meniu" onClick={() => setOpen(!open)} className="shrink-0 p-2 md:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        {open && (
          <div className="flex flex-col border-t border-border px-4 py-2 text-sm font-bold md:hidden" onClick={() => setOpen(false)}>
            <a href="#colectie" className="py-3">Colecție</a>
            <a href="#atelier" className="py-3">Atelier</a>
            <a href="#video" className="py-3">Video</a>
            <a href="#faq" className="py-3">Întrebări</a>
            <Link to="/review" className="py-3">Recenzii</Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 md:grid-cols-2 md:px-6 md:py-28">
          <div>
            <p className="eyebrow mb-6">Handmade în România</p>
            <h1 className="mb-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Timpul devine <span className="text-primary">artă.</span>
            </h1>
            <p className="mb-10 max-w-md leading-relaxed text-muted-foreground">
              Ceasuri de perete sculptate manual, cu relief lunar și lumină ambientală.
              Fiecare piesă e unică — creată pentru peretele tău.
            </p>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <a href="#colectie" className="bg-cream px-7 py-4 text-center text-[11px] font-bold uppercase tracking-wider text-cream-foreground transition hover:bg-primary">Vezi colecția</a>
              <a href={waLink("Bună! Vreau un ceas personalizat.")} target="_blank" rel="noreferrer" className="border border-border px-7 py-4 text-center text-[11px] font-bold uppercase tracking-wider transition hover:border-primary hover:text-primary">Personalizează</a>
            </div>
          </div>
          <div className="bg-moon relative mx-auto flex aspect-square w-full max-w-sm items-center md:max-w-none justify-center rounded-full">
            <img src={lunar.url} alt="Ceas Craterhand cu relief lunar și lumină caldă" className="animate-float shadow-glow w-[85%] rounded-full" />
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 border-y border-border px-5 py-6 text-[11px] md:gap-6 md:px-6 md:text-xs font-bold md:grid-cols-4">
          {["✦ 100% lucrat manual", "◐ Lumină LED ambientală", "◷ Mecanism silențios", "✧ Garanție 2 ani"].map((t) => <div key={t}>{t}</div>)}
        </div>
      </section>

      {/* Colecție */}
      <section id="colectie" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <p className="eyebrow mb-3">Colecția</p>
        <h2 className="mb-8 text-3xl md:mb-12 font-semibold tracking-tight sm:text-4xl md:text-5xl">Piese create cu mâna</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group overflow-hidden border border-border bg-card">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-cream px-3 py-1.5 text-[9px] font-bold tracking-wider text-cream-foreground">{p.tag}</span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="mb-2 text-lg font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-bold text-primary">de la {p.price}</span>
                  <a href={waLink(`Bună! Sunt interesat(ă) de modelul ${p.name}.`)} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-foreground px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider transition hover:bg-whatsapp hover:border-whatsapp hover:text-whatsapp-foreground">
                    <WhatsAppIcon className="h-3.5 w-3.5" /> Comandă
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Atelier */}
      <section id="atelier" className="bg-cream py-16 md:py-24 text-cream-foreground">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-3">
              <img src={relief.url} alt="Sculptarea reliefului" loading="lazy" className="aspect-[3/4] w-full object-cover" />
              <img src={workshop.url} alt="Ceas în lucru în atelier" loading="lazy" className="mt-10 aspect-[3/4] w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow mb-3">Din atelier</p>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Făcut cu grijă, piesă cu piesă.</h2>
              <p className="mb-10 leading-relaxed opacity-70">
                Nu folosim tipare. Fiecare crater, fiecare textură este modelată manual cu spaclul,
                din materiale minerale, apoi patinată și luminată din spate. De aceea nu vei găsi două ceasuri identice.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {steps.map(([n, t, d]) => (
                  <div key={n} className="border-t border-cream-foreground/25 pt-4">
                    <b className="text-xs">{n}</b>
                    <h3 className="mb-1 mt-2 font-bold">{t}</h3>
                    <p className="text-sm opacity-70">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <p className="eyebrow mb-3">Video</p>
        <h2 className="mb-8 text-3xl md:mb-12 font-semibold tracking-tight sm:text-4xl md:text-5xl">Vezi cum prind viață</h2>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {[v1, v2, v3].map((v, i) => (
            <video key={i} src={v.url} controls muted playsInline preload="metadata" className="aspect-[9/16] w-[75vw] shrink-0 snap-center bg-card object-cover sm:w-[45vw] md:w-full" />
          ))}
        </div>
        <img src={detail.url} alt="Detaliu textură" loading="lazy" className="mt-6 h-48 w-full md:h-72 object-cover" />
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 pb-16 md:px-6 md:pb-24">
        <p className="eyebrow mb-3 text-center">Întrebări frecvente</p>
        <h2 className="mb-10 text-center text-4xl font-semibold tracking-tight">Tot ce trebuie să știi</h2>
        {faqs.map(([q, a]) => (
          <details key={q} className="border-b border-border py-5">
            <summary className="cursor-pointer font-bold">{q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </details>
        ))}
      </section>

      {/* QR review */}
      <section className="border-y border-border bg-card py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 text-center md:gap-12 md:px-6 md:text-left md:grid-cols-[auto_1fr]">
          <div className="mx-auto bg-cream p-5">
            {origin && <QRCodeSVG value={reviewUrl} size={180} bgColor="transparent" fgColor="currentColor" className="text-cream-foreground" />}
          </div>
          <div>
            <p className="eyebrow mb-3">Părerea ta contează</p>
            <h2 className="mb-4 text-4xl font-semibold tracking-tight">Scanează și lasă-ne o recenzie</h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground md:mx-0">
              Ai primit un ceas Craterhand? Scanează codul QR cu telefonul și spune-ne cum arată la tine acasă.
            </p>
            <Link to="/review" className="inline-block bg-primary px-7 py-4 text-center text-[11px] font-bold uppercase tracking-wider text-primary-foreground">Scrie o recenzie</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center md:py-24">
        <h2 className="mx-auto mb-6 max-w-2xl px-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Vrei un ceas creat doar pentru tine?</h2>
        <a href={waLink("Bună! Vreau o ofertă pentru un ceas personalizat.")} target="_blank" rel="noreferrer"
          className="mx-5 inline-flex items-center gap-3 bg-whatsapp px-6 py-4 md:px-8 text-sm font-bold text-whatsapp-foreground">
          <WhatsAppIcon className="h-5 w-5" /> Scrie-ne pe WhatsApp
        </a>
      </section>

      <footer className="border-t border-border py-10 pb-24 text-center text-xs text-muted-foreground md:pb-10">
        <img src={logo.url} alt="" className="mx-auto mb-4 h-14 w-14 rounded-full bg-cream p-0.5" />
        © {new Date().getFullYear()} Craterhand · Handmade moon clocks
      </footer>

      <WhatsAppSticky />
    </div>
  );
}
