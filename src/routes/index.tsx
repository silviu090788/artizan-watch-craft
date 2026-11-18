import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
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
      { title: "Lunaris Atelier | Ceasuri de perete handmade" },
      { name: "description", content: "Ceasuri de perete lucrate manual în atelier: relief lunar, lumină LED ambientală, piese unice și personalizare." },
      { property: "og:title", content: "Lunaris Atelier | Ceasuri de perete handmade" },
      { property: "og:description", content: "Piese unice, sculptate manual, cu lumină ambientală. Comandă direct pe WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Lunaris Gold", desc: "Relief lunar alb, cifre romane aurii, lumină LED caldă.", price: "1.450 lei", img: lunar.url, tag: "BESTSELLER" },
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
  useEffect(() => setOrigin(window.location.origin), []);
  const reviewUrl = `${origin}/review`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-cream py-2.5 text-center text-[11px] font-bold tracking-[0.2em] text-cream-foreground">
        LIVRARE ÎN TOATĂ ȚARA • FIECARE CEAS ESTE O PIESĂ UNICĂ
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-display text-xl font-extrabold tracking-[0.25em]">
            LUNARIS<small className="block text-[9px] font-medium tracking-[0.45em] text-primary">ATELIER</small>
          </a>
          <div className="hidden gap-8 text-xs font-bold md:flex">
            <a href="#colectie" className="hover:text-primary">Colecție</a>
            <a href="#atelier" className="hover:text-primary">Atelier</a>
            <a href="#video" className="hover:text-primary">Video</a>
            <a href="#faq" className="hover:text-primary">Întrebări</a>
            <Link to="/review" className="hover:text-primary">Recenzii</Link>
          </div>
          <a href={waLink("Bună! Aș dori o ofertă pentru un ceas.")} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-primary-foreground transition hover:opacity-90">
            <WhatsAppIcon className="h-4 w-4" /> Comandă
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow mb-6">Handmade în România</p>
            <h1 className="mb-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Timpul devine <span className="text-primary">artă.</span>
            </h1>
            <p className="mb-10 max-w-md leading-relaxed text-muted-foreground">
              Ceasuri de perete sculptate manual, cu relief lunar și lumină ambientală.
              Fiecare piesă e unică — creată pentru peretele tău.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#colectie" className="bg-cream px-7 py-4 text-[11px] font-bold uppercase tracking-wider text-cream-foreground transition hover:bg-primary">Vezi colecția</a>
              <a href={waLink("Bună! Vreau un ceas personalizat.")} target="_blank" rel="noreferrer" className="border border-border px-7 py-4 text-[11px] font-bold uppercase tracking-wider transition hover:border-primary hover:text-primary">Personalizează</a>
            </div>
          </div>
          <div className="bg-moon relative flex aspect-square items-center justify-center rounded-full">
            <img src={lunar.url} alt="Ceas Lunaris cu relief lunar și lumină caldă" className="animate-float shadow-glow w-[85%] rounded-full" />
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 border-y border-border px-6 py-7 text-xs font-bold md:grid-cols-4">
          {["✦ 100% lucrat manual", "◐ Lumină LED ambientală", "◷ Mecanism silențios", "✧ Garanție 2 ani"].map((t) => <div key={t}>{t}</div>)}
        </div>
      </section>

      {/* Colecție */}
      <section id="colectie" className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow mb-3">Colecția</p>
        <h2 className="mb-12 text-4xl font-semibold tracking-tight md:text-5xl">Piese create cu mâna</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group overflow-hidden border border-border bg-card">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-cream px-3 py-1.5 text-[9px] font-bold tracking-wider text-cream-foreground">{p.tag}</span>
              </div>
              <div className="p-6">
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
      <section id="atelier" className="bg-cream py-24 text-cream-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-3">
              <img src={relief.url} alt="Sculptarea reliefului" loading="lazy" className="aspect-[3/4] w-full object-cover" />
              <img src={workshop.url} alt="Ceas în lucru în atelier" loading="lazy" className="mt-10 aspect-[3/4] w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow mb-3">Din atelier</p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">Făcut cu grijă, piesă cu piesă.</h2>
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
      <section id="video" className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow mb-3">Video</p>
        <h2 className="mb-12 text-4xl font-semibold tracking-tight md:text-5xl">Vezi cum prind viață</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[v1, v2, v3].map((v, i) => (
            <video key={i} src={v.url} controls muted playsInline preload="metadata" className="aspect-[9/16] w-full bg-card object-cover" />
          ))}
        </div>
        <img src={detail.url} alt="Detaliu textură" loading="lazy" className="mt-6 h-72 w-full object-cover" />
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 pb-24">
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
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[auto_1fr]">
          <div className="mx-auto bg-cream p-5">
            {origin && <QRCodeSVG value={reviewUrl} size={200} bgColor="transparent" fgColor="currentColor" className="text-cream-foreground" />}
          </div>
          <div>
            <p className="eyebrow mb-3">Părerea ta contează</p>
            <h2 className="mb-4 text-4xl font-semibold tracking-tight">Scanează și lasă-ne o recenzie</h2>
            <p className="mb-8 max-w-lg text-muted-foreground">
              Ai primit un ceas Lunaris? Scanează codul QR cu telefonul și spune-ne cum arată la tine acasă.
            </p>
            <Link to="/review" className="inline-block bg-primary px-7 py-4 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">Scrie o recenzie</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="mx-auto mb-6 max-w-2xl px-6 text-4xl font-semibold tracking-tight md:text-5xl">Vrei un ceas creat doar pentru tine?</h2>
        <a href={waLink("Bună! Vreau o ofertă pentru un ceas personalizat.")} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp px-8 py-4 text-sm font-bold text-whatsapp-foreground">
          <WhatsAppIcon className="h-5 w-5" /> Scrie-ne pe WhatsApp
        </a>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lunaris Atelier · Ceasuri handmade
      </footer>

      <WhatsAppSticky />
    </div>
  );
}
