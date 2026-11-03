const guides = [
  { t: "Mes 90 premiers jours", d: "La checklist des démarches d'arrivée, dans l'ordre : VLS-TS, sécu, CVEC, CAF, banque." },
  { t: "Se loger", d: "Constituer son dossier, le garant (Visale), les quartiers, éviter les arnaques." },
  { t: "Aides & budget", d: "APL, aide d'urgence CROUS, coût de la vie, envoi d'argent au pays." },
  { t: "Travailler pendant ses études", d: "Droits selon le titre de séjour, CV et entretien à la française." },
];

export default function Ressources() {
  return (
    <main className="wrap" style={{ paddingBlock: 48, maxWidth: 980 }}>
      <h1 style={{ fontSize: "2.2rem" }}>Ressources & guides</h1>
      <p className="lead" style={{ marginBottom: 30 }}>
        Tout ce qu&apos;il faut savoir pour s&apos;installer et réussir, expliqué
        simplement, du point de vue d&apos;un étudiant passé par là.
      </p>

      <div className="guides">
        {guides.map((g, i) => (
          <article className="guide" key={i}>
            <h3>{g.t}</h3>
            <p>{g.d}</p>
            <span className="guide-cta">Lire le guide (bientôt)</span>
          </article>
        ))}
      </div>

      <style>{`
        .guides{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .guide{border:1px solid var(--line);border-radius:14px;padding:24px;background:#fff;border-top:4px solid var(--green)}
        .guide h3{font-size:1.25rem;color:var(--green)}
        .guide p{color:var(--muted);margin-top:8px}
        .guide-cta{display:inline-block;margin-top:14px;color:var(--gold);font-weight:700;font-size:.92rem}
        @media(max-width:640px){.guides{grid-template-columns:1fr}}
      `}</style>
    </main>
  );
}
