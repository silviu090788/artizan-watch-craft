import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import lunar from "@/assets/ceas-lunar.jpg.asset.json";
import { WhatsAppIcon, WhatsAppSticky } from "@/components/WhatsAppButton";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "Lasă o recenzie | Lunaris Atelier" },
      { name: "description", content: "Spune-ne cum arată ceasul tău Lunaris acasă. Recenzia ta ne ajută enorm." },
      { property: "og:title", content: "Lasă o recenzie | Lunaris Atelier" },
      { property: "og:description", content: "Spune-ne cum arată ceasul tău Lunaris acasă." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Review,
});

function Review() {
  const [stars, setStars] = useState(5);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const msg = `Recenzie Lunaris ${"★".repeat(stars)}${"☆".repeat(5 - stars)}\nNume: ${name || "-"}\n${text}`;

  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-lg">
        <Link to="/" className="font-display text-lg font-extrabold tracking-[0.25em]">LUNARIS</Link>
        <img src={lunar.url} alt="Ceas Lunaris" className="shadow-glow mx-auto my-10 w-40 rounded-full" />
        <p className="eyebrow mb-3 text-center">Mulțumim!</p>
        <h1 className="mb-3 text-center text-3xl font-semibold tracking-tight">Cum ți se pare ceasul tău?</h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">Recenzia ta ajută alți oameni să ne descopere.</p>

        <div className="mb-6 flex justify-center gap-2" role="radiogroup" aria-label="Notă">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" aria-label={`${n} stele`} onClick={() => setStars(n)}
              className={`text-4xl transition ${n <= stars ? "text-primary" : "text-muted-foreground/40"}`}>★</button>
          ))}
        </div>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Numele tău"
          className="mb-3 w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder="Scrie câteva cuvinte despre ceas..."
          className="mb-5 w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
        <a href={waLink(msg)} target="_blank" rel="noreferrer"
          className="flex w-full items-center justify-center gap-3 bg-whatsapp py-4 text-sm font-bold text-whatsapp-foreground">
          <WhatsAppIcon className="h-5 w-5" /> Trimite recenzia
        </a>
      </div>
      <WhatsAppSticky />
    </div>
  );
}
