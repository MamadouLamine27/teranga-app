"use client";

import { useState } from "react";

// --- Données à remplir plus tard ---
const aVenir = [
  { titre: "[Nom de l'événement]", date: "[JJ mois AAAA]", lieu: "[Lieu]", desc: "[Courte description]" },
];
const passes = [
  { titre: "[Événement passé]", date: "[JJ mois AAAA]", lieu: "[Lieu]", desc: "[Ce qu'il s'est passé]" },
];

export default function Evenements() {
  const [onglet, setOnglet] = useState<"avenir" | "passes" | "galerie">("avenir");

  return (
    <main className="wrap" style={{ paddingBlock: 48, maxWidth: 980 }}>
      <h1 style={{ fontSize: "2.2rem" }}>Événements</h1>
      <p className="lead" style={{ marginBottom: 24 }}>
        La vie de l&apos;association : nos rendez-vous à venir, nos moments passés,
        et la galerie.
      </p>

      <div className="tabs">
        <button className={onglet === "avenir" ? "on" : ""} onClick={() => setOnglet("avenir")}>À venir</button>
        <button className={onglet === "passes" ? "on" : ""} onClick={() => setOnglet("passes")}>Passés</button>
        <button className={onglet === "galerie" ? "on" : ""} onClick={() => setOnglet("galerie")}>Galerie</button>
      </div>

      {onglet === "avenir" && (
        <div className="liste">
          {aVenir.map((e, i) => (
            <article className="evt" key={i}>
              <div className="evt-date">{e.date}</div>
              <h3>{e.titre}</h3>
              <div className="evt-lieu">{e.lieu}</div>
              <p>{e.desc}</p>
              <span className="evt-cta">S&apos;inscrire (bientôt via HelloAsso)</span>
            </article>
          ))}
        </div>
      )}

      {onglet === "passes" && (
        <div className="liste">
          {passes.map((e, i) => (
            <article className="evt" key={i}>
              <div className="evt-date">{e.date}</div>
              <h3>{e.titre}</h3>
              <div className="evt-lieu">{e.lieu}</div>
              <p>{e.desc}</p>
            </article>
          ))}
        </div>
      )}

      {onglet === "galerie" && (
        <div className="galerie">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div className="photo" key={n}>Photo {n}</div>
          ))}
          <p className="note">Les photos des événements seront ajoutées ici.</p>
        </div>
      )}

      <style>{`
        .tabs{display:flex;gap:8px;border-bottom:1px solid var(--line);margin-bottom:28px}
        .tabs button{background:none;border:0;padding:12px 16px;font-size:1rem;font-family:inherit;color:var(--muted);cursor:pointer;border-bottom:3px solid transparent;margin-bottom:-1px}
        .tabs button.on{color:var(--green);border-bottom-color:var(--green);font-weight:600}
        .liste{display:grid;gap:18px}
        .evt{border:1px solid var(--line);border-radius:14px;padding:22px;background:#fff}
        .evt-date{color:var(--gold);font-weight:700;font-size:.9rem}
        .evt h3{font-size:1.3rem;margin:6px 0}
        .evt-lieu{color:var(--muted);font-size:.9rem;margin-bottom:8px}
        .evt p{color:var(--ink)}
        .evt-cta{display:inline-block;margin-top:12px;color:var(--green);font-weight:600}
        .galerie{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .photo{aspect-ratio:4/3;background:#efe9db;border:1px dashed var(--line);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.9rem}
        .note{grid-column:1/-1;color:var(--muted);font-size:.9rem;margin-top:6px}
        @media(max-width:640px){.galerie{grid-template-columns:repeat(2,1fr)}}
      `}</style>
    </main>
  );
}
